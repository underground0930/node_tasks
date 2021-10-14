<?php

/**
 * ダッシュボード カスタマイズ
 */

function add_dashboard_widgets()
{
    wp_add_dashboard_widget('dashboard_widget_description', '管理画面INDEX', 'add_links_welcome_panel');
    global $wp_meta_boxes;
    $normal_dashboard = $wp_meta_boxes['dashboard']['normal']['core'];
    $widget_backup = array('dashboard_widget_description' => $normal_dashboard['dashboard_widget_description']);
    unset($normal_dashboard['dashboard_widget_description']);
    $sorted_dashboard = array_merge($widget_backup, $normal_dashboard);
    $wp_meta_boxes['dashboard']['normal']['core'] = $sorted_dashboard;
}
add_action('wp_dashboard_setup', 'add_dashboard_widgets');


remove_action('welcome_panel', 'wp_welcome_panel');
function remove_dashboard_widgets()
{
    global $wp_meta_boxes;
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']); // 現在の状況
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']); // アクティビティ
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']); // 最近のコメント
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']); // 被リンク
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']); // プラグイン
    unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_site_health']); // サイトヘルス
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']); // クイック投稿
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts']); // 最近の下書き
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']); // WordPressブログ
    unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']); // WordPressフォーラム
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets');


function add_links_welcome_panel()
{
    ?>
  <div class="welcome_panel_sections">
    <!-- ● -->
    <div class="welcome_panel_section">
      <h2>News</h2>
      <h3>【url】<a target="_blank" rel="noreferrer" href='/news/'>/news/</a></h3>
      <ul>
        <li>・記事は日付順に並びます</li>
        <li>・記事の新規追加、削除が可能です</li>
      </ul>
      <p><a class="button button-primary post-foo" target="_blank" href="edit.php?post_type=news">記事一覧</a></p>
    </div>
    <!-- ● -->
    <div class="welcome_panel_section">
      <h2>Huga</h2>
      <h3>【url】<a target="_blank" rel="noreferrer" href='/huga/'>/huga/</a></h3>
      <ul>
        <li>・一覧でドラッグ&ドロップで並び替えが可能です</li>
        <li>・新規追加、削除が可能です</li>
      </ul>
      <p><a class="button button-primary post-foo" rel="noreferrer" target="_blank" href="edit.php?post_type=huga">職種一覧</a></p>
    </div>
    <!-- ● -->
  </div>
    <?php
}
