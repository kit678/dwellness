<?php get_header(); ?>

<div id="content">
  <div id="inner-content" class="wrap">
    <main id="main" class="content" role="main">
      <?php
      // Start the loop
      while (have_posts()) :
        the_post();
        ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <header class="article-header">
            <h1 class="entry-title"><?php the_title(); ?></h1>
            <p class="byline">
              <?php
              printf(
                __('Posted on %1$s by %2$s', 'dwellness'),
                get_the_time(get_option('date_format')),
                get_the_author()
              );
              ?>
            </p>
          </header>

          <div class="entry-content">
            <?php the_content(); ?>
          </div>

          <footer class="article-footer">
            <?php the_tags('<p class="tags">' . __('Tags:', 'dwellness') . ' ', ', ', '</p>'); ?>
          </footer>
        </article>

      <?php
      endwhile;
      ?>
    </main>
  </div>
</div>

<?php get_footer(); ?>
