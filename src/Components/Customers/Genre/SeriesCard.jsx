import { formatDateShortMonth } from "../../Utils/FormatDate";
import { GoHeartFill } from "react-icons/go";
import { ProgressIndicator } from "../../Common/ProgressIndicator/ProgressIndicator";
import { Link } from "react-router-dom";

export const SeriesCard = ({ singleGenreList, loadMore, hasMore }) => {
	// Handle "Load More" button click event
	const handleLoadMore = (event) => {
		event.preventDefault(event);
		const currentScroll = window.scrollY;
		setTimeout(() => {
			window.scrollTo(0, currentScroll);
			// Small delay to allow `loadMore` to fetch new data
		}, 100);
		loadMore();
	};

	return (
		<>
			{/* Grid layout for displaying series */}
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
				{/* Loop through series list and display each series */}
				{singleGenreList &&
					singleGenreList.map((series) => (
						<Link key={series.id} to={`/series/${series.id}`}>
							<figure className="relative mx-3 my-4 shadow-xl shadow-BaggroundPrim group cursor-pointer">
								<img
									src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
									alt={series.title}
									className="object-cover rounded-lg"
								/>
								{/* series details (title, release date, rating) */}
								<figcaption className="w-full flex justify-between absolute bottom-[-20px] bg-[#1d1e2cc7] p-4 transition-all duration-500 group-hover:bottom-0 opacity-0 group-hover:opacity-100">
									<div>
										<h2 className="text-title text-sm">{series.title}</h2>
										<h2 className="text-title text-xs mb-3 font-thin ">
											{formatDateShortMonth(series.release_date)}
										</h2>
									</div>
									{/* Rating indicator */}
									<ProgressIndicator index={series.vote_average} />
								</figcaption>
								{/* Like heart icon */}
								<div className="flex absolute -top-3 -right-3 bg-hl w-10 h-10 rounded-full justify-center items-center">
									<GoHeartFill className="w-6 h-6 z-10" />
								</div>
							</figure>
						</Link>
					))}
			</div>

			{/* "Load More" button, only visible if more series are available */}
			{hasMore && (
				<div className="flex justify-center py-4 mt-4">
					<button onClick={handleLoadMore}>Load More</button>
				</div>
			)}
		</>
	);
};
