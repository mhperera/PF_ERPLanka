/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#06b6d4', // Lighten level
					DEFAULT: '#0ea5e9', // Base color
					dark: '#0369a1', // Darken level
					darker: '#11358b', // Darken level

				},
				secondary: {
					DEFAULT: '#2b9e1b', // Base color
				}
			},
			transitionProperty: {},
			height: {
				'128': '32rem',
			}
		},
	},
	plugins: [],
};
