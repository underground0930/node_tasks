# frontend tasks

- 「gulp」を使用していない node
- 「webpack」は js のバンドルのみに使用してます。

## 開発環境

- 「webpack」を js バンドルに使用しています。
- html テンプレートエンジンには ejs を使用しています
- css 開発には「scss」を使用しています
- 記法は「BEM」を使用しています
- scss のスタイル構成は「FLOCSS」を使用しています
- それぞれのタスクは tasks ディレクトリの中に記述されています
- ブラウザのリロードには「browser-sync」を使用しています

を使用しています。

## command line

ターミナルで、package.json のあるディレクトリに移動してください。

```bash

# packageをインストールしてください
$ npm install

# 以下でで開発環境のローカルサーバーが立ち上がります
# htdocs/htdocs_dev にデータが生成されます
# ローカル開発時に使用します
$ npm run dev

# プロダクションモードのデータを生成
# htdocs/htdocs にデータが生成されます
# _dummyディレクトリが-assetsディレクトリに残ったままです
# テストアップやプレの時に使用します
$ npm run build

# プロダクションモードのデータを生成
# htdocs/htdocs にデータが生成されます
# _dummyディレクトリが-assetsディレクトリから削除されます
# 本番公開用に使用します
$ npm run prod

```

## node version

プロジェクトトップディレクトリの .node-version を参照

## ディレクトリ構成

- **src ディレクトリ以下を編集してください。**
- **htdocs or htdocs_dev ディレクトリ以下にデータが生成されます。**

## html について

- ejs を使用しています。共通部分などをパーツ化することが目的です。
- 「id」はページ固有の値です。body の id 属性に使用します。ページごとにユニークにしてください。
- 「class」body の class 属性に使用します。
- 「script」ページで読み込む script ファイル名に使用します。
- 「title」ページタイトルに使用します。
- 「description」ページ description に使用します。
- 「url」og:url に使用します。相対パスで記述してください。
- 「relativePath」は相対パス対応の値です。ディレクトリごとに変更してください。
- 「ogp」ページで独自の og:image を使用したい時に指定してください。空だと、共通の ogp が読み込まれます。

### ダミーファイルについて

- dummy ファイルはそれぞれの-assets ディレクトリの下に「\_dummy」ディレクトリを作り、ファイルを格納
- 例) 「img/\_dummy/test.jpg」「json/\_dummy/test.json」「movie/\_dummy/test.mp4」

### ./js/ 以下

- 「components」は react のコンポーネントを格納。
- 「components/common」は、サイト全体で使用するコンポーネントを格納されています。
- 「components/pages」は、 各ページで使用するコンポーネントを格納されています。
- 「utils/」は、サイト全体で使用する共通のデータ、操作等を格納します。
- 「pages/」は、各ページで使用する js が格納されています。
- 「common/」は、サイト全体で使用する js が格納されています。

### ./img/ 以下

- common は、サイト全体で使用する画像を格納してください。
- pages は、 各ページで使用する画像を格納してください。

### ./data/ 以下

- サイトで使用するデータを json ファイルに記述します。

### ./scss/ 以下

- 「foundation」はサイト全体の reset や base となる css を格納
- 「layout」は header,footer,wrapper などの css を格納
- 「global」に全体で使用する変数や mixin を格納
- 「object」は、component, project, utility の３レイヤーに別れる
- 「page」はページ固有の style を記述
- **scss**を使用します。
- **autoprefixer**を使用しています。
- 記法は**bem**, **flocss**を使用します。

### ./include/ 以下

- ejs で使用するサイトの共通部分を格納する

### ./json/ 以下

- サイト全体で利用する json をこちらに格納する

### path.config.js

- タスクのディレクトリをこちらで管理しています。開発環境全体で使用します。
- ディレクトリ構成に変更があった場合はこちらのパスも変更が必要です。

```bash
<%
  const page = {
    id: 'top',
    class: 'top',
    script: 'top',
    title: 'top title',
    description: 'top description',
    ogp: '/-assets/img/top/ogp.png',
  }
%>

```
