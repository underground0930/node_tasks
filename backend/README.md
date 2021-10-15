# backend tasks

## 開発環境

- 「wp-env」を使用しています。「Docker」をインストールする必要があります。

を使用しています。

## command line

ターミナルで、package.json のあるディレクトリに移動してください。

```bash
# packageをインストールしてください
$ npm install

# 以下でwordpressのコンテナが立ち上がります
# localhost:8888
$ npm run wp-start

# ２回目以降のコンテナの立ち上げはこちらを使用
$ npm run wp-update

# コンテナを止める場合
$ npm run wp-stop

# デフォルトに入っているテーマを削除する場合
$ npm run wp-default-theme-delete

# DBをバックアップする場合
# all-in-one-wp-migration-unlimited-extension プラグインが必要 (有料)
# ./wp-content/ai1wm-backups/ 以下にDBファイルが作成されます
$ npm run wp-backup

# DBのバックアップ一覧を表示
# ここで取得した文字列をrestoreに使用する
$ npm run wp-list

# DBをバックアップから復元する場合
$ npm run wp-restore <ファイル名>


```

## node version

プロジェクトトップディレクトリの .node-version を参照

## ■ ディレクトリ構成

**src ディレクトリ以下を編集してください。**
**htdocs ディレクトリ以下をデータが生成されます。**

## wordpress について

- wp-env を使用しています
- ./wp-content/themes/{テーマディレクトリ名} 内にファイルを置き、開発してください。

## 必要なプラグイン

- 「./backend/.wp-env.json」に記述してあります。
- 手動で格納するものについては、git管理下に置きたくないのでignoreをしています。
- フルパスのものは自動でインストールされますが相対パスのものは手動で格納していただく必要があります。
- 「advanced-custom-fields-pro」は有料プラグインのため手動で格納してください。
- 「all-in-one-wp-migration-unlimited-extension」は有料プラグインのため手動で格納してください。

## PHP 型の書き方の参考

https://docs.phpdoc.org/3.0/guide/references/phpdoc/types.html#definition-of-a-type

