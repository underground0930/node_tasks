<?php

/**
 * アーカイブごとに表示件数を設定
 *
 * @param any $query
 */


add_action('pre_get_posts', function ($query)
{
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
 * カスタム投稿を設定
 */
function create_post_type()
{

  register_post_type(
    'hoge',
    [
      'labels' => [
        'name' => __('Hoge'),
        'singular_name' => __('hoge'),
      ],
      'public' => false,
      'publicly_queryable' => true,
      'show_ui' => true,
      'has_archive' => true,
      'supports' => ['title', 'thumbnail']
    ]
  );
}

add_action('init', 'create_post_type');

/**
 * タクソノミーを設定
 */


add_action(
  'init',
  function () {
    register_taxonomy(
      'news_tag',
      ['news'],
      [
        'label' => 'news タグ',
        'hierarchical' => true,
        'show_ui' => true,
        'query_var' => true,
      ]
    );
  }
);
