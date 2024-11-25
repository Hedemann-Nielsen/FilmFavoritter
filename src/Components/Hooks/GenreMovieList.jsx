import { useEffect, useState } from "react";
import axios from "axios";

export const useGenreList = () => {
	const [genreList, setGenreList] = useState([]);
	const [loadingGenre, setLoadingGenre] = useState(true);
	const [errorGengre, setErrorGenre] = useState(null);

	useEffect(() => {
		const fetchGenreList = async () => {
			try {
				const response = await axios.get(
					"https://api.themoviedb.org/3/genre/movie/list?language=en",

					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjE5MTQxMi4wNDg2MTg2LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RWWRaVJkTDv2ibU3w1dRMtZ52bzV7_VO8iK4STgYP2s",
						},
					}
				);

				setGenreList(response.data.genres);
				console.log(genreList);
			} catch (error) {
				setErrorGenre(error.message);
			} finally {
				setLoadingGenre(false);
			}
		};

		fetchGenreList();
	}, []);

	return { genreList, errorGengre, loadingGenre };
};
