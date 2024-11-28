import { useEffect, useState } from "react";
import axios from "axios";

export const useSeriesGenreImages = () => {
	const [genreImages, setGenreImages] = useState([]);
	const [loadingImages, setLoadingImages] = useState(true);
	const [errorImages, setErrorImages] = useState(null);

	useEffect(() => {
		const fetchSeriesGenreImages = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;

			try {
				const genreResponse = await axios.get(
					"https://api.themoviedb.org/3/genre/tv/list?language=en",
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				const genres = genreResponse.data.genres;
				const images = await Promise.all(
					genres.map(async (genre) => {
						const movieResponse = await axios.get(
							`https://api.themoviedb.org/3/discover/tv?with_genres=${genre.id}`,
							{
								headers: {
									accept: "application/json",
									Authorization: `Bearer ${accessToken}`,
								},
							}
						);
						const series = movieResponse.data.results;
						const randomIndex = Math.floor(Math.random() * series.length); // Vælg en tilfældig film
						const movie = series[randomIndex];
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

		fetchSeriesGenreImages();
	}, []);

	return { genreImages, loadingImages, errorImages };
};
