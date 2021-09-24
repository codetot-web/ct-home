<?php

add_action('init', 'ct_home_register_block_patterns');

function ct_home_register_block_patterns() {
	register_block_pattern_category(
		'ct-home',
		array(
			'label' => __('CT Sections')
		)
	);

	$block_patterns = array(
		array(
			'id' => 'ct-home/ct-hero-section',
			'title' => __('Hero Section - Left Alignment', 'ct-home'),
			'categories' => array('ct-home'),
			'content' => file_get_contents(get_template_directory() . '/block-patterns/ct-hero-section.html')
		),
		array(
			'id' => 'ct-home/ct-hero-section-center',
			'title' => __('Hero Section - Center Alignment', 'ct-home'),
			'categories' => array('ct-home'),
			'content' => file_get_contents(get_template_directory() . '/block-patterns/ct-hero-section-center.html')
		)
	);

	foreach ($block_patterns as $pattern) {
		register_block_pattern($pattern['id'], $pattern);
	}
}
