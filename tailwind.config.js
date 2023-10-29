/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				"scalling-dots": {
					"0%, 100%": {
						transform: "scale(0)",
					},
					"40%, 60%": {
						transform: "scale(1)",
					},
				},
			},
			animation: {
				"scalling-dots": "scalling-dots 1s infinite ease backwards",
			},
		},
	},
	plugins: [],
};
