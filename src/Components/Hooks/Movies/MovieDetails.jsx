import { useEffect, useState } from "react";
import axios from "axios";

export const useMovieDetails = (movieId) => {
	const [movieDetails, setMovieDetails] = useState({});
	const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
	const [errorMovieDetails, setErrorMovieDetails] = useState(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;

			try {
				const response = await axios.get(
					`${url}/movie/${movieId}?language=en-US`,
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				setMovieDetails(response.data);
			} catch (error) {
				setErrorMovieDetails(error.message);
			} finally {
				setLoadingMovieDetails(false);
			}
		};
		fetchMovieDetails();
	}, [movieId]);

	return { movieDetails, errorMovieDetails, loadingMovieDetails };
};
