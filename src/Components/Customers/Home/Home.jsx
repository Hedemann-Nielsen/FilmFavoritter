import { useGenreList } from "../../Hooks/Movies/GenreMovieList";
import { AllGenresSection } from "./AllGenresSection";
import { GenreSection } from "./GenreSection";
import { KeyFeatures } from "./KeyFeatures";
import { News } from "./News";

export const Home = () => {
	// Get genreliste
	const { genreList, errorGengre, loadingGenre } = useGenreList();

	// Definer de ønskede genrer
	const desiredGenres = [
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

	// Find de ønskede genrer og opret en liste
	const filteredGenres = genreList?.filter((genre) =>
		desiredGenres.includes(genre.name)
	);

	// Loading and error states
	if (loadingGenre) return <p>Loading genres...</p>;
	if (errorGengre) return <p>Error loading genres: {errorGengre}</p>;

	return (
		<>
			<News />
			{/* fist 3 genre sections in desired genres */}
			{filteredGenres?.slice(0, 3).map((genre) => (
				<GenreSection key={genre.id} genreId={genre.id} title={genre.name} />
			))}
			<div className="flex justify-center">
				<KeyFeatures />
			</div>
			{/* next 2 genre sections in desired genres  */}

			{filteredGenres?.slice(3, 5).map((genre) => (
				<GenreSection key={genre.id} genreId={genre.id} title={genre.name} />
			))}

			<AllGenresSection />

			{/* Last genre sections in desired genres  */}
			{filteredGenres?.slice(5, 9).map((genre) => (
				<GenreSection key={genre.id} genreId={genre.id} title={genre.name} />
			))}
		</>
	);
};
