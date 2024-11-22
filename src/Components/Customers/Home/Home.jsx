import { useGenreList } from "../../Hooks/GenreMovieList";

import { GenreSection } from "./GenreSection";
import { KeyFeatures } from "./KeyFeatures";
import { News } from "./News";

export const Home = () => {
	// Get genreliste
	const { genreList, errorGengre, loadingGenre } = useGenreList();
	console.log(genreList);

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
	const genreThrillerId = genreThriller?.id;
	const genreThrillerName = genreThriller?.name;

	// Find War-genre
	const genreWar = genreList?.find((genre) => genre.name === "War");
	const genreWarId = genreWar?.id;
	const genreWarName = genreWar?.name;

	// Find Romance-genre
	const genreRomance = genreList?.find((genre) => genre.name === "Romance");
	const genreRomanceId = genreRomance?.id;
	const genreRomanceName = genreRomance?.name;
	// Loading and error states
	if (loadingGenre) return <p>Loading genres...</p>;
	if (errorGengre) return <p>Error loading genres: {errorGengre}</p>;

	return (
		<>
			<News />
			<GenreSection gereId={genreActionId} title={genreActionName} />
			<GenreSection gereId={genreComedyId} title={genreComedyName} />
			<GenreSection gereId={genreThrillerId} title={genreThrillerName} />
			<div className="flex justify-center">
				<KeyFeatures />
			</div>
			<GenreSection gereId={genreWarId} title={genreWarName} />
			<GenreSection gereId={genreRomanceId} title={genreRomanceName} />
		</>
	);
};
