// 日付（年月日）から疑似乱数を生成する関数を作る
function createSeededRandom(seed) {
    let state = seed;
    return function () {
        state |= 0;
        state = (state + 0x6D2B79F5) | 0;
        let t = Math.imul(state ^ (state >>> 15), 1 | state);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function getTodaySeed() {
    const today = new Date();
    return (
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate()
    );
}

// その日の間は結果が変わらないよう、日付をシードにして用語を選ぶ
export function getDailyTermKeys(dictionary, count) {
    const keys = Object.keys(dictionary);
    const random = createSeededRandom(getTodaySeed());
    const shuffled = [...keys];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, Math.min(count, shuffled.length));
}
