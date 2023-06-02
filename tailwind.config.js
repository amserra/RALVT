/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				// montserrat: ['Montserrat', 'sans-serif'],
				nexa: ['Nexa', 'sans-serif']
			},
			height: {
				// h-screen - navbar size (h-16 = 4rem)
				navscreen: 'calc(100vh - 4rem)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
