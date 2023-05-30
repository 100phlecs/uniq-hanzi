// uno.config.ts
import { defineConfig, presetUno } from "unocss"
import presetWind from "@unocss/preset-wind"
export default defineConfig({
  presets: [
    presetWind({
      /* preset options */
    }),
    presetUno(),
    // ...custom presets
  ],
})
