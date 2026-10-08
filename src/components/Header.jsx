import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSearchHistory from "../hooks/useSearchHistory";
import SideMenu from "./SideMenu";

// 全ページ共通のヘッダー。トップページでは検索欄も表示する
export default function Header({ showSearch = true }) {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const searchInputRef = useRef(null);
    const { history, addToHistory, removeFromHistory, clearHistory } = useSearchHistory();

    const runSearch = word => {
        const trimmed = word.trim();

        if (!trimmed) {
            alert("検索キーワードを入力してください。");
            return;
        }

        addToHistory(trimmed);
        navigate(`/results?q=${encodeURIComponent(trimmed)}`);
    };

    const handleSearchClick = () => runSearch(keyword);

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            runSearch(keyword);
        }
    };

    return (
        <>
            <header className={showSearch ? undefined : "header-compact"}>
                <button
                    type="button"
                    className="menu-btn"
                    aria-label="メニューを開く"
                    onClick={() => setMenuOpen(true)}
                >
                    ☰
                </button>

                {showSearch ? (
                    <>
                        <h1><Link to="/">生成AI辞典</Link></h1>
                        <div className="search-area">
                            <div className="search-input-wrap">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    value={keyword}
                                    placeholder="用語を入力"
                                    onChange={event => setKeyword(event.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                {keyword && (
                                    <button
                                        type="button"
                                        className="search-clear"
                                        aria-label="入力を全消去"
                                        onClick={() => {
                                            setKeyword("");
                                            searchInputRef.current?.focus();
                                        }}
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                            <button onClick={handleSearchClick}>検索</button>
                        </div>
                        <div className="search-history">
                            {history.length > 0 && (
                                <>
                                    <div className="history-header">
                                        <span>最近の検索</span>
                                        <button
                                            type="button"
                                            className="history-clear"
                                            onClick={clearHistory}
                                        >
                                            すべて削除
                                        </button>
                                    </div>
                                    <div className="history-tags">
                                        {history.map(word => (
                                            <span className="history-tag" key={word}>
                                                <button
                                                    type="button"
                                                    className="tag-btn"
                                                    onClick={() => runSearch(word)}
                                                >
                                                    {word}
                                                </button>
                                                <button
                                                    type="button"
                                                    className="history-remove"
                                                    aria-label="履歴から削除"
                                                    onClick={() => removeFromHistory(word)}
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <h3><Link to="/">生成AI辞典</Link></h3>
                )}
            </header>

            <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
