import { useEffect, useState } from "react";
import axios from "axios";

export const useMovieCredits = (movieId) => {
	const [credits, setCredits] = useState({ cast: [], crew: [] });
	const [loadingCredits, setLoadingCredits] = useState(true);
	const [errorCredits, setErrorCredits] = useState(null);

	useEffect(() => {
		const fetchMovieCredits = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${movieId}/credits`,
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjUzNzQzMC42ODk5MTIzLCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NLvRm4nWskan3dNG2MIBh8m8M8CRGyqJj2chp_xR0ig",
						},
					}
				);

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
