import { useEffect, useRef, useState } from "react";
import { useGenreImages } from "../../../Hooks/Movies/GenreImages";
import { Link } from "react-router-dom";

export const AllSerieseGenres = () => {
	const scrollContainerRef = useRef(null);
	const { genreImages, loadingImages, errorImages } = useGenreImages();
	const [scrollBarWidth, setScrollBarWidth] = useState(10);
	const [scrollPosition, setScrollPosition] = useState(0);

	// Function to update scrollbar
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

		updateScrollBar();
		return () => container.removeEventListener("scroll", updateScrollBar);
	}, [scrollBarWidth]);

	if (loadingImages) return <p>Loading genres...</p>;
	if (errorImages) return <p>Error: {errorImages}</p>;

	return (
		<section className="h-full py-11">
			<div className="flex items-baseline mb-3">
				<h1 className="mb-3">Alle genre</h1>
				<p className="text-subtleDark ml-3">
					{genreImages.length} genre i serier
				</p>
			</div>
			<div
				className="scroll-container flex relative w-full overflow-x-auto"
				ref={scrollContainerRef}>
				{/* All genres */}
				{genreImages &&
					genreImages.map((genre) => (
						<Link key={genre.id} to={`/genre/${genre.id}`}>
							<div
								key={genre.id}
								className="relative mx-3 w-[200px] h-[200px] min-w-[200px]">
								<h3 className="absolute bg-opacity-50 bg-black w-full h-full rounded-full justify-center items-center flex">
									{genre.name}
								</h3>
								{genre.image ? (
									<img
										src={genre.image}
										alt={genre.name}
										className="w-full h-full object-cover rounded-full"
									/>
								) : (
									<p>No image</p>
								)}
							</div>
						</Link>
					))}
			</div>
			{/* Custom scrollbar */}
			<div className="relative w-full h-4 mt-5 bg-subtleDark rounded-full">
				<div
					className="absolute top-0 h-full bg-linkBlue rounded-full progress-bar border-2 border-subtleDark"
					style={{
						width: `${scrollBarWidth}%`,
						left: `${scrollPosition}%`,
						transition: "left 0.1s",
					}}></div>
			</div>
		</section>
	);
};