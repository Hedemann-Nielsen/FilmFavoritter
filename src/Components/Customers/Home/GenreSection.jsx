import { MovieCard } from "../../Common/MovieCard";
import { ToggleSwitch } from "../../Common/ToggleSwitch";
import { useMoviesFromGenreList } from "../../hooks/MoviesFromGenreList";

export const GenreSection = ({ genreId, title }) => {
	// Use movie hook ONLY when genreId is defined
	const { singleGenreList, singleGenreTotal, loading, error } =
		useMoviesFromGenreList(genreId || null);

	if (loading) return <p>Loading movies...</p>;
	if (error) return <p>Error loading movies: {error}</p>;

	return (
		<section>
			<ToggleSwitch />
			<div className="flex justify-between pb-2">
				<div className="flex items-baseline mb-3">
					{/* title for genre */}
					<h1>{title}</h1>
					<p className="text-subtleDark ml-3">
						{singleGenreTotal?.total_results || 0} films
					</p>
				</div>
				<button>Vis flere</button>
			</div>
			<MovieCard singleGenreList={singleGenreList} />
		</section>
	);
};
