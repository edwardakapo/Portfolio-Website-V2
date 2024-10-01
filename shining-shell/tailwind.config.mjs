/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
			letterSpacing : {
				widewide : '.25em',
			},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
				"main-highlight" : "#85E4E7",
			    "text-highlight" : "#3EA9AC",
				"placeholder-text" : "#505050",
				"focus-color" : "#3EA9AC",
				"light-bg" : "#FCFCFC",
			},
			fontFamily : {
				'noto-sans' : ['Noto Sans', 'sans-serif'],
				'arimo' : ['Arimo', 'sans-serif']
	
			},
			keyframes: {
				fadeInScale: {
				  '0%': { opacity: '0', transform: 'scale(0.95)' },
				  '100%': { opacity: '1', transform: 'scale(1)' },
				},
				fadeOut: {
				  '0%': { opacity: '1' },
				  '100%': { opacity: '0' },
				},
				delayedFadeOut: {
					'0%, 80%': { opacity: '1' },  // Fully visible for 80% of the time
					'100%': { opacity: '0' },     // Fade out at the end
				}
			  },
			  animation: {
				fadeInScale: 'fadeInScale 0.15s ease-in-out',
				fadeOut: 'fadeOut 1s ease-out',
				delayedFadeOut : 'delayedFadeOut 4s ease-out forwards',
				'spin-slow' : 'spin 3s linear infinite',
			  },
    	},
    },
	plugins: [require("tailwindcss-animate")],
}
