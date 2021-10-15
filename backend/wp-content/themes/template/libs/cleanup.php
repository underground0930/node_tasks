<?php

/**
 * Gutenbergを無効化
 */
// add_filter('use_block_editor_for_post', '__return_false', 10);


/**
 * rest_apiを無効
 */

// add_filter(
//     'rest_authentication_errors',
//     function () {
//         return new WP_Error('disabled', __('REST API is disabled.'), array('status' => rest_authorization_required_code()));
//     }
// );

/**
 * Medium_largeサイズを作成させない
 */
update_option('medium_large_size_w', 0);

/**
 * エディタからpタグを取る
 */
remove_filter('the_content', 'wpautop');

/**
 * ACFのWYSIWYGからpタグを消す
 */
remove_filter('acf_the_content', 'wpautop');

/**
 * 詳細ページが不要なカスタム投稿は404に飛ばす
 */
// add_filter('hoge_rewrite_rules', '__return_empty_array');


/**
 * 固定ページから本文を削除
 */

add_action(
    'init',
    function () {
        remove_post_type_support('page', 'editor');
    }
);


/**
 * 作成者アーカイブを無効化します。(WordPressのサイトアドレスURL/?author=1 などでアクセスされた際にURLにユーザー名が表示される機能も無効にします)
 */

// add_filter(
//     'parse_query',
//     function ($query) {
//         if (!is_admin() && is_author()) {
//             $query->set_404();
//             status_header(404);
//             nocache_headers();
//         }
//     }
// );


/**
 * acfの関連フィールドのタイトルからbrを削除
 */

add_filter(
    'acf/fields/relationship/result',
    function ($text, $post, $field, $post_id) {
        return replaceBrWithSpace($text);
    },
    10,
    4
);

/**
 * 投稿一覧のタイトルからbrを削除
 */

add_action(
    'admin_head-edit.php',
    function () {
        add_filter(
            'the_title',
            function ($title, $id) {
                global $post;
                return replaceBrWithSpace($post->post_title);
            },
            100,
            2
        );
    }
);
