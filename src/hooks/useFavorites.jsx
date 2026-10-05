import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const FAVORITES_KEY = "favoriteWords";

function readFavorites() {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
}

const FavoritesContext = createContext(null);

// アプリ全体でお気に入り状態を共有するプロバイダー（localStorageと同期）
export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(readFavorites);

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const isFavorite = useCallback(
        key => favorites.includes(key),
        [favorites]
    );

    const toggleFavorite = useCallback(key => {
        setFavorites(current =>
            current.includes(key)
                ? current.filter(item => item !== key)
                : [...current, key]
        );
    }, []);

    const value = useMemo(
        () => ({ favorites, isFavorite, toggleFavorite }),
        [favorites, isFavorite, toggleFavorite]
    );

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default function useFavorites() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error("useFavorites は FavoritesProvider の内側で使用してください");
    }

    return context;
}
