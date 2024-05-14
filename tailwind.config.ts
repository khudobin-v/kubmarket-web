import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"d-gray-100": "#EBEBEB",
				"d-gray-200": "#A4A4A4",
				"d-gray-300": "#6B6B6B",
				"d-gray-400": "#6E6E6E",
				"d-gray-500": "#545454",
				"d-gray-700": "#252525",
				"d-red-400": "#F93F3F",
				"d-red-500": "#EC2525",
				"d-red-800": "#8A2525",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
