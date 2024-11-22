import { useGenreList } from "../../Hooks/GenreMovieList";
import { AllGenresSection } from "./AllGenresSection";

import { GenreSection } from "./GenreSection";
import { KeyFeatures } from "./KeyFeatures";
import { News } from "./News";

export const Home = () => {
	// Get genreliste
	const { genreList, errorGengre, loadingGenre } = useGenreList();

	// Find Action-genre
	const genreAction = genreList?.find((genre) => genre.name === "Action");
	const genreActionId = genreAction?.id;
	const genreActionName = genreAction?.name;

	// Find Comedy-genre
	const genreComedy = genreList?.find((genre) => genre.name === "Comedy");
	const genreComedyId = genreComedy?.id;
	const genreComedyName = genreComedy?.name;

	// Find Thriller-genre
	const genreThriller = genreList?.find((genre) => genre.name === "Thriller");
	console.log(genreThriller);

	const genreThrillerId = genreThriller?.id;
	console.log(genreThrillerId);

	const genreThrillerName = genreThriller?.name;
	console.log(genreThrillerName);

	// Find War-genre
	const genreWar = genreList?.find((genre) => genre.name === "War");
	const genreWarId = genreWar?.id;
	const genreWarName = genreWar?.name;

	// Find Romance-genre
	const genreRomance = genreList?.find((genre) => genre.name === "Romance");
	const genreRomanceId = genreRomance?.id;
	const genreRomanceName = genreRomance?.name;

	// Find Drama-genre
	const genreDrama = genreList?.find((genre) => genre.name === "Drama");
	const genreDramaId = genreDrama?.id;
	const genreDramaName = genreDrama?.name;

	// Find Crime-genre
	const genreCrime = genreList?.find((genre) => genre.name === "Crime");
	const genreCrimeId = genreCrime?.id;
	const genreCrimeName = genreCrime?.name;

	// Find Documentary-genre
	const genreDocumentary = genreList?.find(
		(genre) => genre.name === "Documentary"
	);
	const genreDocumentaryId = genreDocumentary?.id;
	const genreDocumentaryName = genreDocumentary?.name;

	// Find Horror-genre
	const genreHorror = genreList?.find((genre) => genre.name === "Horror");
	const genreHorrorId = genreHorror?.id;
	const genreHorrorName = genreHorror?.name;

	// Loading and error states
	if (loadingGenre) return <p>Loading genres...</p>;
	if (errorGengre) return <p>Error loading genres: {errorGengre}</p>;

	return (
		<>
			<News />
			<GenreSection GenreId={genreActionId} title={genreActionName} />
			<GenreSection GenreId={genreComedyId} title={genreComedyName} />
			<GenreSection GenreId={genreThrillerId} title={genreThrillerName} />
			<div className="flex justify-center">
				<KeyFeatures />
			</div>
			<GenreSection GenreId={genreWarId} title={genreWarName} />
			<GenreSection GenreId={genreRomanceId} title={genreRomanceName} />
			<AllGenresSection />
			<GenreSection GenreId={genreDramaId} title={genreDramaName} />
			<GenreSection GenreId={genreCrimeId} title={genreCrimeName} />
			<GenreSection GenreId={genreDocumentaryId} title={genreDocumentaryName} />
			<GenreSection GenreId={genreHorrorId} title={genreHorrorName} />
		</>
	);
};
