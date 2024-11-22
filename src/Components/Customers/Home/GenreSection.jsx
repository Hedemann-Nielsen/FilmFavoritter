import { MovieCard } from "../../Common/MovieCard";
import { ToggleSwitch } from "../../Common/ToggleSwitch";
import { useMoviesFromGenreList } from "../../Hooks/MoviesFromGenreList";
import { useGenreList } from "../../Hooks/GenreMovieList";

export const GenreSection = () => {
	// Hent genreliste
	const { genreList, errorGengre, loadingGenre } = useGenreList();

	// Find Action-genre
	const genre = genreList?.find((genre) => genre.name === "Action");
	const genreId = genre?.id;

	// Brug film-hook KUN når genreId er defineret
	const { sinlgeGenreList, loading, error } = useMoviesFromGenreList(
		genreId || null
	);

	// Loading og error states
	if (loadingGenre) return <p>Loading genres...</p>;
	if (errorGengre) return <p>Error loading genres: {errorGengre}</p>;
	if (!genreId) return <p>Loading genre ID...</p>;
	if (loading) return <p>Loading movies...</p>;
	if (error) return <p>Error loading movies: {error}</p>;

	return (
		<section>
			<ToggleSwitch />
			<div className="flex items-baseline mb-3">
				<h1>Action</h1>
				<p className="text-subtleDark ml-3">
					{sinlgeGenreList?.length || 0} films
				</p>
			</div>
			<MovieCard sinlgeGenreList={sinlgeGenreList} />
		</section>
	);
};
