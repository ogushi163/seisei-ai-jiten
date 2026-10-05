const dictionary = {
    "llm": {
        title: "LLM",
        category: "技術",
        description: "大規模言語モデル。大量の文章データを学習し、人間のような文章作成や要約、翻訳、質問応対などを行うAIモデルの総称であり、GPT、Gemini、Claudeなどが代表的な例である。特に自然言語の理解と生成を得意とすることが特徴である。"
    },

    "gpt": {
        title: "GPT",
        category: "モデル",
        description: "OpenAIが開発した大規模言語モデルのシリーズである。文章の生成、要約、翻訳、プログラミング支援に加え、画像や音声を理解できるマルチモーダル機能を備えている。特に高度な推論能力や画像解析能力に優れており、ChatGPTやMicrosoft Copilotなどのサービスで利用されている。"
    },

    "openai":{
        title:  "OpenAI",
        category:  "企業",
        description:  "OpenAIとは、生成AIや大規模言語モデルの研究・開発を行う米国のAI企業である。ChatGPTやGPTシリーズを開発しており、文章生成、画像解析、音声処理などの分野で広く利用されている。また、Microsoftとの提携を通じて、Microsoft CopilotなどのAIサービスにも技術を提供している。"

    },

    "rag": {
        title: "RAG",
        category: "技術",
        description: "AIが回答を作る前に、外部の文書やデータベースを検索して関連情報を取得し、その情報を基に回答を生成する技術。学習済みの知識だけに頼らず、最新情報や社内情報を参照できるため、回答精度の向上やハルシネーションの抑制に役立つ。Microsoft Copilotや社内AIチャットボットなどで広く利用されている。"
    },

    "gpt-3.5": {
        title: "GPT-3.5",
        category: "モデル",
        description: "2022年にリリース。ChatGPTの初期モデルとして広く利用され、生成AIの普及に大きく貢献。応答速度が速く利用コストも低いが、推論能力や精度はGPT-4系に劣る。"
    },

    "gpt-4": {
        title: "GPT-4",
        category: "モデル",
        description: "2023年リリース。GPT-3.5の後継として登場した大規模言語モデルである。高度な文章理解や推論能力を持ち、長文作成や分析業務に活用される。"
    },

    "gpt-4o": {
        title: "GPT-4o",
        category: "モデル",
        description: "2024年リリース。テキスト、画像、音声を統合的に扱えるマルチモーダルモデルである。応答速度と性能のバランスに優れ、ChatGPTの一般利用向けモデルとして広く利用されている。無料ユーザが主に利用している。"
    },
    "gpt-4.1": {
        title: "GPT-4.1",
        category: "モデル",
        description: "2025年リリース。GPT-4oを上回るコーディング性能と指示追従性能を持つモデルである。長文処理能力が高く、ソフトウェア開発や文書分析に適している。"
    },
    "gpt-5": {
        title: "GPT-5",
        category: "モデル",
        description: "2025年リリース。高度な推論能力や複雑な問題解決に優れ、プログラミング支援や業務自動化などの高度な用途に適している。"
    },
    "chatgpt": {
        title: "chatGPT",
        category: "サービス",
        description: "OpenAIが提供する対話型AIサービスである。GPTシリーズのモデルを利用しており、質問応答や文章作成、要約、プログラミング支援などを行うことができる。利用者がAIと自然な会話を行うためのサービスとして提供されている。"
    },
    "gemini": {
        title: "Gemini",
        category: "サービス",
        description: "Googleが開発した大規模言語モデルのシリーズである。テキスト、画像、音声、動画を統合的に処理できるマルチモーダルAIであり、Googleの検索サービスやGmailなどとの連携に強みを持つ。文章作成、情報検索、プログラミング支援など幅広い用途に利用されている。"
    },

    "anthropic": {
        title: "Anthropic",
        category: "企業",
        description: "Anthropicとは、生成AIおよび大規模言語モデルの研究・開発を行う米国のAI企業である。対話型AIであるClaudeシリーズを開発しており、安全性や信頼性を重視したAIの実現に取り組んでいる。OpenAIやGoogleと並ぶ生成AI分野の主要企業の一つである。"
    },
     "meta": {
        title: "Meta",
        category: "企業",
        description: "Facebook、Instagram、WhatsAppなどを運営する米国のIT企業である。生成AI分野ではLlamaシリーズの大規模言語モデル（LLM）を開発・公開しており、オープンソースAIの普及を推進している。SNS、メタバース、AI技術を主な事業領域としており、世界有数のテクノロジー企業の一つである。"
    },
    "xai": {
        title: "xAI",
        category: "企業",
        description: "2023年に設立された米国のAI企業である。対話型AIであるGrokシリーズを開発しており、生成AIやAIエージェント技術の研究・提供を行っている。リアルタイム情報の活用やSNSとの連携を特徴としており、OpenAIやAnthropicなどと競合するAI企業の一つである。"
    },
    "claude_code": {
        title: "Claude Code",
        category: "開発ツール",
        description: "Anthropicが提供するターミナルベースのAIコーディングエージェントである。ソースコードの調査、実装、テスト実行、修正を自然言語の指示だけで自律的に行える。AI駆動開発で広く利用されており、開発者はコードを書くよりも要件整理やレビューに注力する開発スタイルを実現できる。"
    },
    "github_copilot": {
        title: "GitHub Copilot",
        category: "開発ツール",
        description: "GitHub Copilotとは、GitHubとOpenAIが共同開発したAIコーディング支援ツールである。ソースコードの自動補完やコード生成、テストコード作成、バグ修正支援などを行い、開発効率の向上を支援する。近年はAIエージェント機能も搭載されており、自然言語による指示から調査や実装を支援するAI駆動開発ツールとして活用されている。"
    },
    "cursor": {
        title: "Cursor",
        category: "開発ツール",
        description: "生成AIを活用したAI搭載コードエディタである。ソースコードの解析、実装、リファクタリング、バグ修正などを自然言語で支援する。AI駆動開発で広く利用される代表的なツールの一つである。"
    },
    "kiro": {
        title: "Kiro",
        category: "開発ツール",
        description: "AWSが開発したAIを搭載したソフトウェア開発支援ツール（IDE）である。要件定義から設計、実装、テストまでを支援し、AIエージェントを活用した開発を行うことができる。AI駆動開発を実現するツールの一つとして利用されている。"
    },
    "claude": {
        title: "Claude",
        category: "サービス",
        description: "Anthropicが開発した対話型AIおよび大規模言語モデルのシリーズである。自然な文章生成や高度な推論、プログラミング支援を得意としており、安全性と信頼性を重視して設計されている。GPTやGeminiと並ぶ代表的な生成AIの一つである。"
    },
    "copilot": {
        title: "Microsoft Copilot",
        category: "サービス",
        description: "Microsoftが提供するAIアシスタントサービスである。GPTシリーズを基盤としており、文書作成、要約、情報検索、プログラミング支援などを行うことができる。Microsoft360やWindows、GitHubなどのサービスと連携して利用される。"

    },
    "llama": {
        title: "Llama",
        category: "サービス",
        description: "Meta社が開発するオープンソースのLLMシリーズである。文章作成や要約、プログラミング支援などに利用される。自社サーバーやPC上で利用しやすいことが特徴。"

    },
    "grok": {
        title: "Grok",
        category: "サービス",
        description: "xAI社が開発した対話型AIおよびLLMのシリーズである。リアルタイム情報の活用やX(旧Twitter)との連携に強みを持ち、情報収集や分析、文章作成などに利用される。GPT、Claude、Geminiと並ぶ代表的な生成AIの一つであり、近年はAIエージェントやコーディング支援にも対応している。"

    },
    "gemini_pro": {
        title: "Gemini pro",
        category: "モデル",
        description: "Googleが提供する高性能なLLMモデルである。高度な推論能力やプログラミング支援機能を備えており、複雑な課題の解決や創造的な作業に適している。Geminiシリーズの中でも上位に位置づけられるモデルである。"
    },
    "gemini_flash": {
        title: "Gemini Flash",
        category: "モデル",
        description: "応答速度と性能のバランスを重視したLLMモデルである。テキスト生成や情報検索、プログラミング支援など幅広い用途に対応している。日常的な利用やリアルタイム処理に適したモデルである。"
    },
    "gemini_flash-lite": {
        title: "Gemini Flash-Lite",
        category: "モデル",
        description: "高速性と低コストを重視して設計された軽量モデルである。大量のリクエストを効率よく処理できることを特徴としている。シンプルな対話や分類処理などの用途に適している。"
    },
    "claude opus": {
        title: "Claude Opus",
        category: "モデル",
        description: "Googleが提供する高性能なLLMモデルである。高度な推論能力やプログラミング支援機能を備えており、複雑な課題の解決や創造的な作業に適している。Geminiシリーズの中でも上位に位置づけられるモデルである。"
    },
    "claude sonnet": {
        title: "Claude Sonnet",
        category: "モデル",
        description: "Claudeシリーズの表示モデルである。性能と応答速度のバランスに優れており、日常的な利用から業務用途まで幅広く利用される。Claudeの主力モデルとして位置づけられている。"
    },
    "claude haiku": {
        title: "Claude Haiku",
        category: "モデル",
        description: "Claudeシリーズの軽量モデルである。高速な応答と低コストを重視して設計されており、チャットボットや大量処理に適している。Claudeシリーズの中で最も高速なモデルである。"
    },
    "llama_4_scout":{
        title:  "Llama 4 Scout",
        category:  "モデル",
        description:  "高効率なMoEアーキテクチャを採用し、長文解析やコード解析に適している。画像とテキストを扱うマルチモーダル機能を備えている。"
    },
    "llama_4_maverick":{
        title:  "Llama 4 Maverick",
        category:  "モデル",
        description:  "Llama4シリーズの高性能モデルである。高度な推論能力や画像解析能力を持ち、AIエージェントや大規模な業務用途を想定して設計されている。Llam 4 Scoutよりも高い性能を持つ上位モデルである。"
    },
    "llama_4_behemoth":{
        title:  "Llama 4 Behemoth",
        category:  "モデル",
        description:   "Llama4シリーズの超大規模モデルである。Llama 4 ScoutやLlama 4 Marverickの学習にも利用される教師モデルとして位置づけられている。"
    },
    "grok_4.7":{

        title:  "Grok 4.7",
        category:  "モデル",
        description:  "9月21日に公開された。4.6の強化版。リアルタイム情報の活用や、Xとの連携に強みを持つ。長時間タスク向けの強化学習を行っているためコーディングに向いている。ファスト、エキスパート、ヘビーという三種類があり考える量を変えることができる。"   
    },
    "multimodalmodels": {
        title: "マルチモーダルモデル",
        category: "技術",
        description: "テキストだけでなく、画像、音声、動画など複数の種類のデータを理解・処理できるAIモデル。"
    },
    "aikudokaihatsu":{
        title: "AI駆動開発",
        category: "技術",
        description: "生成AIを活用して設計、実装、テスト、ドキュメント作成などの開発工程を効率化する開発手法である。開発者はコードを１から記述するのではなく、AIに指示を出し、生成結果のレビューや改善を行う役割を担う。GitHub CopilotやClaude Code、Cursor、Kiroなどのツールが代表例であり、近年のソフトウェア開発で急速に普及している。"
    },
    "aiagent":{
        title: "AIエージェント",
        category: "技術",
        description: "人間の指示に基づいて情報収集や分析、プログラム作成、ツール操作などを自律的に実行するAIシステムである。単に質問に回答するだけでなく、目標達成のために複数の作業を計画し、順番に処理できることが特徴である。AI駆動開発では、Claude CodeやGitHub CopilotなどがAIエージェントとして利用され、開発作業の自動化に活用されている。"
    },
    "pronptengineering":{
        title: "プロンプトエンジニアリング",
        category: "技術",
        description: "生成AIから望ましい回答を得るために、指示文や質問文を設計・改善する技術である。回答品質や精度を向上させることを目的とする。生成AIを活用するうえで重要なスキルの一つである。"
    },
    "toolcalling":{
        title: "Tool Calling",
        category: "技術",
        description: "生成AIが外部ツールやAPIを呼び出して処理を実行する機能である。情報検索や計算、データ取得などをAIが自動で行える。AIエージェントを実現する中核技術の一つである。"
    },
    "context_window":{
        title: "コンテキストウィンドウ",
        category: "技術",
        description: "保持できるトークン数の上限を指す。コンテキストウィンドウが大きいほど長文の文章や複雑な会話を扱いやすい。生成AIの性能を評価する重要な指標の一つである。"
    },
    "finetuning":{
        title: "ファインチューニング",
        category: "技術",
        description: "既存のAIモデルに追加学習を行い、特定分野へ最適化する技術である。企業独自の業務や専門知識に対応させる目的で利用される。生成AIのカスタマイズ手法の一つである。"
    },
    "parameter":{
        title: "パラメータ",
        category: "技術",
        description: "学習によって獲得した知識や判断基準を保持する内部データのことである。パラメータが多いほどより複雑なパターンを学習できる。パラメータ＝AIの脳に蓄積された知識や判断ルールの量"
    },
    "token":{
        title: "トークン",
        category: "技術",
        description: "トークンとは、生成AIが文章を処理する際に利用する文字や単語の最小単位である。AIは文章をトークン単位で分割して理解や生成を行い、利用料金や処理できる文章量の基準としても用いられる。"
    },
    "ai_model":{
        title: "AIモデル",
        category: "技術",
        description:  "学習データをもとに文章生成や画像認識、予測などを行うよう訓練されたAIの処理基盤である。生成AIサービスはAIモデルを利用しており、GPT、Gemini、Clauadeなどが代表的な例である。同じサービスでも複数のモデルを切り替えて利用できる場合があり、性能や得意分野が異なる。" 
    },
    "transformer":{
        title: "トランスフォーマー",
        category: "技術",
        description: "2017年にGoogleが発表した「Attention Is All You Need」論文で提案されたニューラルネットワークのアーキテクチャ。「入力データの中で、どの部分とどの部分が関連しているか」を効率的に計算する仕組み（→Attention機構）を持つ。現在のLLMはほぼすべてこのトランスフォーマーをベースにしている。"
    },
    "textencoder":{
        title: "テキストエンコーダー",
        category: "技術",
        description:  "文章をAIが理解しやすいベクトルに変換する仕組みである。入力された単語や文章の意味や文脈を解析し、AIモデルが処理できる形式へ返還する役割を担う。"
    },
    "suironengine":{
        title: "推論エンジン",
        category: "技術",
        description:  "学習済みのAIモデルを利用して入力されたデータから回答や予測を生成する仕組みである。ユーザーの質問や指示を解析し、学習済みの知識をもとに最適な結果を出力する役割を担う。生成AIでは、LLMが学習した内容を活用して文章精製や問題解決を行う際の実行基盤として利用される。"
    },
    "hallucination": {
        title: "ハルシネーション",
        category: "技術",
        description: "ハルシネーションとは、生成AIが事実ではない情報や存在しない内容を、あたかも正しい情報であるかのように出力する現象である。AIは文章の整合性を重視して回答を生成するため、誤った情報をもっともらしく説明してしまうことがある。生成AIを利用する際は、重要な情報について人間による確認やファクトチェックが必要である。"
    }
};

export default dictionary;
