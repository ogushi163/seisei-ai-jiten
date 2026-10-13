import dictionary from "./dictionary.js";

// 手動で指定された関連用語ベース（dictionary.js のキーで指定）
// description に直接名前が出現しないが関連付けたい用語などを定義する
const manualRelatedTerms = {
    "llm": ["transformer", "gpt", "claude", "gemini"],
    "gpt": ["openai", "chatgpt", "copilot", "gpt-5"],
    "openai": ["gpt", "chatgpt", "copilot"],
    "rag": ["llm", "hallucination", "context_window"],
    "gpt-3.5": ["gpt", "gpt-4", "chatgpt"],
    "gpt-4": ["gpt-3.5", "gpt-4o", "gpt-4.1"],
    "gpt-4o": ["gpt-4", "gpt-4.1", "chatgpt"],
    "gpt-4.1": ["gpt-4o", "gpt-5", "github_copilot"],
    "gpt-5": ["gpt-4.1", "openai", "chatgpt"],
    "chatgpt": ["openai", "gpt", "gpt-5"],
    "gemini": ["gemini_pro", "gemini_flash", "multimodalmodels"],
    "anthropic": ["claude", "claude_code", "claude sonnet"],
    "meta": ["llama", "llama_4_scout", "llama_4_maverick"],
    "xai": ["grok", "grok_4.7"],
    "claude_code": ["anthropic", "claude", "aiagent"],
    "github_copilot": ["copilot", "cursor", "aiagent"],
    "cursor": ["github_copilot", "claude_code", "aikudokaihatsu"],
    "kiro": ["aikudokaihatsu", "cursor", "aiagent"],
    "claude": ["anthropic", "claude sonnet", "gpt","gemini"],
    "copilot": ["github_copilot", "gpt", "openai"],
    "llama": ["meta", "llama_4_scout", "llama_4_maverick"],
    "grok": ["xai", "grok_4.7"],
    "gemini_pro": ["gemini", "gemini_flash"],
    "gemini_flash": ["gemini_pro", "gemini_flash-lite"],
    "gemini_flash-lite": ["gemini_flash", "gemini_pro"],
    "claude opus": ["claude", "claude sonnet", "claude haiku"],
    "claude sonnet": ["claude opus", "claude haiku", "claude"],
    "claude haiku": ["claude sonnet", "claude opus"],
    "llama_4_scout": ["llama_4_maverick", "llama_4_behemoth", "meta"],
    "llama_4_maverick": ["llama_4_scout", "llama_4_behemoth"],
    "llama_4_behemoth": ["llama_4_maverick", "llama_4_scout"],
    "grok_4.7": ["grok", "xai"],
    "multimodalmodels": ["gpt-4o", "gemini", "transformer"],
    "aikudokaihatsu": ["aiagent", "claude_code", "github_copilot", "cursor"],
    "aiagent": ["toolcalling", "aikudokaihatsu", "claude_code"],
    "pronptengineering": ["llm", "context_window", "hallucination"],
    "toolcalling": ["aiagent", "llm"],
    "context_window": ["token", "parameter", "llm"],
    "finetuning": ["ai_model", "parameter", "llm"],
    "parameter": ["ai_model", "transformer", "token"],
    "token": ["context_window", "parameter"],
    "ai_model": ["transformer", "parameter", "finetuning"],
    "transformer": ["ai_model", "suironengine", "textencoder"],
    "textencoder": ["transformer", "ai_model"],
    "suironengine": ["ai_model", "llm"],
    "hallucination": ["rag", "llm"]
};

// 辞書に登録されている用語一覧（キーと小文字化タイトル）
const termEntries = Object.entries(dictionary).map(([key, item]) => ({
    key,
    titleLower: item.title.toLowerCase(),
}));

// 手動指定の関連用語に加え、description 内に含まれる用語（title）を自動抽出して合成する
const relatedTerms = {};

for (const [key, item] of Object.entries(dictionary)) {
    const descLower = (item.description || "").toLowerCase();
    const list = [];
    const seen = new Set();

    // 1. 手動定義の関連用語を優先して追加（dictionary に存在するキーのみ）
    for (const relKey of manualRelatedTerms[key] || []) {
        if (!seen.has(relKey) && relKey !== key && dictionary[relKey]) {
            seen.add(relKey);
            list.push(relKey);
        }
    }

    // 2. description に含まれている用語（他用語の title）を追加
    for (const target of termEntries) {
        if (target.key === key) continue;
        if (seen.has(target.key)) continue;

        if (descLower.includes(target.titleLower)) {
            seen.add(target.key);
            list.push(target.key);
        }
    }

    relatedTerms[key] = list;
}

export default relatedTerms;
