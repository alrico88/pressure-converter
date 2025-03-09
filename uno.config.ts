import { defineConfig, presetWind3, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetWind3({
      dark: "media",
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        "margin-top": "-4px",
      },
    }),
  ],
  shortcuts: {
    btn: "border-0 hover:cursor-pointer rounded-lg px-3 py-2 transition-colors",
  },
});
