import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import dictionary from "../data/dictionary";
import TermCard from "../components/TermCard";
import useFavorites from "../hooks/useFavorites";

export default function Results() {
    const [searchParams] = useSearchParams();
    const { isFavorite } = useFavorites();
    const [favoritesOnly, setFavoritesOnly] = useState(false);
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

    const visibleResults = favoritesOnly
        ? results.filter(([key]) => isFavorite(key))
        : results;

    return (
        <main className="container">
            <div className="filter-bar">
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
