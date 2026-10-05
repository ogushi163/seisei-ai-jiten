import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { FavoritesProvider } from "./hooks/useFavorites";
import { SearchHistoryProvider } from "./hooks/useSearchHistory";

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
