import { useNavigate } from "react-router-dom";
import dictionary from "../data/dictionary";
import relatedTerms from "../data/relatedTerms";
import useFavorites from "../hooks/useFavorites";

// 検索結果カード：お気に入りボタン、本文、関連用語タグを表示する
export default function TermCard({ termKey, term }) {
    const navigate = useNavigate();
    const { isFavorite, toggleFavorite } = useFavorites();
    const active = isFavorite(termKey);

    const relatedKeys = (relatedTerms[termKey] || []).filter(
        key => dictionary[key]
    );

    const handleFavoriteClick = event => {
        event.stopPropagation();
        toggleFavorite(termKey);
    };

    const goToRelated = relatedKey => {
        navigate(`/results?q=${encodeURIComponent(dictionary[relatedKey].title)}`);
    };

    return (
        <div className="card">
            <button
                type="button"
                className={`favorite-btn${active ? " active" : ""}`}
                aria-pressed={active}
                onClick={handleFavoriteClick}
            >
                {active ? "★" : "☆"}
            </button>
            <h2>{term.title}</h2>
            <p><strong>カテゴリ：</strong>{term.category}</p>
            <br />
            <p>{term.description}</p>

            {relatedKeys.length > 0 && (
                <div className="related-terms">
                    <strong>関連用語：</strong>
                    {relatedKeys.map(key => (
                        <button
                            key={key}
                            type="button"
                            className="tag-btn"
                            onClick={() => goToRelated(key)}
                        >
                            {dictionary[key].title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
