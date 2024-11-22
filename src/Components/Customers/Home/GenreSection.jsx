import { MovieCard } from "../../Common/MovieCard";
import { ToggleSwitch } from "../../Common/ToggleSwitch";
import { useGenreList } from "../../Hooks/genreListData";
export const GenreSection = () => {
	// Fetching genre ID, here for the action genre
	const genreId = 28;
	// Using the genreList hook to fetch the list of movies for the action genre
	const { genreList, loading, error } = useGenreList(genreId);

	// Display a loading message while Loading
	if (loading) {
		return <p>Loading...</p>;
	}

	// Display a error message if there is an issue from fetching data
	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<section>
			<ToggleSwitch />
			<div className="flex items-baseline mb-3">
				<h1>Action</h1>
				<p className="text-subtleDark ml-3">{genreList.length} films</p>
			</div>
			<MovieCard genreList={genreList} />
		</section>
	);
};
