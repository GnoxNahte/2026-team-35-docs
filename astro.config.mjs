// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://gnoxnahte.github.io',
  base: '/2026-team-35-docs',
  integrations: [
    starlight({
      title: "SPACE Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/DigiPen-SG-Year-2/2026-team-35",
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
