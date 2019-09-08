# node_tasks

* npm scriptsでタスクを書くのは処理の量的に厳しいので、処理をそれぞれ別ファイルにしました。
* 「gulp」は使用していません。  
* 「webpack」も剥がしやすいようにしたいのでjsのみに使用してます。

## ■開発環境

* 「webpack」をjsバンドルに使用しています。
* jsのフレームワークには「Vue.js」を使用しています
* htmlテンプレートエンジンにはejsを使用しています
* css開発には「scss」を使用しています
* 記法は「BEM」を使用しています
* scssのスタイル構成は「FLOCSS」を使用しています
* それぞれのタスクは tasksディレクトリの中に記述されています
* ブラウザのリロードには「browser-sync」を使用しています

を使用しています。

## ■Build Setup

ターミナルで、package.jsonのあるディレクトリに移動してください。

``` bash
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

## ■ディレクトリ構成

<b>srcディレクトリ以下を編集してください。</b>
<b>htdocsディレクトリ以下をデータが生成されます。</b>

### ●jsフォルダ内

* 「components」はvueのコンポーネントを格納。
* 「components/common」は、サイト全体で使用するコンポーネントを格納されています。
* 「components/pages」は、 各ページで使用するコンポーネントを格納されています。
* 「modules/」は、サイト全体で使用する共通のデータ、操作等を格納します。
* 「pages/」は、各ページで使用するjsが格納されています。
* 「common/」は、サイト全体で使用するjsが格納されています。

### ●imgフォルダ内

* commonは、サイト全体で使用する画像を格納してください。
* pagesは、 各ページで使用する画像を格納してください。

### ●dataフォルダ内

* data.yamlは、サイト全体で使用するデータと、各ページのmeta情報を記述します。

``` bash
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

### ●scssフォルダ内

* 「foundation」はサイト全体のresetやbaseとなるcssを格納
* 「layout」はheader,footer,wrapperなどのcssを格納
* 「mixin」は共通の処理を格納
* 「plugin」はpluginに付属するcssを格納
* 「variables」は変数を格納
* 「object」は実際のページのcssを格納、主にこちらを編集する

### ●includeフォルダ内

* ejsで使用するサイトの共通部分を格納する

### ●jsonフォルダ内

* サイト全体で利用するjsonをこちらに格納する

### ●path.config.js

* タスクのディレクトリをこちらで管理しています。開発環境全体で使用します。
* ディレクトリ構成に変更があった場合はこちらのパスも変更が必要です。

## ■cssについて

* <b>scss</b>を使用します。
* <b>node-sass-globbing</b>を使用しているので、scssファイル内でglobが使用できます。
* <b>autoprefixer</b>を使用しています。
* /src/assets/scss 内にのみ cssを記述してください。
* vueコンポーネント内でのcssの記述はしません.(cssファイルを１つにまとめるため)
* <b>scoped</b>オプションは使用しません。css編集のたびにhtmlも変更されるためです。
* 記法は<b>bem</b>, <b>flocss</b>を使用します。
* flocssのprojectに当たる部分を、pageにしています。各ページごとにstyleを分けてください。
* ページをまたいで使用されるコンポーネントのスタイルについてはcomponentディレクトリ内にscssファイルを作成してください。

## ■htmlについて

* ejsを使用しています。共通部分などをパーツ化することが目的です。
* 「pageid」はサイト固有の値をそれぞれ入れてください。
* 「relativePath」は相対パス対応の値です。ディレクトリごとに変更してください。

``` bash
<%
const pageid = 'top';
const relativePath = '..';
%>

```
