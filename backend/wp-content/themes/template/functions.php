<?php
//////////////////
// Load
//////////////////

// globalVars
locate_template('config/globalVars.php', true);                // プロジェクトのグローバル変数

// libs
locate_template('libs/utils.php', true);                // 便利関数
locate_template('libs/cleanup.php', true);              // 不要なモノを削除
locate_template('libs/customAdmin.php', true);          // 管理画面のカスタマイズ
locate_template('libs/customDashboard.php', true);      // ダッシュボードをカスタマイズ
locate_template('libs/initialize.php', true);                 // 初期設定
