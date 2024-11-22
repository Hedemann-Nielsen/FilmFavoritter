import React, { useEffect } from "react";
import { useMoviesFromGenreList } from "../../hooks/MoviesFromGenreList";
import { useParams } from "react-router-dom";
import { formatDateShortMonth } from "../../Utils/FormatDate";
import { GoHeartFill } from "react-icons/go";
import { ProgressIndicator } from "../../Common/ProgressIndicator/ProgressIndicator";

export const Genre = () => {
	// Retrieve genre_id from URL parameters
	const { genre_id } = useParams();
	const genreId = genre_id;

	// Use custom hook to fetch movies for the genre
	const { singleGenreList, error, loading, loadMore, hasMore } =
		useMoviesFromGenreList(genreId || null);

	// Log the movie list (for debugging purposes)
	console.log(singleGenreList);

	// Use effect for managing side effects based on movie list or loading state
	useEffect(() => {
		if (singleGenreList.length > 0 && !loading) {
			// Logic to prevent duplicate fetch requests could go here
		}
	}, [singleGenreList, loading]);

	// Handle loading state or error
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	// Handle "Load More" button click event
	const handleLoadMore = (event) => {
		event.preventDefault(); // Prevent default form submission behavior
		console.log("Load More clicked!");

		// Store current scroll position to return to it after content is loaded
		const currentScroll = window.scrollY;
		setTimeout(() => {
			window.scrollTo(0, currentScroll); // Scroll back to the original position
		}, 100); // Small delay to allow `loadMore` to fetch new data

		loadMore(); // Trigger the loadMore function
	};

	return (
		<section>
			<div>nyGenre</div>
			{/* Grid layout for displaying movies */}
			<div className="relative grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
				{/* Loop through movie list and display each movie */}
				{singleGenreList &&
					singleGenreList.map((movie, index) => (
						<figure
							key={index}
							className="relative mx-3 my-4 shadow-xl shadow-BaggroundPrim group cursor-pointer">
							{/* Movie poster */}
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.title}
								className="object-cover rounded-lg"
							/>
							{/* Movie details (title, release date, rating) */}
							<figcaption className="w-full flex justify-between absolute bottom-[-20px] bg-[#1d1e2cc7] p-4 transition-all duration-500 group-hover:bottom-0 opacity-0 group-hover:opacity-100">
								<div>
									<h2 className="text-title text-sm">{movie.title}</h2>
									<h2 className="text-title text-xs mb-3 font-thin ">
										{formatDateShortMonth(movie.release_date)}
									</h2>
								</div>
								{/* Rating indicator */}
								<ProgressIndicator index={movie.vote_average} />
							</figcaption>
							{/* Like heart icon */}
							<div className="flex absolute -top-3 -right-3 bg-hl w-10 h-10 rounded-full justify-center items-center">
								<GoHeartFill className="w-6 h-6 z-10" />
							</div>
						</figure>
					))}
			</div>

			{/* "Load More" button, visible if more movies are available */}
			{hasMore && (
				<div className="flex justify-center mt-4">
					<button onClick={handleLoadMore}>Load More</button>
				</div>
			)}
		</section>
	);
};
