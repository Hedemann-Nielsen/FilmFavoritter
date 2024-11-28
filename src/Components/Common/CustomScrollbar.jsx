import { useEffect, useState } from "react";

export const CustomScrollBar = ({ scrollContainerRef }) => {
	const [scrollBarWidth, setScrollBarWidth] = useState(10);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (!scrollContainerRef.current) return;

		const updateScrollBar = () => {
			const container = scrollContainerRef.current;
			const scrollWidth = container.scrollWidth;
			const clientWidth = container.clientWidth;
			const scrolledPercentage =
				container.scrollLeft / (scrollWidth - clientWidth);
			const newPosition = scrolledPercentage * (100 - scrollBarWidth);
			setScrollPosition(newPosition);
		};

		const container = scrollContainerRef.current;
		container.addEventListener("scroll", updateScrollBar);
		// Initial call to set correct sizes
		updateScrollBar();
		return () => container.removeEventListener("scroll", updateScrollBar);
	}, [scrollBarWidth, scrollContainerRef]);

	return (
		<div className="relative xl:hidden w-full h-4 bg-subtleDark rounded-full">
			<div
				className="absolute top-0 h-full bg-linkBlue rounded-full progress-bar border-2 border-subtleDark"
				style={{
					width: `${scrollBarWidth}%`,
					left: `${scrollPosition}%`,
					transition: "left 0.1s",
				}}></div>
		</div>
	);
};
