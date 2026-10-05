import { useNavigate } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";

// トップページの「お気に入り」「今日の用語」で使う小さめのカード
export default function MiniTermCard({ termKey, term }) {
    const navigate = useNavigate();
    const { isFavorite, toggleFavorite } = useFavorites();
    const active = isFavorite(termKey);

    const handleFavoriteClick = event => {
        event.stopPropagation();
        toggleFavorite(termKey);
    };

    const goToTerm = () => {
        navigate(`/results?q=${encodeURIComponent(term.title)}`);
    };

    return (
        <div className="card favorite-card" onClick={goToTerm}>
            <button
                type="button"
                className={`favorite-btn${active ? " active" : ""}`}
                aria-pressed={active}
                onClick={handleFavoriteClick}
            >
                {active ? "★" : "☆"}
            </button>
            <h3>{term.title}</h3>
            <p><strong>カテゴリ：</strong>{term.category}</p>
        </div>
    );
}
