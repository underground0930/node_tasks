<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="viewport-fit=cover,width=device-width,user-scalable=no,initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $gVars['title']; ?></title>
    <link rel="icon" type="image/png" href="/-assets/img/common/favicon.png">
    <link rel="apple-touch-icon" href="/-assets/img/common/apple-touch-icon.png">
    <meta name="description" content="<?php echo $gVars['description']; ?>"/>
    <!-- og -->
    <meta property="og:type" content="<?php echo $gVars['ogtype']; ?>" />
    <meta property="og:title" content="<?php echo $gVars['title']; ?>" />
    <meta property="og:description" content="<?php echo $gVars['description']; ?>" />
    <meta property="og:image" content="<?php echo $gVars['ogp']; ?>">
    <meta property="og:url" content="<?php echo $gVars['origin'] . $gVars['url']; ?>" />
    <meta property="og:site_name" content="<?php echo $gVars['site_name']; ?>" />
    <!-- twitter card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="<?php echo $gVars['origin'] . $gVars['url']; ?>" />
    <meta name="twitter:site" content="<?php echo $gVars['site_name']; ?>" />
    <!-- style & scripts -->
    <link rel="stylesheet" href="/-assets/css/style.css?date=<?php echo $gVars['time']; ?>">
</head>
