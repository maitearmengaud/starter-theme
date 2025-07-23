<?php

namespace Portfolio\BlockEditor;

use BackTo\Framework\Contracts\Hooks;

class EditorSettings implements Hooks
{
    public function hooks()
    {
        add_filter('wp_theme_json_data_theme', [$this, 'injectEditorSettings']);
    }
    
    /**
     * @var WP_Theme_JSON_Data|WP_Theme_JSON_Data_Gutenberg $theme_json
     */
    public function injectEditorSettings($theme_json)
    {
        $configDir = get_template_directory() . '/config/';
        $configs = [
            'border' => 'border.json',
            'color' => 'color.json',
            'spacing' => 'spacing.json',
            'typography' => 'typography.json',
            'layout' => 'layout.json',
            'blocks' => 'blocks.json',
            'shadow' => 'shadow.json',
        ];

        foreach ($configs as $key => $file) {
            $path = $configDir . $file;
            if (file_exists($path)) {
                $json = json_decode(file_get_contents($path), true);
                $newData = [
                    'version'  => 3,
                    'settings' => [
                        $key => $json
                    ]
                ];
                $theme_json->update_with( $newData );
            }
        }

        return $theme_json;
    }
} 
    