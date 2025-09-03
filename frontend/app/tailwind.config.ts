import type { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx,js,jsx,html}",
		"./node_modules/flowbite-react/**/*.js",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {},
	plugins: [flowbitePlugin],
};

export default config;
