<?php
function dwellness_enqueue_scripts() {
    wp_enqueue_style('dwellness-style', get_stylesheet_uri());
    wp_enqueue_script('dwellness-script', get_template_directory_uri() . '/script.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'dwellness_enqueue_scripts');
