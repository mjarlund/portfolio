import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Pacifico', ...defaultTheme.fontFamily.sans],
				sans: ['Fira Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
