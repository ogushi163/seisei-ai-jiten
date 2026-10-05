import { useNavigate } from "react-router-dom";
import dictionary from "../data/dictionary";
import MiniTermCard from "../components/MiniTermCard";
import useFavorites from "../hooks/useFavorites";
import { getDailyTermKeys } from "../utils/dailyTerms";

const CATEGORIES = ["技術", "モデル", "開発ツール", "サービス", "企業"];

export default function Home() {
    const navigate = useNavigate();
    const { favorites } = useFavorites();

    const favoriteKeys = favorites.filter(key => dictionary[key]);
    const dailyKeys = getDailyTermKeys(dictionary, 3);

    const showCategory = category => {
        navigate(`/results?category=${encodeURIComponent(category)}`);
    };

    return (
        <main className="container">
            <section>
                <h2 className="section-title">お気に入り</h2>
                <div className="grid">
                    {favoriteKeys.length === 0 ? (
                        <p className="empty-message">お気に入りに登録された用語はまだありません。</p>
                    ) : (
                        favoriteKeys.map(key => (
                            <MiniTermCard key={key} termKey={key} term={dictionary[key]} />
                        ))
                    )}
                </div>
            </section>

            <section>
                <h2 className="section-title">今日の用語</h2>
                <div className="grid">
                    {dailyKeys.map(key => (
                        <MiniTermCard key={key} termKey={key} term={dictionary[key]} />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="section-title">カテゴリ</h2>
                <div className="grid">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            className="button"
                            onClick={() => showCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>
        </main>
    );
}
