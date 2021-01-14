<?php
/**
 * This is the most basic index file possible.
 */

get_header();

if ( have_posts() ) :
    while ( have_posts() ) :
        the_post();
        ?>
        <article <?php post_class(); ?>>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
            </header>
            <div class="entry-content">
                <?php the_content( esc_html__( 'Continue reading &rarr;', 'mcc' )); ?>
            </div>
        </article>

        <?php
        if ( comments_open() || get_comments_number() ) :
            comments_template();
        endif;
    endwhile;
else:
    ?>
    <article class="no-results">
        <header class="entry-header">
            <h1 class="page-title"><?php esc_html_e('Nothing Found', 'mcc'); ?></h1>
        </header>
        <div class="entry-content">
            <p><?php esc_html_e( 'It looks like nothing was found at this location.', 'mcc'); ?></p>
        </div>
    </article>
<?php
endif;


get_footer();