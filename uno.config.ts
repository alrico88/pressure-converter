import { defineConfig, presetWind3, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3({
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        'margin-top': '-4px',
      },
    }),
  ],
});
