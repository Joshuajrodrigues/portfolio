/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				rammettoOne:'Rammetto One,Times New Roman, serif',
				publicSans: 'Public Sans Variable, sans-serif'
			}
		},
	},
	plugins: [],
}
