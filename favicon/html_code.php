<?php 

ini_set("include_path", $webroot); 

//TODO: parse html into array and write a loop.
$paths['appleTouch']  = $webroot.'/favicon/apple-touch-icon.png';
$paths['favicon_32x32']  = $webroot.'/favicon/favicon-32x32.png';
$paths['android_chrome_192x192'] = $webroot.'/favicon/android-chrome-192x192.png';
$paths['favicon_16x16']  = $webroot.'/favicon/favicon-16x16.png';

$paths['safari_pinned_tab']  = $webroot.'/favicon/safari-pinned-tab.svg';
$site_webmanifest  = $webroot.'/favicon/site.webmanifest';

$base64 = [];
foreach($paths as $key => $path) {
  $type = pathinfo($path, PATHINFO_EXTENSION);
  $data = file_get_contents($path);
  $base64[$key] = 'data:image/' . $type . ';base64,' . base64_encode($data);
}

?>
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $base64['appleTouch'] ?>">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $base64['favicon_32x32'] ?>">
<link rel="icon" type="image/png" sizes="192x192" href="<?php echo $base64['android_chrome_192x192'] ?>">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $base64['favicon_16x16'] ?>">
<link rel="manifest" href="../../favicon/site.webmanifest">
<link rel="mask-icon" href="<?php echo $base64['safari_pinned_tab'] ?>">
<meta name="apple-mobile-web-app-title" content="Gavin Vaught">
<meta name="application-name" content="Gavin Vaught">
<meta name="msapplication-TileColor" content="#4d83bd">
<meta name="theme-color" content="#fefefe">
