import typografy from '@tailwindcss/typography';
import animate from "tailwindcss-animate";

// Los colores upc-* usan variables CSS; como función aceptan modificadores de opacidad (bg-upc-red/90)
// Sin modificador Tailwind pasa var(--tw-*-opacity): ahí se devuelve el color tal cual.
const upc = (value) => ({ opacityValue }) =>
	opacityValue === undefined || String(opacityValue).startsWith("var(--tw-")
		? value
		: `color-mix(in srgb, ${value} calc(${opacityValue} * 100%), transparent)`;

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
			fontFamily: {
				'Futura': ['Futura', 'sans-serif'],
				display: ['"Playfair Display"', 'Georgia', 'serif'],
			},
			fontWeight: {
				thin: 100,
				light: 300, 
				book: 300,
				medium: 500,
				bold: 700,
				heavy: 900,
			},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			upc: {
    				red: upc('var(--brand-red, #C12329)'),
    				'red-hover': upc('var(--brand-red-hover, #9E1B20)'),
    				'red-soft': upc('var(--brand-red-soft, #FDF2F2)'),
    				'red-border': upc('var(--brand-red-border, #F5C2C4)'),
    				'red-on-dark': upc('var(--brand-red-on-dark, #F87171)'),
    				ink: upc('var(--text-primary, #221E20)'),
    				body: upc('var(--text-secondary, #52525B)'),
    				stone: upc('var(--text-muted, #767574)'),
    				slate: upc('var(--text-motto, #838587)'),
    				canvas: upc('var(--bg-canvas, #F8F8F9)'),
    				surface: upc('var(--bg-surface, #FFFFFF)'),
    				muted: upc('var(--bg-muted, #EFEFF1)'),
    				border: upc('var(--border-subtle, #E2E2E6)'),
    				dark: upc('var(--surface-dark, #242428)'),
    				'dark-elevated': upc('var(--surface-dark-elevated, #34343A)'),
    				steel: upc('var(--accent-steel, #276D8E)')
    			}
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [
		typografy,
		animate
	],
}
