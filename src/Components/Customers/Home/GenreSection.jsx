import { MovieCard } from "../../Common/MovieCard";
import { ToggleSwitch } from "../../Common/ToggleSwitch";
import { useMoviesFromGenreList } from "../../Hooks/MoviesFromGenreList";

export const GenreSection = ({ gereId, title }) => {
	// Use movie hook ONLY when genreId is defined
	const { sinlgeGenreList, loading, error } = useMoviesFromGenreList(
		gereId || null
	);

	// Loading and error states
	// if (!genreComedy) return <p>Loading genre ID...</p>;
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
						{sinlgeGenreList?.length || 0} films
					</p>
				</div>
				<button>Vis flere</button>
			</div>
			<MovieCard sinlgeGenreList={sinlgeGenreList} />
		</section>
	);
};
