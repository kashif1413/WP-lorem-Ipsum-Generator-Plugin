<?php
/*
Plugin Name: ToolsMenia's LoremIpsum Generator Tool
Description: A simple Lorem Ipsum text generator tool with shortcode.
Version: 1.0
Author: Kashif Ajmal
*/

// Shortcode callback
function tm_lorem_ipsum_tool() {
    ob_start();
    ?>
    <!-- Load Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@400;700&family=Roboto+Slab:wght@700&display=swap" rel="stylesheet">
    
    <?php
    // Include your HTML file from the plugin directory
    include plugin_dir_path(__FILE__) . 'lorem-ipsum-generator-tool.html';
    ?>
    <?php
    return ob_get_clean();
}

// Register shortcode (shortcode name cannot have spaces!)
add_shortcode('lorem_generate', 'tm_lorem_ipsum_tool');
