import { useEffect, useState } from "react";

// Keeps track of the browser's width and updates it every time the window size changes.
export const useResizeHandler = () => {
	const [windowsSize, setWindowSize] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
			});
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowsSize;
};
