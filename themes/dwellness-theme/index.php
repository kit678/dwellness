<?php get_header(); ?>

<div id="grid" class="masonry">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div <?php post_class('item'); ?>>
            <?php the_content(); ?>
        </div>
    <?php endwhile; endif; ?>
</div>

<?php get_footer(); ?>
