import { useSearchParams } from "react-router-dom";
import dictionary from "../data/dictionary";
import TermCard from "../components/TermCard";

export default function Results() {
    const [searchParams] = useSearchParams();
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

    return (
        <main className="container">
            <div id="resultArea">
                {results.length > 0 ? (
                    results.map(([key, term]) => (
                        <TermCard key={key} termKey={key} term={term} />
                    ))
                ) : (
                    <div className="card">
                        <h2>検索結果なし</h2>
                        <p>該当する用語が見つかりませんでした。</p>
                    </div>
                )}
            </div>
        </main>
    );
}
