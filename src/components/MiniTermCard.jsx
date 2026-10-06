import { useNavigate } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";

// トップページの「お気に入り」「今日の用語」で使う小さめのカード
export default function MiniTermCard({ termKey, term }) {
    // 用語の検索結果ページへ移動するための関数を取得する
    const navigate = useNavigate();

    // アプリ全体で共有しているお気に入り状態を確認・変更する関数を取得する
    const { isFavorite, toggleFavorite } = useFavorites();

    // この用語がお気に入りに登録されているかを確認する
    const active = isFavorite(termKey);

    // 星ボタンが押されたときに、お気に入り状態を切り替える
    const handleFavoriteClick = event => {
        // カード自体のクリック処理（用語ページへの移動）には伝わらないようにする
        event.stopPropagation();
        toggleFavorite(termKey);
    };

    // カードが押されたとき、用語名で検索した結果ページへ移動する
    const goToTerm = () => {
        navigate(`/results?q=${encodeURIComponent(term.title)}`);
    };

    return (
        // カード全体をクリックすると用語の検索結果ページへ移動する
        <div className="card favorite-card" onClick={goToTerm}>
            <button
                type="button"
                // お気に入りなら active クラスを付け、状態に応じた星を表示する
                className={`favorite-btn${active ? " active" : ""}`}
                // 支援技術にお気に入り状態を伝える
                aria-pressed={active}
                onClick={handleFavoriteClick}
            >
                {active ? "★" : "☆"}
            </button>
            {/* 用語名とカテゴリを表示する */}
            <h3>{term.title}</h3>
            <p><strong>カテゴリ：</strong>{term.category}</p>
        </div>
    );
}
