import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import useSearchHistory from "../hooks/useSearchHistory";
import SideMenu from "./SideMenu";

// 全ページ共通のヘッダー。ホーム画面は大きく、検索結果画面はコンパクトに表示する
export default function Header({ compact = false }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const urlKeyword = searchParams.get("q") || "";
    const [keyword, setKeyword] = useState(urlKeyword);
    const [menuOpen, setMenuOpen] = useState(false);
    const searchInputRef = useRef(null);
    const { history, addToHistory, removeFromHistory, clearHistory } = useSearchHistory();

    // 検索結果画面に遷移した際、URL の検索キーワードを入力欄に反映する
    useEffect(() => {
        setKeyword(urlKeyword);
    }, [urlKeyword]);

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

    // 検索入力欄（ホーム・検索結果画面で共通パーツ）
    const searchInputArea = (
        <div className={`search-area${compact ? " search-area-compact" : ""}`}>
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
            <button type="button" onClick={handleSearchClick}>検索</button>
        </div>
    );

    return (
        <>
            <header className={compact ? "header-compact" : undefined}>
                <button
                    type="button"
                    className="menu-btn"
                    aria-label="メニューを開く"
                    onClick={() => setMenuOpen(true)}
                >
                    ☰
                </button>

                {compact ? (
                    <div className="header-compact-inner">
                        <h3 className="header-compact-title">
                            <Link to="/">生成AI辞典</Link>
                        </h3>
                        {searchInputArea}
                    </div>
                ) : (
                    <>
                        <h1><Link to="/">生成AI辞典</Link></h1>
                        {searchInputArea}
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
                )}
            </header>

            <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
