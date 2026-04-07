/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2563EB',
				secondary: '#3B82F6',
				cta: '#F97316',
				accent: '#D4AF37', // Gold accent for luxury feel
				background: '#F8FAFC',
				surface: '#FFFFFF',
				text: {
					DEFAULT: '#1E293B',
					light: '#64748B',
					dark: '#0F172A',
				},
			},
			fontFamily: {
				heading: ['Cinzel', 'serif'],
				body: ['Josefin Sans', 'sans-serif'],
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
		},
	},
	plugins: [],
}
