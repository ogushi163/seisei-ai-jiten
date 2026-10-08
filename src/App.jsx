import { useEffect, useLayoutEffect, useState } from "react";
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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 200);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            className={`scroll-top-btn${visible ? " visible" : ""}`}
            aria-label="ページの先頭へ戻る"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            ↑
        </button>
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
