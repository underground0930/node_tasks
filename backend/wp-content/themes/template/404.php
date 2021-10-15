<?php
  // ページ固有の情報を入力 ////////////////////////
  $gVars['title'] = '404 title';
  $gVars['description'] = '404 description';
  $gVars['id'] = 'notFound';
  $gVars['class'] = 'notFound';
  $gVars['script'] = 'notFound';
  $gVars['url'] = '/';
  $gVars['ogtype'] = 'article';
  //////////////////////////////////////////////
?>
<?php require_once(__DIR__ .'/parts/topIncludes.php'); ?>
<div>404</div>
<?php require_once(__DIR__ .'/parts/bottomIncludes.php'); ?>
