import { Link } from "react-router-dom";
import { MovieCard } from "../../../Common/MovieCard";
import { useMoviesFromGenreList } from "../../../Hooks/Movies/MoviesFromGenreList";

export const MovieGenreSection = ({ genreId, title }) => {
	// Use movie hook ONLY when genreId is defined
	const { singleGenreList, singleGenreTotal, loading, error } =
		useMoviesFromGenreList(genreId || null);

	if (loading) return <p>Loading movies...</p>;
	if (error) return <p>Error loading movies: {error}</p>;

	return (
		<section className="my-5">
			<div className="flex justify-between mb-2">
				<div className="flex items-baseline mb-3">
					<h1>{title}</h1>
					{/* total numer of movies */}
					<p className="text-subtleDark ml-3">
						{singleGenreTotal?.total_results || 0} film
					</p>
				</div>
				{/* button to more movies in genre */}
				<button>
					<Link to={`/genre/${genreId}`}>Vis flere</Link>
				</button>
			</div>
			<MovieCard singleGenreList={singleGenreList} />
		</section>
	);
};
