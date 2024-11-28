import { useRef } from "react";
import { Link } from "react-router-dom";
import { formatDateShortMonth } from "../Utils/FormatDate";
import { ProgressIndicator } from "./ProgressIndicator/ProgressIndicator";
import { GoHeartFill } from "react-icons/go";
import { CustomScrollBar } from "./CustomScrollbar";

export const SeriesCard = ({ singleGenreList }) => {
	const scrollContainerRef = useRef(null);

	console.log(singleGenreList);

	return (
		<>
			{/* Flex container for tablet/mobile */}
			<div
				className="scroll-container scroll-Cardcontainer relative w-full h-[460px] overflow-x-auto"
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
											alt={series.name}
											className="object-cover rounded-lg w-[200px] h-[300px]"
										/>
										<figcaption className="w-full absolute pt-10 rounded-lg bg-opacity-50 bg-black text-white p-2">
											<h2 className="text-title text-sm">{series.name}</h2>
											<h2 className="text-title text-xs mb-3 font-thin">
												{formatDateShortMonth(series.first_air_date)}
											</h2>
										</figcaption>

										<div className="absolute w-full -bottom-8 bg-opacity-50 bg-black flex z-20 justify-center items-center">
											<div className="flex  bg-hl w-10 h-10 rounded-full justify-center items-center mx-3">
												<GoHeartFill className="w-6 h-6" />
											</div>
											<ProgressIndicator index={series.vote_average} />
										</div>
									</figure>
								</Link>
							</div>
						))}
				</div>
			</div>

			<CustomScrollBar scrollContainerRef={scrollContainerRef} />

			{/* Flex container for desktop */}
			<div className="hidden xl:flex flex-row">
				{/* series items */}
				{singleGenreList &&
					singleGenreList.slice(0, 10).map((series) => (
						<Link to={`/series/${series.id}`} key={series.id}>
							<figure className="relative mx-3 shadow-xl shadow-BaggroundPrim group">
								<img
									src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
									alt={series.title}
									className="object-cover rounded-lg"
								/>
								<figcaption className="w-full absolute bottom-[-20px] bg-[#1d1e2cc7] p-4 transition-all duration-500 group-hover:bottom-0 opacity-0 group-hover:opacity-100">
									<h2 className="text-title text-sm">{series.title}</h2>
									<h2 className="text-title text-xs mb-3 font-thin">
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
