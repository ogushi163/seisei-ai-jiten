import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dictionary from "../data/dictionary";
import useFavorites from "../hooks/useFavorites";

const MENU_CATEGORIES = ["技術", "モデル", "開発ツール", "サービス", "企業"];

// 左上の☰から開く、お気に入り／カテゴリ（子分類）のドロワーメニュー
export default function SideMenu({ isOpen, onClose }) {
    const navigate = useNavigate();
    const { favorites, isFavorite, toggleFavorite } = useFavorites();
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = section => {
        setOpenSection(current => (current === section ? null : section));
    };

    const goToTerm = title => {
        navigate(`/results?q=${encodeURIComponent(title)}`);
        onClose();
    };

    const goToCategory = category => {
        navigate(`/results?category=${encodeURIComponent(category)}`);
        onClose();
    };

    const favoriteItems = favorites.filter(key => dictionary[key]);

    return (
        <>
            <div
                className={`menu-overlay${isOpen ? " open" : ""}`}
                onClick={onClose}
            />
            <nav className={`side-menu${isOpen ? " open" : ""}`}>
                <div className="side-menu-header">
                    <span>メニュー</span>
                    <button
                        type="button"
                        className="menu-close"
                        aria-label="メニューを閉じる"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                <div className="accordion">
                    <button
                        type="button"
                        className={`accordion-toggle${openSection === "favorites" ? " open" : ""}`}
                        onClick={() => toggleSection("favorites")}
                    >
                        <span>ブックマーク</span>
                        <span className="accordion-arrow">&gt;</span>
                    </button>
                    <div className={`accordion-panel${openSection === "favorites" ? " open" : ""}`}>
                        {favoriteItems.length === 0 ? (
                            <p className="menu-empty">ブックマークはまだありません。</p>
                        ) : (
                            favoriteItems.map(key => (
                                <button
                                    key={key}
                                    type="button"
                                    className="menu-item"
                                    onClick={() => goToTerm(dictionary[key].title)}
                                >
                                    <span>{dictionary[key].title}</span>
                                    <span
                                        className="menu-item-star"
                                        onClick={event => {
                                            event.stopPropagation();
                                            toggleFavorite(key);
                                        }}
                                    >
                                        {isFavorite(key) ? "★" : "☆"}
                                    </span>
                                </button>
                            ))
                        )}
                    </div>
                </div>

                <div className="accordion">
                    <button
                        type="button"
                        className={`accordion-toggle${openSection === "categories" ? " open" : ""}`}
                        onClick={() => toggleSection("categories")}
                    >
                        <span>カテゴリ</span>
                        <span className="accordion-arrow">&gt;</span>
                    </button>
                    <div className={`accordion-panel${openSection === "categories" ? " open" : ""}`}>
                        {MENU_CATEGORIES.map(category => (
                            <button
                                key={category}
                                type="button"
                                className="menu-item"
                                onClick={() => goToCategory(category)}
                            >
                                <span>{category}</span>
                                <span className="menu-item-arrow">&gt;</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
