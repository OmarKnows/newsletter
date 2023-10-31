/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				midnight: '#36384D',
				gray: '#C5C5C5',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans'],
			},
		},
	},
	plugins: [],
};
