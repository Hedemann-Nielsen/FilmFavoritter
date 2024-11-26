import { ProgressIndicator } from "../../Common/ProgressIndicator/ProgressIndicator";
import { formatYear } from "../../Utils/FormatDate";
import { formatRunTime } from "../../Utils/FormatRunTime";
import { FaList } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

export const PrimaryDetails = ({ movieDetails }) => {
	const genre = movieDetails.genres;

	// const formatRunTime = (minutes) => {
	// 	const hours = Math.floor(minutes / 60);
	// 	const remainingMinutes = minutes % 60;
	// 	return `${hours}h ${remainingMinutes}m`;
	// };

	return (
		<>
			<section className="xs:block xl:flex justify-between items-center w-full ">
				<figure className="flex h-full mt-16 mb-5 xl:mb-12 text-base">
					<img
						src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
						alt={movieDetails.title}
						className="object-cover rounded-lg w-[200px] h-[300px]"
					/>
					<figcaption className="flex-1 flex flex-col justify-end ml-4 text-base">
						<h1>{movieDetails.title}</h1>
						<div className="flex">
							{genre && (
								<ul className="flex space-x-1">
									{genre &&
										genre?.map((g, index) => (
											<li key={g.id} className="text-title">
												<p>
													{g.name}
													{index < genre.length - 1 && ","}
												</p>
											</li>
										))}
								</ul>
							)}

							<p className="flex items-center">
								<LuDot />
								{formatRunTime(movieDetails.runtime)}
							</p>
						</div>
						<p className="text-subtleDark">
							{formatYear(movieDetails.release_date)}
						</p>
					</figcaption>
				</figure>

				{/* Action section */}
				<section className="flex justify-center items-center rounded-lg sm:w-full xl:w-fit h-fit bg-BaggroundPrim px-11 py-9">
					<div className="flex justify-center items-center  w-14 h-14 m-2">
						<ProgressIndicator index={movieDetails.vote_average} />
					</div>
					<span className="flex justify-center items-center  w-14 h-14 m-2 bg-hl rounded-full">
						<FaList />
					</span>
					<span className="flex justify-center items-center w-14 h-14 m-2 bg-hl rounded-full">
						<GoHeartFill />
					</span>
					<button className="bg-hl m-2">
						<FaPlay /> <p className="text-BaggroundPrim pl-2">Play trailer</p>
					</button>
				</section>
			</section>
		</>
	);
};
