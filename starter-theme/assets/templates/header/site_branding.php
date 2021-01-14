<?php
/*
Displays the site branding
*/

$blog_info = get_bloginfo('name');
$header_class = has_custom_logo() ? 'screen-reader-text' : 'site-header__title';
?>

<?php if( has_custom_logo() ) : ?>
    <div class="site-header__logo"><?php the_custom_logo() ?></div>
<?php endif; ?>

<?php if( $blog_info ) : ?>
    <?php if( is_front_page() && !is_paged() ) : ?>
        <h1 class="<?php echo esc_attr($header_class); ?>"><?php echo esc_html($blog_info); ?></h1>
    <?php elseif ( is_front_page() || is_home() ) : ?>
        <h1 class="<?php echo esc_attr($header_class); ?>"><a href="<?php echo esc_url(home_url('/')); ?>"><?php echo esc_html($blog_info); ?></a></h1>
    <?php else : ?>
        <p class="<?php echo esc_attr($header_class); ?>"><a href="<?php echo esc_url(home_url('/')); ?>"><?php echo esc_html($blog_info); ?></a></p>
    <?php endif; ?>
<?php endif; ?>