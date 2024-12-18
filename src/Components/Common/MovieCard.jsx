import { useRef } from "react";
import { Link } from "react-router-dom";
import { formatDateShortMonth } from "../Utils/FormatDate";
import { ProgressIndicator } from "../Common/ProgressIndicator/ProgressIndicator";
import { GoHeartFill } from "react-icons/go";
import { CustomScrollBar } from "../Common/CustomScrollbar";

export const MovieCard = ({ singleGenreList }) => {
	const scrollContainerRef = useRef(null);

	return (
		<>
			{/* Flex container for tablet/mobile */}
			<div
				className="scroll-container scroll-Cardcontainer relative w-full h-[460px] overflow-x-auto"
				ref={scrollContainerRef}>
				<div className="flex xl:hidden w-full ">
					{/* movie items */}
					{singleGenreList &&
						singleGenreList.slice(0, 10).map((movie) => (
							<div
								key={movie.id}
								className="transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
								<Link to={`/movie/${movie.id}`}>
									<figure className="relative mx-3 shadow-md shadow-BaggroundPrim min-w-[200px]">
										<img
											src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
											alt={movie.title}
											className="object-cover rounded-lg w-[200px] h-[300px]"
										/>
										<figcaption className="w-full absolute pt-10 rounded-lg bg-opacity-50 bg-black text-white p-2 ">
											<h2 className="text-title text-sm">
												{movie.title} title
											</h2>
											<h2 className="text-title text-xs mb-3 font-thin">
												{formatDateShortMonth(movie.release_date)}
											</h2>
										</figcaption>

										<div className="absolute w-full -bottom-8 bg-opacity-50 bg-black flex z-20 justify-center items-center pt-2">
											<div className="flex bg-hl w-12 h-12 rounded-full justify-center items-center mx-3 ">
												<GoHeartFill className="w-8 h-8" />
											</div>
											<ProgressIndicator index={movie.vote_average} />
										</div>
									</figure>
								</Link>
							</div>
						))}
				</div>
			</div>

			<CustomScrollBar scrollContainerRef={scrollContainerRef} />

			{/* Flex container for desktop */}
			<div className="hidden xl:flex flex-row ">
				{/* movie items */}
				{singleGenreList &&
					singleGenreList.slice(0, 10).map((movie) => (
						<Link key={movie.id} to={`/movie/${movie.id}`}>
							<div className="transform transition-transform duration-300 ease-in-out hover:translate-y-1">
								<figure className="relative mx-3 shadow-xl shadow-BaggroundPrim group">
									<img
										src={
											`https://image.tmdb.org/t/p/w500${movie.poster_path}` || {
												avatar,
											}
										}
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
							</div>
						</Link>
					))}
			</div>
		</>
	);
};
