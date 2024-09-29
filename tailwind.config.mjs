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
				slideRight: {
					'0%': { transform: 'translateX(-20%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideLeft: {
					'0%': { transform: 'translateX(20%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideAndScale: {
					'0%': {
					  opacity: '0',
					  transform: 'translateY(20px) scale(0.95)', // Start slightly below and smaller
					},
					'100%': {
					  opacity: '1',
					  transform: 'translateY(0) scale(1)', // End at full size in normal position
					},
				  },
			},
			animation: {
				'fade-border': 'fade-border 1.5s infinite ease-in-out', // Faster animation
				'slideInFromLeft': 'slideInFromLeft 0.6s ease-out forwards', // Slide in from left with opacity and diagonal movement
				'slideInFromRight': 'slideInFromRight 0.6s ease-out forwards', // Slide in from right with opacity and diagonal movement
				slideRight: 'slideRight 1s ease-out',
				slideLeft: 'slideLeft 1s ease-out',
				fade: 'fade 0.5s ease-in-out',
				fadeInModal: 'fade 0.2s ease-in-out',
				fadeIn: 'fade 1s ease-out forwards',
				slideAndScale: 'slideAndScale 0.8s ease-out forwards',
			}
		}
	},
	plugins: [],
}
