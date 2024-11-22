import { useEffect, useState } from "react";
import axios from "axios";

export const usePopularList = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetching popular movies
	useEffect(() => {
		const fetchMoviesData = async () => {
			try {
				const response = await axios.get(
					"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
					{
						accept: "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjEwNzExOS4wMTgyNzQ4LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2qMxBcWLZMBh7PlTgs7th6r_Ts4vMPX-j3VbtGRRi9o",
					}
				);

				setPopularMovies(response.data.results);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchMoviesData();
	}, []);

	return { popularMovies, loading, error };
};
