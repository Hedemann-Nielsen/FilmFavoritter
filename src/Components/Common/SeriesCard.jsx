import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { formatDateShortMonth } from "../Utils/FormatDate";
import { ProgressIndicator } from "./ProgressIndicator/ProgressIndicator";
import { GoHeartFill } from "react-icons/go";

export const SeriesCard = ({ singleGenreList }) => {
	const scrollContainerRef = useRef(null);
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
	}, [scrollBarWidth]);

	return (
		<>
			{/* Flex container for tablet/mobile */}
			<div
				className="scroll-container scroll-Cardcontainer relative w-full h-[460px] overflow-x-auto "
				ref={scrollContainerRef}>
				<div className="flex xl:hidden w-full">
					{/* series items */}
					{singleGenreList &&
						singleGenreList.slice(0, 10).map((series) => (
							<div key={series.id}>
								<Link to={`/series/${series.id}`}>
									<figure className="relative mx-3 shadow-md shadow-BaggroundPrim min-w-[200px]">
										<img
											src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
											alt={series.title}
											className="object-cover rounded-lg w-[200px] h-[300px]"
										/>
										<figcaption className="w-full absolute pt-10 rounded-lg bg-opacity-50 bg-black text-white p-2">
											<h2 className="text-title text-sm">{series.title}</h2>
											<h2 className="text-title text-xs mb-3 font-thin">
												{formatDateShortMonth(series.release_date)}
											</h2>
										</figcaption>

										<div className="absolute w-full -bottom-8 bg-opacity-50 bg-black flex z-20 justify-center items-center">
											<div className="flex  bg-hl w-10 h-10 rounded-full justify-center items-center mx-3">
												<GoHeartFill className="w-6 h-6 " />
											</div>
											<ProgressIndicator index={series.vote_average} />
										</div>
									</figure>
								</Link>
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
				{/* series items */}
				{singleGenreList &&
					singleGenreList.slice(0, 10).map((series) => (
						<Link to={`/series/${series.id}`} key={series.id}>
							<figure className="relative mx-3 shadow-xl shadow-BaggroundPrim group">
								<img
									src={
										`https://image.tmdb.org/t/p/w500${series.poster_path}` || {
											avatar,
										}
									}
									alt={series.title}
									className="object-cover rounded-lg"
								/>
								<figcaption className="w-full absolute bottom-[-20px] bg-[#1d1e2cc7] p-4 transition-all duration-500 group-hover:bottom-0 opacity-0 group-hover:opacity-100">
									<h2 className="text-title text-sm">{series.title}</h2>
									<h2 className="text-title text-xs mb-3 font-thin ">
										{formatDateShortMonth(series.release_date)}
									</h2>
									<ProgressIndicator index={series.vote_average} />
								</figcaption>
								<div className="flex absolute -top-3 -right-3 bg-hl w-10 h-10 rounded-full justify-center items-center">
									<GoHeartFill className="w-6 h-6 z-10" />
								</div>
							</figure>
						</Link>
					))}
			</div>
		</>
	);
};
