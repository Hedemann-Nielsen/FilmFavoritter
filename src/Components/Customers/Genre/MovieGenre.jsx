import { useParams } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { Backdrop } from "../../Common/Backdrop";
import { useGenreList } from "../../Hooks/Movies/GenreMovieList";
import { useMoviesFromGenreList } from "../../Hooks/Movies/MoviesFromGenreList";

export const Genre = () => {
	const { genre_id } = useParams();
	const genreId = genre_id;
	const { genreList } = useGenreList();
	const {
		singleGenreList,
		singleGenreTotal,
		error,
		loading,
		loadMore,
		hasMore,
	} = useMoviesFromGenreList(genreId || null);
	const [backdropPath, setBackdropPath] = useState("");

	// Find genre title based on genreId
	const genre = genreList.find((g) => g.id === parseInt(genreId));
	const genreTitle = genre ? genre.name : "Unknown Genre";

	// Find backdrop image from based from first title in the list
	useEffect(() => {
		if (singleGenreList.length > 0) {
			const backdrop = singleGenreList[0].backdrop_path;
			setBackdropPath(backdrop);
		}
	}, [singleGenreList]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error {error.message}</p>;

	return (
		<section className="relative">
			<Backdrop title={genreTitle} backdropPath={backdropPath} />
			<h3 className="text-subtleDark mt-12  z-50">
				{singleGenreTotal?.total_results || 0} film i {genreTitle} genre
			</h3>
			<MovieCard
				singleGenreList={singleGenreList}
				loadMore={loadMore}
				hasMore={hasMore}
			/>
		</section>
	);
};
