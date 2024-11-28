import { useEffect, useState } from "react";
import axios from "axios";

export const useMovieCredits = (movieId) => {
	const [credits, setCredits] = useState({ cast: [], crew: [] });
	const [loadingCredits, setLoadingCredits] = useState(true);
	const [errorCredits, setErrorCredits] = useState(null);

	useEffect(() => {
		const fetchMovieCredits = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;
			try {
				const response = await axios.get(`${url}/movie/${movieId}/credits`, {
					headers: {
						accept: "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
				});

				setCredits({
					cast: response.data.cast,
					crew: response.data.crew,
				});
			} catch (error) {
				setErrorCredits(error.message);
			} finally {
				setLoadingCredits(false);
			}
		};

		fetchMovieCredits();
	}, [movieId]);

	return { credits, loadingCredits, errorCredits };
};
