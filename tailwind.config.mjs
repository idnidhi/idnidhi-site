/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#D8BFD8', // Silver-rose mid tone
				secondary: '#C0A6B8', // Darker silver-rose
				cta: '#D8BFD8',
				accent: '#F5E6E8', // Light silver-rose
				black: {
					DEFAULT: '#000000',
					light: '#0A0A0A',
					lighter: '#1A1A1A',
				},
				background: '#000000',
				surface: '#0A0A0A',
				border: '#1A1A1A',
				text: {
					DEFAULT: '#FFFFFF',
					light: '#A0A0A0',
					muted: '#707070',
				},
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #F5E6E8, #D8BFD8, #C0A6B8)',
				'gradient-primary-hover': 'linear-gradient(135deg, #C0A6B8, #D8BFD8, #F5E6E8)',
			},
			fontFamily: {
				heading: ['Inter', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'display-sm': 'clamp(3rem, 8vw, 6rem)',
				'display': 'clamp(4rem, 10vw, 8rem)',
				'display-lg': 'clamp(5rem, 12vw, 12rem)',
			},
			spacing: {
				'section': 'clamp(4rem, 8vw, 8rem)',
			},
			letterSpacing: {
				'tighter-xl': '-0.05em',
			},
			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
			},
		},
	},
	plugins: [],
}
