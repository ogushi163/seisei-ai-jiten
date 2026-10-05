import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const SEARCH_HISTORY_KEY = "searchHistory";
const SEARCH_HISTORY_MAX = 10;

function readHistory() {
    const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
}

const SearchHistoryContext = createContext(null);

// アプリ全体で検索履歴を共有するプロバイダー（localStorageと同期）
export function SearchHistoryProvider({ children }) {
    const [history, setHistory] = useState(readHistory);

    useEffect(() => {
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
    }, [history]);

    // 同じキーワードは最新のものだけ残し、新しい順に先頭へ追加する
    const addToHistory = useCallback(word => {
        setHistory(current => {
            const next = current.filter(item => item !== word);
            next.unshift(word);
            return next.slice(0, SEARCH_HISTORY_MAX);
        });
    }, []);

    const removeFromHistory = useCallback(word => {
        setHistory(current => current.filter(item => item !== word));
    }, []);

    const clearHistory = useCallback(() => {
        setHistory([]);
    }, []);

    const value = useMemo(
        () => ({ history, addToHistory, removeFromHistory, clearHistory }),
        [history, addToHistory, removeFromHistory, clearHistory]
    );

    return (
        <SearchHistoryContext.Provider value={value}>
            {children}
        </SearchHistoryContext.Provider>
    );
}

export default function useSearchHistory() {
    const context = useContext(SearchHistoryContext);

    if (!context) {
        throw new Error("useSearchHistory は SearchHistoryProvider の内側で使用してください");
    }

    return context;
}
