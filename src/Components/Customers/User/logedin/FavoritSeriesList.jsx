import { useFavoritSeries } from "../../../Hooks/User/FavoritSeries";
import { ProgressIndicator } from "../../../Common/ProgressIndicator/ProgressIndicator";
import { formatYear } from "../../../Utils/FormatDate";

import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

export const FavoritSeriesList = ({ accountId }) => {
	const { favoritSeries, loadingFavoritSeries, errorFavoritSeries } =
		useFavoritSeries(accountId);

	// Loading and error states
	if (loadingFavoritSeries) return <p>Loading favorit Series...</p>;
	if (errorFavoritSeries)
		return <p>Error loading favorit Series: {errorUserDetails}</p>;
	return (
		<>
			<h1 className="mt-8">Favorit serier </h1>
			{favoritSeries &&
				favoritSeries.map((movie, index) => (
					<Link
						key={index}
						to={`/movie/${movie.id}`}
						className=" mt-4  flex flex-col  rounded-lg w-full h-fit bg-BaggroundPrim px-11 py-9">
						<figure className="flex h-full my-3 xl:mb-12 text-base">
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								className="object-cover rounded-lg w-[200px] h-[300px]"
							/>
							<figcaption className="flex-1 flex flex-col justify-center ml-4 text-base">
								<ProgressIndicator index={movie.vote_average} />
								<div className="mt-4">
									<h1>{movie.title}</h1>
									<div className="flex items-center align-middle">
										<p className="text-subtleDark">
											{formatYear(movie.release_date)}
										</p>
										<LuDot className="text-subtleDark" />
										<p className="text-subtleDark">
											Vurderinger: {movie.vote_count}
										</p>
									</div>
									<div className="mt-4">
										<h3 className="uppercase text-title tracking-wider">
											beskrivelse
										</h3>
										<p>{movie.overview}</p>
									</div>
								</div>
							</figcaption>
						</figure>
					</Link>
				))}
		</>
	);
};
