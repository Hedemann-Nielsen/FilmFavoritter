import { useParams } from "react-router-dom";
import { useGenreList } from "../../Hooks/GenreMovieList";
import { useMoviesFromGenreList } from "../../hooks/MoviesFromGenreList";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";

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

	// Find backdrop omage from based from first title in the list
	useEffect(() => {
		if (singleGenreList.length > 0) {
			const backdrop = singleGenreList[0].backdrop_path;
			setBackdropPath(backdrop);
		}
	}, [singleGenreList]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	return (
		<section>
			<div className="relative w-full">
				<div className="flex items-baseline mb-3">
					{/* title for genre */}
					<h1 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-title text-[72px] uppercase tracking-widest">
						{genreTitle}
					</h1>
				</div>
				<div className="absolute inset-0 bg-[#1d1e2cc7] opacity-80 rounded-lg"></div>
				<img
					src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
					alt={`${genreTitle} Genre`}
					className="object-cover w-full h-96 rounded-lg"
				/>
			</div>
			<h3 className="text-subtleDark my-3">
				{singleGenreTotal?.total_results || 0} films i {genreTitle} genre
			</h3>
			<MovieCard
				singleGenreList={singleGenreList}
				loadMore={loadMore}
				hasMore={hasMore}
			/>
		</section>
	);
};
