import { useEffect, useState } from "react";
import axios from "axios";

export const useGenreImages = () => {
	const [genreImages, setGenreImages] = useState([]);
	const [loadingImages, setLoadingImages] = useState(true);
	const [errorImages, setErrorImages] = useState(null);

	useEffect(() => {
		const fetchGenreImages = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;

			try {
				const genreResponse = await axios.get(
					`${url}/genre/movie/list?language=en`,
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
							`${url}/discover/movie?with_genres=${genre.id}`,
							{
								headers: {
									accept: "application/json",
									Authorization: `Bearer ${accessToken}`,
								},
							}
						);
						const movies = movieResponse.data.results;
						//Choose a random movie
						const randomIndex = Math.floor(Math.random() * movies.length);
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
