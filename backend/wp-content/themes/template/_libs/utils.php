<?php

  const BR_TAGS = ["<br>", "<br />", "<BR>"];
  const NEWLINES = ["\r\n", "\r", "\n"];
  const ESCAPED_BR = ["&lt;br&gt;", "&lt;br /&gt;", "&lt;BR /&gt;" ];
  define('BR_TAGS_NEWLINES', (function(){
    return array_merge(BR_TAGS, NEWLINES);
  })());

  /**
   * var_dumpを整形
   *
   * @param any $data 整形したいデータ
   */

function vd($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
}

/**
 * 文字をエスケープ+改行コードをbrタグに変換
 *
 * @param  string $str
 * @return string
 */
function brTxt($str)
{
    return nl2br(esc_html($str));
}


/**
 * 文字の改行コードをbrタグに変換
 *
 * @param  string $str カスタムフィールドの名前
 * @return string 変換後の文字列
 **/

function nbr($str)
{
    if (empty($str)) {
        return false;
    }
    return nl2br($str);
}


/**
 * テキストを無害化 + brタグを改行コードに変換
 *
 * @param  string $str 無害化する文字列
 * @return string
 */

function sanitizeText($str)
{
    $strVal = esc_html($str);
    $strVal = str_replace(ESCAPED_BR, "\n", $strVal);
    return $strVal;
}

/**
 * metaタグのテキストを無害化
 *
 * @param  string $str 無害化する文字列
 * @return string
 */

function sanitizeMetaText($str)
{
    $strVal = wp_kses($str, ['br' => []]);
    $strVal = str_replace( BR_TAGS_NEWLINES , ' ', $strVal);
    $strVal = esc_html($strVal);
    return $strVal;
}


/**
 * brタグをスペースに置換
 *
 * @param  string $str brタグをスペースに変換したい文字列
 * @return string　 brタグをスペースに変換した文字列
 */

function replaceBrWithSpace($str)
{
    return str_replace( BR_TAGS , ' ', $str);
}


/**
 * 文字数制限を生成
 *
 * @param  string $str 制限したい文字列
 * @param  number $num 制限したい文字数
 * @return string
 */

function limitCharacter($str, $limit)
{
    return (mb_strlen($str) > $limit) ? mb_substr($str, 0, $limit) . "…" : $str;
}

/**
 * 画像のIDから画像の取得
 *
 * @param  number $id   アセットID
 * @param  string $size {thumbnail, medium, large, full}
 * @return string 画像のパス or false
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
 * @param  number $post_id 記事ID
 * @param  string $size    {thumbnail, medium, large, full}
 * @return string 画像のパス or false
 */

function getImageFromPostId($field, $post_id = false, $size = 'full')
{
    $id = get_field($field, $post_id);
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
 * @param  any $target
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
 * @return string aタグの文字列
 **/

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
 * ページ送りのパラメータの正規化
 *
 * @param  string $any
 * @return number ページ番号
 **/

function checkPageNumber($any)
{
    // ページパラメータのチェック
    $is_num = ctype_digit(strval($any));
    $n = intval($any);
    if ($is_num && $n !== 0) {
        return $n;
    }
    return 1;
}


/**
 * recaptchaのチェック用の関数
 *
 * @param  $token String アクセストークン
 * @param  $token String シークレッドキー
 * @return Array 検証結果の連想配列
 */

function recaptchaCheck($token, $secret)
{
    $url = 'https://www.google.com/recaptcha/api/siteverify';

    $verify_response = file_get_contents($url.'?secret='.$secret.'&response='.$token);
    $result = json_decode($verify_response);

    return array(
      "success" => $result->success,
      "errcode" => isset($result->{'error-codes'}) ? $result->{'error-codes'}[0] : null
    );
}

/**
 * sessionを破棄
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
 * recaptchaのチェック用の関数
 *
 * @param $url String リダイレクトさせるURL
 */

function redirectPage($url)
{
    header('Location: ' . $url);
    exit;
}

/**
 * フルパスを取得
 *
 * @param $url フルパスにしたいURL
 */

function getFullPath($url)
{
    global $gVars;
    return $gVars['home_url'] . $url;
}
