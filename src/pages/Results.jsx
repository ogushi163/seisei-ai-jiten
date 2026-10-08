import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import dictionary from "../data/dictionary";
import TermCard from "../components/TermCard";
import useFavorites from "../hooks/useFavorites";

const SORT_OPTIONS = [
    { value: "default", label: "辞典順（標準）" },
    { value: "title-asc", label: "用語名：昇順（あ→ん・A→Z）" },
    { value: "title-desc", label: "用語名：降順（ん→あ・Z→A）" },
    { value: "category", label: "カテゴリ別" },
    { value: "favorite", label: "お気に入りを先頭に" },
    { value: "length-asc", label: "説明が短い順" },
    { value: "length-desc", label: "説明が長い順" },
];

const compareTitle = (a, b) => a[1].title.localeCompare(b[1].title, "ja");

export default function Results() {
    const [searchParams] = useSearchParams();
    const { isFavorite } = useFavorites();
    const [favoritesOnly, setFavoritesOnly] = useState(false);
    const [sortOrder, setSortOrder] = useState("default");
    const keyword = searchParams.get("q");
    const category = searchParams.get("category");

    let results = [];

    if (keyword) {
        const searchWord = keyword.toLowerCase();

        results = Object.entries(dictionary).filter(([, item]) =>
            item.title.toLowerCase().includes(searchWord) ||
            item.description.toLowerCase().includes(searchWord) ||
            item.category.toLowerCase().includes(searchWord)
        );
    } else if (category) {
        results = Object.entries(dictionary).filter(
            ([, item]) => item.category === category
        );
    }

    const filteredResults = favoritesOnly
        ? results.filter(([key]) => isFavorite(key))
        : results;

    // 並び替えは元配列を変更しないようコピーに対して行う（同値は辞典順を維持）
    const sorters = {
        "title-asc": compareTitle,
        "title-desc": (a, b) => compareTitle(b, a),
        category: (a, b) =>
            a[1].category.localeCompare(b[1].category, "ja") || compareTitle(a, b),
        favorite: (a, b) => isFavorite(b[0]) - isFavorite(a[0]),
        "length-asc": (a, b) => a[1].description.length - b[1].description.length,
        "length-desc": (a, b) => b[1].description.length - a[1].description.length,
    };
    const visibleResults = sorters[sortOrder]
        ? [...filteredResults].sort(sorters[sortOrder])
        : filteredResults;

    return (
        <main className="container">
            <div className="filter-bar">
                <label className="sort-label">
                    並び替え
                    <select
                        className="sort-select"
                        value={sortOrder}
                        onChange={event => setSortOrder(event.target.value)}
                    >
                        {SORT_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <button
                    type="button"
                    className={`filter-btn${favoritesOnly ? " active" : ""}`}
                    aria-pressed={favoritesOnly}
                    onClick={() => setFavoritesOnly(prev => !prev)}
                >
                    {favoritesOnly ? "★" : "☆"} お気に入りのみ表示
                </button>
            </div>
            <div id="resultArea">
                {visibleResults.length > 0 ? (
                    visibleResults.map(([key, term]) => (
                        <TermCard key={key} termKey={key} term={term} />
                    ))
                ) : (
                    <div className="card">
                        <h2>検索結果なし</h2>
                        <p>
                            {favoritesOnly && results.length > 0
                                ? "この検索結果にお気に入りの用語はありません。"
                                : "該当する用語が見つかりませんでした。"}
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
