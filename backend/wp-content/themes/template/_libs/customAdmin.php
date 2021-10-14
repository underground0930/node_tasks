<?php

/**
 * acf-options-page を有効化
 */

if (function_exists('acf_add_options_page')) {

    acf_add_options_page(
        [
        'page_title' => 'フォームメールアドレス設定', // ページタイトル
        'menu_title' => 'フォームメールアドレス設定', // メニュータイトル
        'menu_slug' => 'form-mail', // メニュースラッグ
        'capability' => 'edit_posts',
        'redirect' => false,
        'position' => '32.1'
        ]
    );

}


/**
 * サイドメニューをカスタマイズ
 */

function remove_menus()
{
    global $menu;
    //    unset($menu[2]);  // ダッシュボード
    //    unset($menu[4]);  // メニューの線1
    unset($menu[5]);  // 投稿
    //    unset($menu[10]); // メディア
    //    unset($menu[15]); // リンク
    //    unset($menu[20]); // ページ
    unset($menu[25]); // コメント
    //    unset($menu[59]); // メニューの線2
    //    unset($menu[60]); // テーマ
    //    unset($menu[65]); // プラグイン
    //    unset($menu[70]); // プロフィール
    //    unset($menu[75]); // ツール
    //    unset($menu[80]); // 設定
    //    unset($menu[90]); // メニューの線3
}
add_action('admin_menu', 'remove_menus');


/**
 * 管理画面用のjsとcssを読み込み
 */

add_action('admin_enqueue_scripts', 'load_admin_js_css');

function load_admin_js_css()
{
    $post_type = get_post_type();
    wp_enqueue_style('admin_style', get_template_directory_uri() . '/style/admin.css');
    wp_enqueue_script('category', get_template_directory_uri().'/scripts/limit_category_select.js', array('jquery'), '', true);
    if ($post_type === 'hoge') {
        wp_enqueue_script('hoge', get_template_directory_uri().'/scripts/post_type/'. $post_type .'/add_description.js', array('jquery'), '', true);
    }
    if ($post_type === 'huga') {
        wp_enqueue_script('huga', get_template_directory_uri().'/scripts/post_type/'. $post_type .'/add_description.js', array('jquery'), '', true);
    }
}
