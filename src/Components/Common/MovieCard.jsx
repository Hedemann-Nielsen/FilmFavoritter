import { useEffect, useRef, useState } from "react";
import { formatDateShortMonth } from "../Utils/FormatDate";
import { ProgressIndicator } from "../Common/ProgressIndicator/ProgressIndicator";
import { GoHeartFill } from "react-icons/go";

export const MovieCard = ({ sinlgeGenreList }) => {
	const scrollContainerRef = useRef(null);
	const [scrollBarWidth, setScrollBarWidth] = useState(10); // Set fixed width to 10% of the bar
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
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
		updateScrollBar(); // Initial call to set correct sizes
		return () => container.removeEventListener("scroll", updateScrollBar);
	}, [scrollBarWidth]);

	return (
		<>
			{/* Flex container for tablet/mobile */}
			<div
				className="scroll-container relative w-full h-[460px] overflow-x-auto "
				ref={scrollContainerRef}>
				<div className="flex xl:hidden w-full">
					{/* movie items */}
					{sinlgeGenreList &&
						sinlgeGenreList.slice(0, 10).map((movie, index) => (
							<div key={index}>
								<figure className="relative mx-3 shadow-md shadow-BaggroundPrim min-w-[200px]">
									<img
										src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
										alt={movie.title}
										className="object-cover rounded-lg w-[200px] h-[300px]"
									/>
									<figcaption className="w-full absolute pt-10 rounded-lg bg-opacity-50 bg-black text-white p-2">
										<h2 className="text-title text-sm">{movie.title}</h2>
										<h2 className="text-title text-xs mb-3 font-thin">
											{formatDateShortMonth(movie.release_date)}
										</h2>
									</figcaption>

									<div className="absolute w-full -bottom-8 bg-opacity-50 bg-black flex z-20 justify-center items-center">
										<div className="flex  bg-hl w-10 h-10 rounded-full justify-center items-center mx-3">
											<GoHeartFill className="w-6 h-6 " />
										</div>
										<ProgressIndicator index={movie.vote_average} />
									</div>
								</figure>
							</div>
						))}
				</div>
			</div>
			{/* Custom scrollbar */}
			<div className="relative xl:hidden w-full h-4 bg-subtleDark rounded-full ">
				<div
					className="absolute top-0 h-full bg-linkBlue rounded-full progress-bar border-2 border-subtleDark"
					style={{
						width: `${scrollBarWidth}%`,
						left: `${scrollPosition}%`,
						transition: "left 0.1s",
					}}></div>
			</div>

			{/* Flex container for desktop */}
			<div className="hidden xl:flex flex-row ">
				{/* movie items */}
				{sinlgeGenreList &&
					sinlgeGenreList.slice(0, 10).map((movie, index) => (
						<figure
							key={index}
							className="relative mx-3 shadow-xl shadow-BaggroundPrim group cursor-pointer">
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								className="object-cover rounded-lg"
							/>
							<figcaption className="w-full absolute bottom-[-20px] bg-[#1d1e2cc7] p-4 transition-all duration-500 group-hover:bottom-0 opacity-0 group-hover:opacity-100">
								<h2 className="text-title text-sm">{movie.title}</h2>
								<h2 className="text-title text-xs mb-3 font-thin ">
									{formatDateShortMonth(movie.release_date)}
								</h2>
								<ProgressIndicator index={movie.vote_average} />
							</figcaption>
							<div className="flex absolute -top-3 -right-3 bg-hl w-10 h-10 rounded-full justify-center items-center">
								<GoHeartFill className="w-6 h-6 z-10" />
							</div>
						</figure>
					))}
			</div>
		</>
	);
};
