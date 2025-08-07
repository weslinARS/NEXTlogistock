// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	// La configuración de 'content' sigue siendo crucial
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

	// ¡Los plugins se declaran aquí!
	plugins: [require('daisyui')],

	// Puedes tener configuraciones de DaisyUI aquí también
	daisyui: {
		themes: ['light', 'dark', 'cupcake'],
	},
};
