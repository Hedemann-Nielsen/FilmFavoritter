import { useEffect, useState } from "react";
import axios from "axios";

export const useGenreImages = () => {
	const [genreImages, setGenreImages] = useState([]);
	const [loadingImages, setLoadingImages] = useState(true);
	const [errorImages, setErrorImages] = useState(null);

	useEffect(() => {
		const fetchGenreImages = async () => {
			try {
				const genreResponse = await axios.get(
					"https://api.themoviedb.org/3/genre/movie/list?language=en",
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjE5MTQxMi4wNDg2MTg2LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiLCJhcGlfcmVhZCIsInZlcnNpb24iOjF9.RWWRaVJkTDv2ibU3w1dRMtZ52bzV7_VO8iK4STgYP2s",
						},
					}
				);

				const genres = genreResponse.data.genres;
				const images = await Promise.all(
					genres.map(async (genre) => {
						const movieResponse = await axios.get(
							`https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
							{
								headers: {
									accept: "application/json",
									Authorization:
										"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjE5MTQxMi4wNDg2MTg2LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiLCJhcGlfcmVhZCIsInZlcnNpb24iOjF9.RWWRaVJkTDv2ibU3w1dRMtZ52bzV7_VO8iK4STgYP2s",
								},
							}
						);
						const movies = movieResponse.data.results;
						const randomIndex = Math.floor(Math.random() * movies.length); // Vælg en tilfældig film
						const movie = movies[randomIndex];
						return {
							id: genre.id,
							name: genre.name,
							image: movie
								? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
								: null,
						};
					})
				);
				setGenreImages(images);
			} catch (error) {
				setErrorImages(error.message);
			} finally {
				setLoadingImages(false);
			}
		};

		fetchGenreImages();
	}, []);

	return { genreImages, loadingImages, errorImages };
};
