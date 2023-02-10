/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/_app/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				lg: "1240px",
				xl: "1240px",
				"2xl": "1240px",
			},
		},
		extend: {},
	},
	plugins: [],
};
