## スタック
- Next.js 15 (App Router) / React 19 / TypeScript / SWR
- Tailwind CSS + shadcn/ui + Radix UI
- Framer Motion, GSAP
- Three.js, @react-three/fiber, postprocessing, ogl

## セットアップ
1. Node.js 20系以上を推奨
2. 依存インストール: `npm install`
3. 開発サーバー: `npm run dev` (Turbopack)
4. 本番ビルド: `npm run build` → `npm start`
5. Lint: `npm run lint`

## ディレクトリ構成
```
./
├── README.md
├── package.json / package-lock.json
├── next.config.ts / tailwind.config.ts / tsconfig.json
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css          … 共通スタイル
│   │   ├── layout.tsx           … ルートレイアウト（LanguageProviderでラップ）
│   │   ├── page.tsx             … TOPページ
│   │   ├── AboutUsPage/
│   │   ├── ContactPage/
│   │   ├── Fund&SponsorPage/
│   │   ├── MainPage/
│   │   ├── ProjectsPage/
│   │   └── TechPage/
│   ├── components/ui/           … shadcnベースのUI部品
│   ├── context/LanguageContext.tsx … 言語状態と`t`取得フック
│   ├── data/translations.ts     … ja/enの文言辞書
│   └── lib/utils.ts
├── mock/moct.tsx
└── public/fonts, public/models  … フォント・3Dモデル等
```

## 多言語対応メモ
- レイアウトで`LanguageProvider`を噛ませ、`useLanguage()`から`language`, `setLanguage`, `t`を取得 ([src/app/layout.tsx](src/app/layout.tsx#L1-L27), [src/context/LanguageContext.tsx](src/context/LanguageContext.tsx#L1-L48)).
- 文言はtranslationsにja/enの両方を追加してから`t.foo.bar`で参照 ([src/data/translations.ts](src/data/translations.ts#L1-L120)).
- ローカルに選択状態を保存するので、ブラウザ切替時も保持されます。

## ページ別ファイル
- TOP: [src/app/page.tsx](src/app/page.tsx) でヘッダー・フッターとヒーローギャラリー、ミッション一覧、SNSフィードを組み合わせ。[MainHeroSection](src/app/MainPage/components/MainHeroSection.tsx) や [OngoingMission](src/app/MainPage/components/OngoingMission.tsx) など各セクションは `MainPage/components` 配下。
- About Us: [src/app/AboutUsPage/page.tsx](src/app/AboutUsPage/page.tsx) から [Overview](src/app/AboutUsPage/Overview.tsx) を表示。ミッション紹介・ギャラリー・チーム構成・開示プロトコルを`t.aboutUs`文言で描画。旧セクション用に [History](src/app/AboutUsPage/components/History.tsx), [OverView](src/app/AboutUsPage/components/OverView.tsx), [Teams](src/app/AboutUsPage/components/Teams.tsx) も残存。
- Contact: [src/app/ContactPage/page.tsx](src/app/ContactPage/page.tsx) でフォーム ([components/Contact.tsx](src/app/ContactPage/components/Contact.tsx)) と相互リンク一覧 ([components/sougolinks.tsx](src/app/ContactPage/components/sougolinks.tsx)) を配置。背景演出に [components/Background.tsx](src/app/ContactPage/components/Background.tsx) の光線シェーダーを用意（現在はコメントアウト）。
- Fund & Sponsors: [src/app/Fund&SponsorPage/page.tsx](src/app/Fund&SponsorPage/page.tsx) でクラファン結果バナー、スポンサー一覧 ([components/SponsorsList.tsx](src/app/Fund&SponsorPage/components/SponsorsList.tsx))、寄付案内 ([components/Fund-Support.tsx](src/app/Fund&SponsorPage/components/Fund-Support.tsx)) を表示。背景粒子は [components/background.tsx](src/app/Fund&SponsorPage/components/background.tsx)。
- Projects: [src/app/ProjectsPage/page.tsx](src/app/ProjectsPage/page.tsx) がカテゴリフィルタ付きアーカイブ一覧を生成。データは [ProjectData.tsx](src/app/ProjectsPage/ProjectData.tsx) の配列を参照し、カテゴリ別メタ情報を表示。
- Tech/Blog: [src/app/TechPage/page.tsx](src/app/TechPage/page.tsx) で固定ブログカードとQiita API記事を統合表示（`revalidate=10800`）。記事型は [blogpost.ts](src/app/TechPage/blogpost.ts)、Qiita取得は [qiita/getqiita.ts](src/app/TechPage/qiita/getqiita.ts)。

## こんなときは

### ページ内のテキスト・文言を変えたい
→ 翻訳ファイルを編集します

**手順：**
1. [src/data/translations.ts](src/data/translations.ts) を開く
2. 変更したいセクション（例：`topPage`, `aboutUs` など）を探す
3. **ja と en の両方を同時に編集** してください
4. 変更後は `npm run dev` で動作確認

**注意：** page.tsx は翻訳ファイルを参照しているため、直接編集しても反映されません

---

### 新しいロケット・プロジェクトをアーカイブに追加したい
→ ProjectData を編集します

**手順：**
1. [src/app/ProjectsPage/ProjectData.tsx](src/app/ProjectsPage/ProjectData.tsx) を開く
2. `projectsData` 配列に新しいオブジェクトを追加
3. 必須項目：`id`, `name`, `period`, `category`, `thumbnail`, `caption` など
4. カテゴリは「ロケット」「エンジン」「CanSat」から選択

**例：**
```typescript
{
  id: "22",
  name: "C-99J(新機体)",
  period: "2026/03",
  category: "ロケット",
  thumbnail: "/image.jpg",
  altitude: "1000m",
  caption: "説明文"
}
```

---

### テクノロジー・ブログ記事を連携したい
→ これは自動取得ができます。Qiita API 設定を変更します

**現状：** Qiita API で特定クエリを検索し、記事を自動取得（3時間キャッシュ）

**カスタマイズ方法：**
1. [src/app/TechPage/qiita/getqiita.ts](src/app/TechPage/qiita/getqiita.ts) の L56 付近を確認
2. `query=ESP32-S3` の部分をあなたのタグ/キーワードに変更
   - 例：`query=CREATE ロケット` で CREATE 関連記事を検索
3. `per_page=6` で取得件数を調整
4. API トークンを `.env.local` に設定（`API_TOKEN=xxx`）

**更新頻度：** `TechPage` の `revalidate = 10800` で 3 時間ごと再検証

---

### YouTube 動画を自動更新したい
→ 現状はコードを変更しての手動更新です。YouTube API を活用します

**現状：** API 接続の基本は実装済み（`fetchYoutubeVideos.ts` 参照）

**セットアップ：**
1. [Google Cloud Console](https://console.cloud.google.com/) で YouTube Data API v3 を有効化
2. API キーを `.env.local` に追加（`YOUTUBE_API_KEY=xxx`）
3. [src/app/MainPage/social/fetchYoutubeVideos.ts](src/app/MainPage/social/fetchYoutubeVideos.ts) で チャネル ID を設定

---

### Twitter / SNS フィード を表示したい
→ ページファイルを直接編集するか API を統合します

**現状：** Twitter API は有料で未実装

**案：**
1. 【簡易】 SNS フィード部分のハードコード → [MainPage/components/Social.tsx](src/app/MainPage/components/Social.tsx) を直接編集
2. 【本格】 Twitter API v2（無料枠あり）を `.env.local` に設定し、`fetchTwitter.ts` を作成

---

### ページの見た目・レイアウトを大きく変えたい
→ ページのコンポーネント構成を確認し、CSS / コンポーネントを編集します

**確認手順：**
1. 変更したいページを特定（上の「ページ別ファイル」セクション参照）
2. 該当の page.tsx と components/ を開く
3. Tailwind CSS クラスを編集、またはコンポーネント構造を再配置

**参考：**
- About ページの グリッドレイアウト → [Overview.tsx](src/app/AboutUsPage/Overview.tsx) の `grid lg:grid-cols-12`
- Projects ページの フィルタ機能 → [ProjectsPage.tsx](src/app/ProjectsPage/page.tsx) の `activeCategory` state

---

### 新しいページを一からつくりたい
→ ページ構造に従い、step-by-step で作成します

**最小限の手順：**
1. `src/app/MyNewPage/` フォルダを作成
2. `page.tsx` を作成し以下を記述：
   ```tsx
   "use client"
   import Header from "@/components/ui/Header";
   import Footer from "@/components/ui/Footer";
   
   export default function MyNewPage() {
     return (
       <div>
         <Header />
         {/* ここにコンテンツ */}
         <Footer />
       </div>
     );
   }
   ```
3. コンポーネントは `MyNewPage/components/` 下に分割
4. 文言は [translations.ts](src/data/translations.ts) に `ja`/`en` で追加
5. ナビゲーションメニューに追加したい場合は [Header.tsx](src/components/ui/Header.tsx) を編集

---

### 3D 表現やアニメーション効果を加えたい
→ 既存コンポーネントのパターンを参考にします

**ライブラリ：**
- **Framer Motion** → フェード、スライド、スケール アニメ
- **Three.js** → 3D オブジェクト、シェーダー
- **GSAP** → 複雑なシーケンスアニメ

**参考実装：**
- 粒子背景 → [Fund&SponsorPage/components/background.tsx](src/app/Fund&SponsorPage/components/background.tsx)
- グリッドアニメ → [AboutUsPage/Background.tsx](src/app/AboutUsPage/Background.tsx)
- 光線エフェクト → [ContactPage/components/Background.tsx](src/app/ContactPage/components/Background.tsx)

---

### 環境変数を設定したい(APIキー等)
→ `.env.local` ファイルを作成・編集します。これはローカル用のファイルであり、デプロイしたときはそのデプロイ先で環境変数を設定する必要があります。たとえばVercelを使っている場合は、Vercelのダッシュボードで環境変数を設定します。

**例：**
```
API_TOKEN=your_qiita_api_token
YOUTUBE_API_KEY=your_youtube_api_key
```

**注意：** `.env.local` は Git 管理から除外（`.gitignore` 参照）

---



