/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		extend: {
			colors: {
				BaggroundPrim: "#1E1B33",
				BaggroundSec: "#302B50",
				subtleLight: "#EAEAEA",
				subtleDark: "#61646",
				title: "#FFFFFF",
				AccPrim: "#55EC20",
				accSec: "#8FFF75",
				linkBlue: "#3A00E5",
				shadow: "#302B50",
				CTA: "#FFC837",
				hl: "#FF9100",
				fav: "#FF5E57",
			},
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
