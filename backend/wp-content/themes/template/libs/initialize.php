<?php

/**
 * アーカイブごとに表示件数を設定
 *
 * @param any $query
 */


add_action('pre_get_posts', function ($query) {
    global $gVars;
    if (is_admin() || !$query->is_main_query()) {
        return;
    }
    foreach ($gVars['posts_per_page'] as $key => $value) {
        if ($query->is_post_type_archive($key)) {
            $query->set('posts_per_page', $gVars['posts_per_page'][$key]);
            return;
        }
    }
});

/**
 * カスタム投稿 & タクソノミーを設定
 */


function setRegisterPostType()
{
    register_post_type(
        'news',
        [
        'labels' => [
          'name' => __('News'),
          'singular_name' => __('news'),
        ],
        'public' => true,
        'has_archive' => true,
        'supports' => ['title', 'thumbnail'],
        ]
    );
}

add_action('init', 'setRegisterPostType');

function setRegisterTaxonomy()
{
    register_taxonomy(
        'news_category',
        ['news'],
        [
        'label' => 'news カテゴリー',
        'hierarchical' => true,
        'show_ui' => true,
        'query_var' => true,
        ]
    );
}

add_action('init', 'setRegisterTaxonomy');
