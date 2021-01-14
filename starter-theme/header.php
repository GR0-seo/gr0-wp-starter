<?php
/**
 * Populate the <head> tag and everything else up to <main>
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <title><?php wp_title('&vert', 'true', 'right'); ?><?php bloginfo('name'); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="screen-reader-text" href="#content"><?php esc_html_e( 'Skip to main content', 'mcc' ); ?></a>
    <?php get_template_part( 'dist/templates/header/site_header' ) ?>

    <div id="content" class="site-content">
        <div id="primary" class="content-area">
            <main id="main" class="site-main" role="main">