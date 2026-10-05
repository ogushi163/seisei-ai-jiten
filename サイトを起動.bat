@echo off
cd /d "%~dp0"
echo 生成AI辞典を起動しています...

if not exist node_modules (
    echo 初回起動のため、必要なファイルをインストールします。少々お待ちください...
    call npm install
)

start "" http://localhost:5173/
call npm run dev
