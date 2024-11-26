import { useEffect, useState } from "react";
import axios from "axios";

export const usePopularList = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [loadingPopularMovies, setLoadingPopularMovies] = useState(true);
	const [errorPopularMovies, setErrorPopularMovies] = useState(null);

	// Fetching popular movies
	useEffect(() => {
		const fetchMoviesData = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;

			try {
				const response = await axios.get(
					"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				setPopularMovies(response.data.results);
			} catch (error) {
				setErrorPopularMovies(error.message);
			} finally {
				setLoadingPopularMovies(false);
			}
		};

		fetchMoviesData();
	}, []);

	return { popularMovies, loadingPopularMovies, errorPopularMovies };
};
