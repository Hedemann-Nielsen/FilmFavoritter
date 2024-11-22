import { useEffect, useState } from "react";

export const CustomScrollbar = ({ containerRef }) => {
	const [scrollBarWidth, setScrollBarWidth] = useState(10);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (!containerRef.current) return;

		const updateScrollBar = () => {
			const container = containerRef.current;
			const scrollWidth = container.scrollWidth;
			const clientWidth = container.clientWidth;
			const scrolledPercentage =
				container.scrollLeft / (scrollWidth - clientWidth);
			const newPosition = scrolledPercentage * (100 - scrollBarWidth);
			setScrollPosition(newPosition);
		};

		const container = containerRef.current;
		container.addEventListener("scroll", updateScrollBar);
		updateScrollBar(); // Initial call to set correct sizes
		return () => container.removeEventListener("scroll", updateScrollBar);
	}, [scrollBarWidth, containerRef]);

	return (
		<div
			className="absolute top-0 h-full bg-linkBlue rounded-full progress-bar border-2 border-subtleDark"
			style={{
				width: `${scrollBarWidth}%`,
				left: `${scrollPosition}%`,
				transition: "left 0.1s",
			}}></div>
	);
};
