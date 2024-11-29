import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"custom-light": "#e9f4f4",
				"custom-dark": "#304949",
				"custom-primary": "#A5B4FC",
				"custom-secondary": "#8B5CF6",
				"custom-neutral": "#D1D5DB",
				"custom-accent": "#F59E0B",
			},
		},
	},
	plugins: [],
};

export default config;
