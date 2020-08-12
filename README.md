# node_tasks

- npm scripts でタスクを書くのは処理の量的に厳しいので、処理をそれぞれ別ファイルにしました。
- 「gulp」は使用していません。
- 「webpack」も剥がしやすいようにしたいので js のみに使用してます。

## ■ 開発環境

- 「webpack」を js バンドルに使用しています。
- js のフレームワークには「Vue.js」を使用しています
- html テンプレートエンジンには ejs を使用しています
- css 開発には「scss」を使用しています
- 記法は「BEM」を使用しています
- scss のスタイル構成は「FLOCSS」を使用しています
- それぞれのタスクは tasks ディレクトリの中に記述されています
- ブラウザのリロードには「browser-sync」を使用しています

を使用しています。

## ■Build Setup

ターミナルで、package.json のあるディレクトリに移動してください。

```bash
# packageをインストールしてください
$ npm install

# 以下でで開発環境のローカルサーバーが立ち上がります
# 自動更新されます
# htdocs/dev にデータが生成されます
$ npm run dev

# プロダクションモードのデータを生成
# htdocs/prod にデータが生成されます
$ npm run build
```

## ■node version

.node-version を参照ください。

## ■ ディレクトリ構成

<b>src ディレクトリ以下を編集してください。</b>
<b>htdocs ディレクトリ以下をデータが生成されます。</b>

### ●js フォルダ内

- 「components」は vue のコンポーネントを格納。
- 「components/common」は、サイト全体で使用するコンポーネントを格納されています。
- 「components/pages」は、 各ページで使用するコンポーネントを格納されています。
- 「modules/」は、サイト全体で使用する共通のデータ、操作等を格納します。
- 「pages/」は、各ページで使用する js が格納されています。
- 「common/」は、サイト全体で使用する js が格納されています。

### ●img フォルダ内

- common は、サイト全体で使用する画像を格納してください。
- pages は、 各ページで使用する画像を格納してください。

### ●data フォルダ内

- data.yaml は、サイト全体で使用するデータと、各ページの meta 情報を記述します。

```bash
#CONFIG
sitename: "example site"
host: "http://example.co.jp"
root: ""
ogp: "/assets/img/ogp.png"
time: 1

#TOP
top:
  url: "/"
  title: "top title"
  keywords: "keywords top"
  description: "description top"
  ogType: "website"
  ogp: "/assets/img/top/ogp.png"
  bodyClass: "top"
  script: "top"

```

### ●scss フォルダ内

- 「foundation」はサイト全体の reset や base となる css を格納
- 「layout」は header,footer,wrapper などの css を格納
- 「mixin」は共通の処理を格納
- 「plugin」は plugin に付属する css を格納
- 「variables」は変数を格納
- 「page」はページ固有の style を記述
- 「object」は、component, project, utility の３レイヤーに別れる

### ●include フォルダ内

- ejs で使用するサイトの共通部分を格納する

### ●json フォルダ内

- サイト全体で利用する json をこちらに格納する

### ●path.config.js

- タスクのディレクトリをこちらで管理しています。開発環境全体で使用します。
- ディレクトリ構成に変更があった場合はこちらのパスも変更が必要です。

## ■css について

- <b>scss</b>を使用します。
- <b>node-sass-globbing</b>を使用しているので、scss ファイル内で glob が使用できます。
- <b>autoprefixer</b>を使用しています。
- /src/assets/scss 内にのみ css を記述してください。
- vue コンポーネント内での css の記述はしません.(css ファイルを１つにまとめるため)
- <b>scoped</b>オプションは使用しません。css 編集のたびに html も変更されるためです。
- 記法は<b>bem</b>, <b>flocss</b>を使用します。
- flocss の project に当たる部分を、page にしています。各ページごとに style を分けてください。
- ページをまたいで使用されるコンポーネントのスタイルについては component ディレクトリ内に scss ファイルを作成してください。

## ■html について

- ejs を使用しています。共通部分などをパーツ化することが目的です。
- 「pageid」はサイト固有の値をそれぞれ入れてください。
- 「relativePath」は相対パス対応の値です。ディレクトリごとに変更してください。

```bash
<%
const pageid = 'top';
const relativePath = '..';
%>

```
