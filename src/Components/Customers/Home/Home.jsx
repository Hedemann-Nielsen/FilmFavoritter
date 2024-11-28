import { useContext } from "react";
import { AppContext } from "../../../Providers/AppContext";
import { useGenreList } from "../../Hooks/Movies/GenreMovieList";
import { AllMovieGenres } from "./Movies/AllMovieGenres";
import { MovieGenreSection } from "./Movies/MovieGenreSection";
import { KeyFeatures } from "./KeyFeatures";
import { NewMovies } from "./Movies/NewMovies";
import { NewSeries } from "./Series/NewSeries";
import { useSeriesGenreList } from "../../Hooks/Series/SeriesGenreList";
import { SeriesGenreSection } from "./Series/SeriesGenreSection";
import { AllSerieseGenres } from "./Series/AllSerieseGenres";

export const Home = () => {
	const { genreList, errorGengre, loadingGenre } = useGenreList();
	const { seriesGenreList, errorSeriesGenre, loadingSeriesGenre } =
		useSeriesGenreList();
	const { contentType } = useContext(AppContext);

	// Define the desired movie genres
	const desiredMovieGenres = [
		"Action",
		"Comedy",
		"Crime",
		"Documentary",
		"Drama",
		"Horror",
		"Romance",
		"Thriller",
		"War",
	];

	// Define the desired series genres
	const desiredSeriesGenres = [
		"Action & Adventure",
		"Comedy",
		"Crime",
		"Documentary",
		"Drama",
		"Kids",
		"Reality",
		"Family",
		"War & Politics",
	];

	// Find the wanted genres in movies
	const filteredMovieGenres = genreList?.filter((genre) =>
		desiredMovieGenres.includes(genre.name)
	);

	// Find the wanted genres in series
	const filteredSeriesGenres = seriesGenreList?.filter((seriesgenre) =>
		desiredSeriesGenres.includes(seriesgenre.name)
	);

	// Loading and error states
	if (loadingGenre) return <p>Loading movie genres...</p>;
	if (errorGengre) return <p>Error loading movie genres: {errorGengre}</p>;
	if (loadingSeriesGenre) return <p>Loading series genres...</p>;
	if (errorSeriesGenre)
		return <p>Error loading series genres: {errorSeriesGenre}</p>;

	return (
		<>
			{contentType === "movies" ? (
				<>
					<NewMovies />

					{/* fist 3 genre sections in desired genres */}
					{filteredMovieGenres?.slice(0, 3).map((genre) => (
						<MovieGenreSection
							key={genre.id}
							genreId={genre.id}
							title={genre.name}
						/>
					))}
					<div className="flex justify-center">
						<KeyFeatures />
					</div>

					{/* next 2 genre sections in desired genres  */}
					{filteredMovieGenres?.slice(3, 5).map((genre) => (
						<MovieGenreSection
							key={genre.id}
							genreId={genre.id}
							title={genre.name}
						/>
					))}

					<AllMovieGenres />

					{/* Last genre sections in desired genres  */}
					{filteredMovieGenres?.slice(5, 9).map((genre) => (
						<MovieGenreSection
							key={genre.id}
							genreId={genre.id}
							title={genre.name}
						/>
					))}
				</>
			) : (
				<>
					<NewSeries />
					{/* fist 3 genre sections in desired genres */}
					{filteredSeriesGenres?.slice(0, 3).map((seriesgenre) => (
						<SeriesGenreSection
							key={seriesgenre.id}
							genreId={seriesgenre.id}
							title={seriesgenre.name}
						/>
					))}
					<div className="flex justify-center">
						<KeyFeatures />
					</div>

					{/* next 2 genre sections in desired genres  */}
					{filteredSeriesGenres?.slice(3, 5).map((seriesgenre) => (
						<SeriesGenreSection
							key={seriesgenre.id}
							genreId={seriesgenre.id}
							title={seriesgenre.name}
						/>
					))}

					<AllSerieseGenres />

					{/* Last genre sections in desired genres  */}
					{filteredSeriesGenres?.slice(5, 9).map((genre) => (
						<SeriesGenreSection
							key={genre.id}
							genreId={genre.id}
							title={genre.name}
						/>
					))}
				</>
			)}
		</>
	);
};
