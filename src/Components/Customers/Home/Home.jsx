import { useGenreList } from "../../Hooks/GenreMovieList";

import { GenreSection } from "./GenreSection";
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

	// Loading and error states
	if (loadingGenre) return <p>Loading genres...</p>;
	if (errorGengre) return <p>Error loading genres: {errorGengre}</p>;

	return (
		<>
			<News />
			<GenreSection gereId={genreActionId} title={genreActionName} />
			<GenreSection gereId={genreComedyId} title={genreComedyName} />
			<GenreSection gereId={genreThrillerId} title={genreThrillerName} />
		</>
	);
};
