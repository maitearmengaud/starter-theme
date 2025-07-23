<?php

use BackTo\Framework\Theme\ThemeKernel;

class StarterTheme extends ThemeKernel
{
    protected function getConfigDir(): string
    {
        return get_template_directory() . '/config';
    }
}

$theme = new StarterTheme(wp_get_environment_type(), WP_DEBUG);
$theme->setTextDomain('starter');
$theme->load();
