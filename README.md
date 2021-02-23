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

**src ディレクトリ以下を編集してください。**
**htdocs ディレクトリ以下をデータが生成されます。**

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

- data.yaml は、サイト全体で使用するデータを記述します。
- プロジェクトディレクトリがサブディレクトリの場合は、(`http://example.co.jp/hoge/`) 「root」を使用してください。

```bash
#CONFIG
sitename: "example site"
host: "http://example.co.jp"
root: ""
ogp: "/assets/img/ogp.png"

```

### ●scss フォルダ内

- 「foundation」はサイト全体の reset や base となる css を格納
- 「layout」は header,footer,wrapper などの css を格納
- 「global」に全体で使用する変数やmixinを格納
- 「object」は、component, project, utility の３レイヤーに別れる
- 「page」はページ固有の style を記述

### ●include フォルダ内

- ejs で使用するサイトの共通部分を格納する

### ●json フォルダ内

- サイト全体で利用する json をこちらに格納する

### ●path.config.js

- タスクのディレクトリをこちらで管理しています。開発環境全体で使用します。
- ディレクトリ構成に変更があった場合はこちらのパスも変更が必要です。

## ■css について

- **scss**を使用します。
- **autoprefixer**を使用しています。
- /src/assets/scss 内にのみ css を記述してください。
- vue コンポーネント内での css の記述はしません.(css ファイルを１つにまとめるため)
- 記法は**bem**, **flocss**を使用します。
- ページをまたいで使用されるコンポーネントのスタイルについては component ディレクトリ内に scss ファイルを作成してください。

## ■html について

- ejs を使用しています。共通部分などをパーツ化することが目的です。
- 「id」はページ固有の値です。bodyのid属性に使用します。ページごとにユニークにしてください。
- 「class」はページ固有の値です。bodyのclass属性に使用します。第一階層ごとに分けてください。読み込むjsのパスにも使用します。
- 「title」ページタイトルに使用します。
- 「description」ページdescriptionに使用します。
- 「url」og:urlに使用します。相対パスで記述してください。
- 「relativePath」は相対パス対応の値です。ディレクトリごとに変更してください。
- 「ogp」は相対パス対応の値です。ページで独自のog:imageを使用したい時に指定してください。空だと、共通のogpが読み込まれます。

```bash
<%
  const page = {
    id: 'about-index',
    class: 'about',
    title: 'top title',
    description: 'top description',
    url: '/',
    ogp: '',
    relativePath: '.',
  };
%>

```
