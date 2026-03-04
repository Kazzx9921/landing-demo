---
name: setup
description: 檢查部署環境，並初始化 git、建立 GitHub repo、推上去
argument-hint: （不需要額外參數，直接執行即可）
---

請依序幫我完成以下兩個階段：

## 第一階段：環境檢查

逐一確認以下工具是否已安裝，若缺少請根據我的作業系統給我對應的安裝指令，確認完成再繼續：

1. **Node.js 18+** — 執行 `node --version` 確認
2. **Git** — 執行 `git --version` 確認
3. **GitHub 帳號** — 確認我能登入 github.com
4. **Claude Code CLI** — 執行 `claude --version` 確認

每個工具確認完畢後才進行下一個，不要一次全部列出讓我自己處理。

## 第二階段：初始化並推上 GitHub

環境確認全部通過後：

1. 執行 `git init` 初始化版本控制
2. 執行 `git add .` 和 `git commit -m "initial commit"`
3. 詢問我的 GitHub 使用者名稱
4. 詢問我想要的 repo 名稱（預設建議：`landing-page`）
5. 提示我前往 https://github.com/new 建立一個新的**空白** public repo（不要勾選 Initialize with README）
6. 等我確認建立完成後，設定 remote 並推送：
   ```
   git remote add origin https://github.com/[使用者名稱]/[repo名稱].git
   git push -u origin main
   ```
7. 推送成功後，告訴我 repo 網址：`https://github.com/[使用者名稱]/[repo名稱]`

如果任何步驟遇到錯誤，請逐步引導我排除，不要略過問題。
