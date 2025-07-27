<?php
/*
Plugin Name: TM Lorem Ipsum Generator
Plugin URI:  https://github.com/kashif1413/WP-lorem-Ipsum-Generator-Plugin
Description: A simple Lorem Ipsum generator tool.
Version: 1.3
Author: Kashif Ajmal
Date: 07/27/2025
Author URI: https://github.com/kashif1413
GitHub Plugin URI: kashif1413/WP-lorem-Ipsum-Generator-Plugin
Primary Branch: main
*/

// Enqueue styles and scripts only when shortcode is used
function tm_lorem_enqueue_assets() {
    // register
    wp_register_style('tm-lorem-style', plugins_url('style.css', __FILE__));
    wp_register_script('tm-lorem-script', plugins_url('script.js', __FILE__), array(), false, true);

    // enqueue
    wp_enqueue_style('tm-lorem-style');
    wp_enqueue_script('tm-lorem-script');
}
add_action('wp_enqueue_scripts', 'tm_lorem_enqueue_assets');

// Shortcode callback
function tm_lorem_ipsum_tool() {
    ob_start();
    // Include your HTML tool
    include plugin_dir_path(__FILE__) . 'tool.html';
    return ob_get_clean();
}
add_shortcode('lorem_generator', 'tm_lorem_ipsum_tool');
