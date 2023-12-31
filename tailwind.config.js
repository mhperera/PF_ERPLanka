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
					light: '#0ea5e9', // Lighten level
					DEFAULT: '#0369a1', // Base color
					dark: '#0369a1', // Darken level
					darker: '#11358b', // Darken level

				},
				secondary: {
					DEFAULT: '#2b9e1b', // Base color
				},
				dark: '#2f2e41'
			},
			transitionProperty: {},
			height: {
				'128': '32rem',
			}
		},
	},
	plugins: [],
};
