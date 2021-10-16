<?php

/**
 * 検索用のbrタグの配列
 * @var array
 */
const BR_TAGS = ["<br>", "<br />", "<BR>"];

/**
 * 検索用の改行コードのの配列
 * @var array
 */
const NEWLINES = ["\r\n", "\r", "\n"];

/**
 * 検索用のエスケープされたbrタグの配列
 * @var array
 */
const ESCAPED_BR_TAG = ["&lt;br&gt;", "&lt;br /&gt;", "&lt;BR /&gt;"];
define('BR_TAGS_NEWLINES', (function () {
    return array_merge(BR_TAGS, NEWLINES);
})());

/**
 * var_dumpを整形
 *
 * @param $data mixed 出力したいデータ
 *
 * @return void
 **/
function vd($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
}

/**
 * 文字の改行コードをbrタグに変換
 *
 * @param string $str カスタムフィールドの名前
 *
 * @return false|string
 */
function nbr($str)
{
    if (empty($str)) {
        return false;
    }
    return nl2br($str);
}

/**
 * 文字をエスケープ+改行コードをbrタグに変換
 *
 * @param string $str
 *
 * @return false|string
 */
function brTxt($str)
{
    if (empty($str)) {
        return false;
    }
    return nl2br(esc_html($str));
}

/**
 * テキストを無害化 + brタグを改行コードに変換
 *
 * @param  string $str 無害化する文字列
 *
 * @return string
 */

function sanitizeText($str)
{
    $strVal = esc_html($str);
    $strVal = str_replace(ESCAPED_BR_TAG, "\n", $strVal);
    return $strVal;
}

/**
 * metaタグのテキストを無害化
 *
 * @param  string $str 無害化する文字列
 *
 * @return string 無害化された文字列
 */

function sanitizeMetaText($str)
{
    $strVal = wp_kses($str, ['br' => []]);
    $strVal = str_replace(BR_TAGS_NEWLINES, ' ', $strVal);
    $strVal = esc_html($strVal);
    return $strVal;
}


/**
 * brタグをスペースに置換
 *
 * @param  string $str brタグをスペースに変換したい文字列
 *
 * @return string 置換された文字列
 */

function replaceBrWithSpace($str)
{
    return str_replace(BR_TAGS, ' ', $str);
}


/**
 * 指定された文字数の文字列を返す、$limitを超えた場合は３点リーダーをつけて返す
 *
 * @param  string $str 制限したい文字列
 * @param  int $limit 制限したい文字数
 *
 * @return string
 */

function limitCharacter($str, $limit)
{
    return (mb_strlen($str) > $limit) ? mb_substr($str, 0, $limit) . "…" : $str;
}

/**
 * 画像のIDから画像の取得
 *
 * @param  int $id   アセットID
 * @param  string $size {thumbnail, medium, large, full}
 *
 * @return false|string
 */

function getImageFromId($id, $size = 'full')
{
    if ($id) {
        $url = wp_get_attachment_image_src($id, $size);
        return $url ? $url[0] : false;
    }
    return false;
}

/**
 * 記事IDから画像の取得
 *
 * @param  string $field   カスタムフィールド名
 * @param  int $postId 記事ID
 * @param  string $size {thumbnail, medium, large, full}
 *
 * @return string|false
 */

function getImageFromPostId($field, $postId = false, $size = 'full')
{
    $id = get_field($field, $postId);
    return getImageFromId($id, $size);
}

/**
 * 画像が無い時用の代用画像
 *
 * @return string 画像のパス
 */

function getNoPhoto()
{
    global $gVars;
    return $gVars['no_photo'];
}

/**
 * 配列ではない時に空の配列を返す
 *
 * @param  mixed $target
 *
 * @return array 結果の配列 or 空の配列
 */

function getEmptyArr($target)
{
    return is_array($target) ? $target : [];
}

/**
 * urlが外部リンクかチェック
 *
 * @param  string $url
 *
 * @return string aタグの文字列
 */

function externalLink($url)
{
    $p = '/^http(s):\/\//';
    $check = preg_match($p, $url);
    $attrs = 'href="' . esc_url($url) . '"';
    if ($check) {
        $attrs .= ' rel="noopener" target="_blank"';
    }
    return $attrs;
}

/**
 * ページ送りのパラメータの正規化して ページ番号を返す
 *
 * @param  string $mixed
 *
 * @return int
 */

function checkPageNumber($mixed)
{
  // ページパラメータのチェック
    $isNum = ctype_digit(strval($mixed));
    $n = intval($mixed);
    if ($isNum && $n !== 0) {
        return $n;
    }
    return 1;
}


/**
 * recaptchaのチェック用して 検証結果の連想配列を返す
 *
 * @param  string $token アクセストークン
 * @param  string $token シークレッドキー
 *
 * @return array
 */

function recaptchaCheck($token, $secret)
{
    $url = 'https://www.google.com/recaptcha/api/siteverify';

    $verifyResponse = file_get_contents($url . '?secret=' . $secret . '&response=' . $token);
    $result = json_decode($verifyResponse);

    return array(
    "success" => $result->success,
    "errcode" => isset($result->{'error-codes'}) ? $result->{'error-codes'}[0] : null
    );
}

/**
 * sessionを破棄
 *
 * @return void
 */

function clearSessionData()
{
  // (参考):
  // https://kappuccino-2.hatenadiary.org/entry/20080726/1217049706

  // セッション変数を全て解除する
    $_SESSION = array();

  // セッションを切断するにはセッションクッキーも削除する。
  // Note: セッション情報だけでなくセッションを破壊する。
    if (isset($_COOKIE[session_name()])) {
        setcookie(session_name(), '', time() - 42000, '/');
    }
  // 最終的に、セッションを破壊する
    session_destroy();
}

/**
 * リダイレクト処理
 *
 * @param string $url リダイレクトさせるURL
 *
 * @return void
 */

function redirectPage($url)
{
    header('Location: ' . $url);
    exit;
}

/**
 * ルート相対パスからフルパスを取得
 *
 * @param string $url フルパスにしたいURL
 *
 * @return string
 */

function getFullPath($url)
{
    global $gVars;
    return $gVars['home_url'] . $url;
}
