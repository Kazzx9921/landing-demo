---
name: html-to-page
description: 將 docs/Landing.html 轉換為 Next.js 的 app/page.tsx
argument-hint: （不需要額外參數，直接執行即可）
---

請執行以下步驟，將 Landing Page 的 HTML 轉換為 Next.js 元件。每一步都必須完成，不可跳過。

---

## 第一步：環境前置檢查

1. 確認 `postcss.config.mjs` 存在於專案根目錄，若不存在則建立：

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
export default config
```

> **為什麼：** Tailwind CSS v4 必須透過 PostCSS 插件啟用，缺少此檔案會導致所有 Tailwind utility class 完全無效。

---

## 第二步：讀取並分析 HTML

1. 讀取 `docs/Landing.html`
2. 從中辨識並提取以下四個區塊，後續步驟會分別處理：
   - `<head>` 中的 **Google Fonts `<link>` 標籤**
   - `<head>` 中的 **外部 `<script>` 標籤**（如 Phosphor Icons）
   - `<script>` 中的 **Tailwind config**（`tailwind.config = { ... }`）
   - `<style>` 中的 **自訂 CSS**
   - `<body>` 中的 **HTML 內容**

---

## 第三步：更新 `app/globals.css`（Tailwind v4 主題設定）

將 HTML 中的 Tailwind config 和自訂 CSS 轉換到 `globals.css`，嚴格遵守以下規則：

### 3a. `@theme` 區塊（從 `tailwind.config` 轉換）

將原本 `tailwind.config` 中的 `theme.extend` 轉換為 Tailwind v4 的 `@theme` CSS 變數：

| 原始 config 類型 | Tailwind v4 變數格式 | 範例 |
|---|---|---|
| `colors.brand.blue` | `--color-brand-blue` | `--color-brand-blue: #0099FF;` |
| `fontFamily.display` | `--font-display` | `--font-display: Outfit, sans-serif;` |
| `borderRadius.pill` | `--radius-pill` | `--radius-pill: 999px;` |
| `spacing.sm` | `--spacing-sm` | `--spacing-sm: 20px;` |

**⚠️ 關鍵注意事項：**

- **字型名稱不可加引號：** 寫 `--font-display: Outfit, sans-serif;` 而非 ~~`--font-display: 'Outfit', sans-serif;`~~。Tailwind v4 會自動處理引號，手動加引號會導致字型無法載入。
- **`clamp()` 不可用於 `--font-size-*`：** Tailwind v4 的 `@theme` 不支援 `clamp()` 作為 `--font-size-*` 的值，會導致對應的 utility class（如 `text-display-xl`）完全不被產生。必須改用 `@utility` 自訂 class（見下方 3b）。

### 3b. `@utility` 區塊（處理含 `clamp()` 的自訂字級）

若原始 Tailwind config 的 `fontSize` 使用了 `clamp()` 或包含 `lineHeight` / `letterSpacing` 等複合設定，必須改用 `@utility` 定義：

```css
/* 原始 config：'display-xl': ['clamp(3rem, 8vw, 6.875rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }] */
@utility text-display-xl {
  font-size: clamp(3rem, 8vw, 6.875rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

對每個使用 `clamp()` 的 fontSize 項目都要這樣處理。

### 3c. 自訂 CSS（從 `<style>` 搬入）

將 `<style>` 中的自訂 CSS（如 body 樣式、scrollbar、hover 效果等）直接搬入 `globals.css`，放在 `@theme` 和 `@utility` 之後。

### 3d. Google Fonts 載入

**⚠️ 絕對不可在 `globals.css` 中使用 `@import url(...)` 載入 Google Fonts。** `@import "tailwindcss"` 會展開為多個 `@layer` 規則，之後的 `@import url(...)` 違反 CSS 規範（`@import` 必須在所有規則之前），會導致整個樣式表解析失敗。Google Fonts 必須在 `layout.tsx` 中用 `<link>` 載入（見第四步）。

---

## 第四步：更新 `app/layout.tsx`

1. **更新 `<html>` 標籤：** 加入原始 HTML 的 `lang` 屬性和 className（如 `scroll-smooth`）
2. **更新 `metadata`：** 從原始 HTML 的 `<title>` 提取標題和描述
3. **在 `<head>` 中加入 Google Fonts `<link>` 標籤：**

```tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
</head>
```

4. **在 `<head>` 中加入外部腳本：** 如 Phosphor Icons 等，使用 `defer` 屬性：

```tsx
<script src="https://unpkg.com/@phosphor-icons/web" defer></script>
```

5. **更新 `<body>` 的 className：** 從原始 `<body>` 標籤提取 className

> 注意：HTML 的 `crossorigin` 屬性在 JSX 中要改為 `crossOrigin`。

---

## 第五步：轉換 `app/page.tsx`（HTML → JSX）

將 `<body>` 內的 HTML 內容轉換為合法的 Next.js React 元件，遵守以下規則：

1. **`class=` → `className=`**
2. **inline `style="..."` → React style 物件：** 屬性名稱改為 camelCase（如 `background-color` → `backgroundColor`）。但若該 style 已由 `@utility` 或 Tailwind class 處理，則直接移除 inline style。
3. **移除 `<html>`、`<head>`、`<body>` 標籤**，只保留 body 內的內容
4. **移除所有 `<script>` 標籤**
5. **`<br>` → `<br />`**（JSX 自閉合標籤）
6. **圖片 `src` 屬性保持原樣不做修改**
7. **保留所有原始的 class 名稱與文字內容**
8. **處理 JSX 中的特殊字元：** 如撇號 `'` 改為 `{"'"}` 或 `&apos;`

寫入格式：

```tsx
export default function Home() {
  return (
    <>
      {/* 轉換後的 JSX */}
    </>
  )
}
```

---

## 第六步：驗證

轉換完成後，告知使用者已完成以下檔案的寫入/更新：
- `postcss.config.mjs`（如為新建）
- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`

不需要在對話中顯示完整程式碼。
