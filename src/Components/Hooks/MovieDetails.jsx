import { useEffect, useState } from "react";
import axios from "axios";

export const useMovieDetails = (movieId) => {
	const [movieDetails, setMovieDetails] = useState({});
	const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
	const [errorMovieDetails, setErrorMovieDetails] = useState(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjUzNzQzMC42ODk5MTIzLCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NLvRm4nWskan3dNG2MIBh8m8M8CRGyqJj2chp_xR0ig",
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
