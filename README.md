# PawAI 工程筆記

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Fumadocs-16.x-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/React-19.x-61dafb?style=for-the-badge&logo=react" />
</p>

> 本倉庫為 **PawAI** 專題的工程筆記文件網站，記錄以 Unitree Go2 四足機器狗為平台，開發「具身智能（Embodied AI）」機器人系統的完整技術歷程。

---

##  專案簡介

**PawAI** 是一隻搭載多模態感知能力的智慧四足機器狗，目標是讓原本只能遙控的 Unitree Go2，進化成具備「**聽、想、說、看、走**」五大能力的居家陪伴夥伴。

本文件網站涵蓋以下核心開發領域：

| 模組 | 描述 |
|---|---|
|  **PawAI Brain & Studio** | 以 LangGraph 為核心的 11-stage 語音閉環架構（ASR → LLM → TTS）|
|  **視覺感知** | 手勢辨識、姿勢估測、物體偵測（YOLO）、人臉辨識（YuNet + SFace）|
|  **導航避障** | 整合 RPLIDAR、AMCL、Nav2、reactive_stop 的自主導航系統 |
|  **研究探索** | Intel RealSense D435、NVIDIA Isaac Sim、GPU 運算加速等前沿技術研究 |
|  **硬體介紹** | Unitree Go2 Pro、Jetson Nano、RPLIDAR 2464 及電源模組規格文件 |
|  **軟體介紹** | ROS2、系統整合架構與開發工具鏈說明 |

---

##  快速開始

### 環境需求

- Node.js `>= 20`
- npm `>= 10`

### 安裝與執行

```bash
# 1. Clone 此倉庫
git clone https://github.com/Capybara094/introduce_page.github.io.git
cd introduce_page

# 2. 進入專案目錄
cd project

# 3. 安裝相依套件
npm install

# 4. 啟動開發伺服器
npm run dev
```

開啟瀏覽器並前往 [http://localhost:3000](http://localhost:3000) 即可預覽網站。

---

##  技術架構

本文件網站以 **Next.js** 為基礎，搭配 **Fumadocs** 文件框架快速構建，並透過 **MDX** 格式撰寫所有技術文章。

```
introduce_page/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD 部署流程
└── project/                    # Next.js 主專案
    ├── app/
    │   ├── (home)/             # 網站首頁（動態 Blur 動畫入場）
    │   ├── docs/               # 文件頁面佈局
    │   └── api/search/         # Fumadocs 全文搜尋 API
    ├── components/             # 共用 React 元件
    ├── content/
    │   └── docs/               # 所有 MDX 技術文章
    │       ├── PawAI/          # 語音、大腦、工程總覽
    │       ├── Hardware_introduction/  # 硬體規格文件
    │       ├── Software_introduction/ # 軟體架構文件
    │       └── Research/       # 研究探索文件
    ├── lib/                    # Fumadocs source adapter
    ├── public/                 # 靜態資源（圖片）
    └── source.config.ts        # Fumadocs MDX 設定
```

### 主要技術棧

| 技術 | 用途 |
|---|---|
| [Next.js 16](https://nextjs.org/) | React 全端框架 |
| [Fumadocs](https://fumadocs.dev/) | 文件網站框架（UI + MDX） |
| [TailwindCSS 4](https://tailwindcss.com/) | 樣式系統 |
| [Motion (Framer)](https://motion.dev/) | 頁面動畫效果 |
| [Lucide React](https://lucide.dev/) | 圖示庫 |
| [TypeScript](https://www.typescriptlang.org/) | 型別安全 |

---

##  部署

本專案配置了 **GitHub Actions** 工作流程（`.github/workflows/deploy.yml`），支援：

- **手動觸發**（`workflow_dispatch`）部署至 GitHub Pages
- 亦可自行串接 **Vercel** 進行自動部署（推薦）

### 建置生產版本

```bash
cd project
npm run build
```

靜態輸出將產生於 `project/out/` 目錄。

---

##  開發指令

| 指令 | 說明 |
|---|---|
| `npm run dev` | 啟動開發伺服器（含 webpack 模式） |
| `npm run build` | 建置生產版本 |
| `npm run start` | 啟動生產伺服器 |
| `npm run types:check` | 執行 TypeScript 型別檢查 |

---

##  新增文章

所有文章以 **MDX** 格式存放於 `project/content/docs/` 下對應的資料夾，並透過 `meta.json` 控制側邊欄排序與顯示名稱。

```mdx
---
title: 你的文章標題
description: 文章描述
---

## 內容從這裡開始

支援所有標準 Markdown 語法，以及 Fumadocs 提供的特殊元件。
```

詳細設定請參考 [Fumadocs MDX 文件](https://fumadocs.dev/docs/mdx)。

---

##  關於專題

**PawAI** 是一個以四足機器人為載體，探索具身智能（Embodied AI）與多模態感知融合的研究型專題。
我們相信，AI 的未來不只在螢幕上，而是在能夠感知、思考並與人互動的實體機器人身上。

---

