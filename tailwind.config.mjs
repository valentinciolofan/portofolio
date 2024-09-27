/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			important: true,
			backgroundImage: {
				'custom-gradient': 'linear-gradient(to right, #121212, #121212)',
			},
			backgroundColor: {
				'about-me': '#121212',
				'light-dark': '#1E1E1F',
			},
			colors: {
				'custom-gray': '#e7e1e1',
			},
			keyframes: {
				fade: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				  },
				'fade-border': {
					'0%': { opacity: 1 },
					'50%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				// Renamed the original animations
				slideInFromLeft: {
					'0%': { opacity: '0', transform: 'translate(-100%, -60%)' },
					'100%': { opacity: '1', transform: 'translate(0, 0)' },
				},
				slideInFromRight: {
					'0%': { opacity: '0', transform: 'translate(100%, -60%)' },
					'100%': { opacity: '1', transform: 'translate(0, 0)' },
				},
				// New fade animations (no vertical movement)
				fadeInFromLeft: {
					'0%': { opacity: '0', transform: 'translateX(-100%)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				fadeInFromRight: {
					'0%': { opacity: '0', transform: 'translateX(100%)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
			animation: {
				'fade-border': 'fade-border 1.5s infinite ease-in-out', // Faster animation
				'slideInFromLeft': 'slideInFromLeft 0.6s ease-out forwards', // Slide in from left with opacity and diagonal movement
				'slideInFromRight': 'slideInFromRight 0.6s ease-out forwards', // Slide in from right with opacity and diagonal movement
				'fadeInFromLeft': 'fadeInFromLeft 0.6s ease-out forwards', // New fade-in from left with no vertical movement
				'fadeInFromRight': 'fadeInFromRight 0.6s ease-out forwards', // New fade-in from right with no vertical movement
				fade: 'fade 0.5s ease-in-out',
				fadeInModal: 'fade 0.2s ease-in-out',
			}
		}
	},
	plugins: [],
}
