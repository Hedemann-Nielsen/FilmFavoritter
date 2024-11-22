import { useEffect, useState } from "react";
import axios from "axios";

export const useGenreList = (genreId) => {
	const [genreList, setGenreList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchGenreList = async () => {
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

				setGenreList(response.data.results);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchGenreList();
	}, []);

	return { genreList, loading, error };
};
