import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Providers/AuthProvider";

export const useFavoritMovies = ({ accountId }) => {
	const { sessionId } = useAuth();
	const [favoritMovies, setFavoritMovies] = useState(null);
	const [loadingFavoritMovies, setLoadingFavoritMovies] = useState(true);
	const [errorFavoritMovies, setErrorFavoritMovies] = useState(null);

	useEffect(() => {
		const fetchFavoritMovies = async () => {
			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_TMDB_API_URL
					}/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${
								import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
							}`,
						},
					}
				);

				setFavoritMovies(response.data.results);
			} catch (error) {
				setErrorFavoritMovies(error.message);
			} finally {
				setLoadingFavoritMovies(false);
			}
		};

		fetchFavoritMovies();
	}, [sessionId]);

	return { favoritMovies, loadingFavoritMovies, errorFavoritMovies };
};
