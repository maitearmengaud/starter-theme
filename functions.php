<?php

use BackTo\Framework\Theme\ThemeKernel;

class PortfolioTheme extends ThemeKernel
{
    protected function getConfigDir(): string
    {
        return get_template_directory() . '/config';
    }
}

$theme = new PortfolioTheme(wp_get_environment_type(), WP_DEBUG);
$theme->setTextDomain('portfolio');
$theme->load();
