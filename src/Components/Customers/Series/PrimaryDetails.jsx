import { useEffect, useState } from "react";
import { ProgressIndicator } from "../../Common/ProgressIndicator/ProgressIndicator";
import { formatYear } from "../../Utils/FormatDate";
import { formatRunTime } from "../../Utils/FormatRunTime";
import { FaList, FaPlay } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import { useUserDetails } from "../../Hooks/User/UserDetails";
import { useAddFavorite } from "../../Hooks/User/AddFavorite";

export const PrimarySeriesDetails = ({ seriesDetails }) => {
	const { userData } = useUserDetails();
	const [sessionId, setSessionId] = useState(null);
	const genre = seriesDetails.genres;
	const seriesId = seriesDetails.id;

	useEffect(() => {
		if (userData) setSessionId(userData.id);
	}, [userData]);

	const { isLiked, errorMessage, handleLikeClick } = useAddFavorite(
		sessionId,
		seriesId
	);

	return (
		<>
			<section className="xs:block xl:flex justify-between items-center w-full">
				<figure className="flex h-full mt-16 mb-5 xl:mb-12 text-base">
					<img
						src={`https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`}
						alt={seriesDetails.title}
						className="object-cover rounded-lg w-[200px] h-[300px]"
					/>
					<figcaption className="flex-1 flex flex-col justify-end ml-4 text-base">
						<h1>{seriesDetails.name}</h1>
						<div className="flex">
							{genre && (
								<ul className="flex space-x-1">
									{genre.map((g, index) => (
										<li key={g.id} className="text-title">
											<p>
												{g.name}
												{index < genre.length - 1 && ","}
											</p>
										</li>
									))}
								</ul>
							)}
						</div>
						<div className="flex items-center">
							<p className=" text-subtleDark">
								antal seasoner: {seriesDetails.number_of_seasons}
							</p>
							<LuDot className=" text-subtleDark" />
							<p className=" text-subtleDark">
								antal episoder: {seriesDetails.number_of_episodes}
							</p>
							<LuDot className=" text-subtleDark" />
						</div>
					</figcaption>
				</figure>

				{/* Action section */}
				<section className="flex justify-center items-center rounded-lg sm:w-full xl:w-fit h-fit bg-BaggroundPrim px-11 py-9">
					<div className="flex justify-center items-center w-14 h-14 m-2">
						<ProgressIndicator index={seriesDetails.vote_average} />
					</div>
					<span className="flex justify-center items-center w-14 h-14 m-2 bg-hl rounded-full">
						<FaList />
					</span>
					<span className="flex justify-center items-center w-14 h-14 m-2 bg-hl rounded-full">
						<GoHeartFill
							onClick={() => handleLikeClick(seriesDetails.id, sessionId)}
							className={`w-6 h-6 ${isLiked ? "text-red-500" : ""}`}
						/>
					</span>
					<button className="bg-hl m-2">
						<FaPlay /> <p className="text-BaggroundPrim pl-2">Play trailer</p>
					</button>
				</section>
			</section>
			{errorMessage && <p className="text-red-500">{errorMessage}</p>}
		</>
	);
};