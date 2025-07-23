<?php

use BackTo\Framework\Assets\WordPressScriptsAssets;
use BackTo\Framework\Theme\Actions\CleanHead;
use BackTo\Framework\Theme\Actions\RemoveEmojis;
use BackTo\Framework\Theme\I18n\LoadThemeTextDomain;
use BackTo\Framework\PostMeta\Factory\PostMetaFactory;
use BackTo\Framework\PostMeta\PostMetaStructureRegistry;
use BackTo\Framework\PostMeta\RegisterPostMetaStructure;
use BackTo\Framework\PostMeta\Repository\PostMetaRepository;
use BackTo\DesignSystem\Foundation\Color\Configurator\BackgroundColorConfigurator;
use Portfolio\Configurator\PortfolioColorConfigurator;

use BackToVendor\Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return function (ContainerConfigurator $container) {
    $themeDirectoryUri = get_template_directory_uri();
    $themeDirectory = get_template_directory();

    $services = $container->services()
                         ->defaults()
                         ->bind('$themeDirectory', '%themeDirectory%')
                         ->bind('$assetDirectory', '%themeDirectory%')
                         ->bind('$assetDirectoryUri', $themeDirectoryUri)
                         ->bind('$themeTextDomain', '%themeTextDomain%')
                         ->autowire()
                         ->autoconfigure();

    $services->set(LoadThemeTextDomain::class);
    $services->set(WordPressScriptsAssets::class);
    $services->set(PostMetaFactory::class);
    $services->set(PostMetaRepository::class);
    $services->set(PostMetaStructureRegistry::class);
    $services->set(RegisterPostMetaStructure::class);
    
    // Clean Theme
    $services->set(CleanHead::class);
    $services->set(RemoveEmojis::class);

    // Design System
    $services->set(BackgroundColorConfigurator::class, PortfolioColorConfigurator::class);

    // Makes classes in your-folder/ available to be used as services.
    $services->load('Portfolio\\', $themeDirectory . '/includes/*')
             ->exclude($themeDirectory . '/includes/{Entity,Components,Tests,OrOtherFolderToNotRegister}');
    
    // Register BlockEditor services
    $services->set(\Portfolio\BlockEditor\EditorSettings::class);
}; 