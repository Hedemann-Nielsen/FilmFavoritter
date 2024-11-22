import { useEffect, useState } from "react";
import axios from "axios";

export const useMoviesFromGenreList = (genreId) => {
	const [sinlgeGenreList, setSingleGenreList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Forhindre kald, hvis genreId ikke er defineret
		if (!genreId) return;

		const fetchMoviesFromGenreList = async () => {
			setLoading(true);
			setError(null); // Nulstil fejl før nyt API-kald
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjE5MTQxMi4wNDg2MTg2LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RWWRaVJkTDv2ibU3w1dRMtZ52bzV7_VO8iK4STgYP2s",
						},
					}
				);

				setSingleGenreList(response.data.results);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMoviesFromGenreList();
	}, [genreId]); // Tilføj genreId som afhængighed

	return { sinlgeGenreList, loading, error };
};
