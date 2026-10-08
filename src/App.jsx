import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { FavoritesProvider } from "./hooks/useFavorites";
import { SearchHistoryProvider } from "./hooks/useSearchHistory";

function ScrollToTop() {
    const { key } = useLocation();

    useLayoutEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        const toTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };
        toTop();
        // 描画後にページ高さが変わってスクロール位置が戻るのを防ぐ
        const id = requestAnimationFrame(toTop);
        return () => cancelAnimationFrame(id);
    }, [key]);

    return null;
}

function ScrollTopButton() {
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);

    // body 直下に描画し、親要素の影響を受けず常に画面右下に固定する
    return createPortal(
        <button
            type="button"
            aria-label="ページの先頭へ戻る"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setPressed(false);
            }}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            style={{
                transition: "background .15s, transform .1s, box-shadow .15s",
                transform: pressed ? "scale(0.88)" : "scale(1)",
                position: "fixed",
                right: "20px",
                bottom: "20px",
                width: "48px",
                height: "48px",
                border: "none",
                borderRadius: "50%",
                background: pressed ? "#1d4ed8" : hovered ? "#2563eb" : "#333",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                boxShadow: pressed
                    ? "0 1px 3px rgba(0,0,0,.4)"
                    : "0 2px 8px rgba(0,0,0,.3)",
                zIndex: 2147483647,
            }}
        >
            ↑
        </button>,
        document.body
    );
}

function Layout({ children, showSearch }) {
    return (
        <>
            <Header showSearch={showSearch} />
            {children}
        </>
    );
}

export default function App() {
    return (
        <FavoritesProvider>
            <SearchHistoryProvider>
                <HashRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Layout showSearch={true}>
                                    <Home />
                                </Layout>
                            }
                        />
                        <Route
                            path="/results"
                            element={
                                <Layout showSearch={false}>
                                    <Results />
                                </Layout>
                            }
                        />
                    </Routes>
                    <footer>© 2026 生成AI辞典</footer>
                    <ScrollTopButton />
                </HashRouter>
            </SearchHistoryProvider>
        </FavoritesProvider>
    );
}
