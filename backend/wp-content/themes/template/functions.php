<?php

//////////////////
// Load
//////////////////

// globalVars
locate_template('_config/globalVars.php', true);                // プロジェクトのグローバル変数

// libs
locate_template('_libs/utils.php', true);                // 便利関数
locate_template('_libs/cleanup.php', true);              // 不要なモノを削除
locate_template('_libs/customAdmin.php', true);          // 管理画面のカスタマイズ
locate_template('_libs/customDashboard.php', true);      // ダッシュボードをカスタマイズ
locate_template('_libs/init.php', true);                 // 初期設定
