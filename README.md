# Nuxt 3 CSR × Google OAuth (PKCE) サンプル

静的ホスティング／フロント単体 (CSR) で動く Nuxt 3 アプリに、  
Google OAuth 2.0 の PKCE フローを Express マイクロサービスで肩代わりさせる最小構成サンプルです。

---

## クイックスタート

### 1. リポジトリをクローン
```bash
git clone https://github.com/RuumaLilja/nuxt3-google-oauth-pkce-sample.git
cd nuxt3-google-oauth-pkce-sample
```

### 2. 環境変数を用意
```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
# それぞれ .env に Google の Client ID/Secret、リダイレクト URI を設定
```

### 3. サーバー起動
```bash
cd server
npm install
npm run dev   # http://localhost:4000 で待ち受け
```

### 4. クライアント起動
```bash
cd ../client
npm install
npm run dev   # http://localhost:3000 で起動
```

ブラウザで http://localhost:3000 にアクセスして、Google ログインが動作すれば OK です。


## ディレクトリ構成
```text
.
├── client/               # Nuxt3 CSR アプリ
│   ├── pages/
│   ├── plugins/
│   ├── stores/
│   ├── composables/
│   └── .env.example
├── server/               # Express マイクロサービス
│   ├── src/
│   │   ├── routes/
│   │   └── index.js
│   └── .env.example
├── README.md
└── LICENSE
```

## 注意事項
本番運用では HTTPS や HTTP-Only Cookie の利用、トークンリフレッシュ設計を検討してください。
