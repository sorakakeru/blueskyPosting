# BlueskyPosting

Blueskyにテキスト（もしくはURL）を投稿するだけのElectron製のシンプルなアプリ（のソースコード）です。コードに署名は入っていません。  
Macメインですが、たぶんWindowsやLinuxでも動くはず。  

## 利用方法

以下を利用しています（リポジトリ公開時点のバージョン / 詳細は`package.json`参照）

- Node.js v22.15.0
- npm v11.5.1
- Electron v37.2.6
- @electron-forge/cli v7.8.3
- [@atproto/api](https://github.com/bluesky-social/atproto) v0.16.2
- [dotenv](https://www.npmjs.com/package/dotenv) v17.2.1

### Node.jsモジュール

上記のモジュール類をインストールする。

### `.env`ファイル

プロジェクトのドキュメントルートに`.env`ファイルを作成して、以下を記述する。

- `BLUESKY_IDENTIFIER='Blueskyのアカウント名'`
- `BLUESKY_PASSWORD='アプリパスワード'`

### アプリアイコン

アプリ用のアイコンを用意して以下に格納する。

- `/app_icon`
  - `icon.icns`
  - `icon.ico`
- `/src/icon.png`

アプリ用のアイコン作成は[Elephicon](https://github.com/sprout2000/elephicon)を利用すると便利です。

### 起動とビルド

起動は以下。

```zsh
npm run start
```

ビルドは以下。

```zsh
npm run make
```

### ショートカットキー

Windowsでは`⌘`の代わりに`Ctrl`があたります。

- `⌘ + Enter`: 投稿（「つぶやく」ボタンを押す挙動）
- `⌘ + N`: 新規ウインドウ
- `⌘ + W`: ウインドウを閉じる
- `⌘ + Q`: アプリ終了

## ロードマップ的なもの

- マルチアカウント対応はしたい
