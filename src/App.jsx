import { useLayoutEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { FavoritesProvider } from "./hooks/useFavorites";
import { SearchHistoryProvider } from "./hooks/useSearchHistory";

function ScrollToTop() {
    const { pathname, search } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, search]);

    return null;
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
                </HashRouter>
            </SearchHistoryProvider>
        </FavoritesProvider>
    );
}
