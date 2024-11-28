import { useEffect, useState } from "react";
import axios from "axios";

export const useGenreList = () => {
	const [genreList, setGenreList] = useState([]);
	const [loadingGenre, setLoadingGenre] = useState(true);
	const [errorGengre, setErrorGenre] = useState(null);

	useEffect(() => {
		const fetchGenreList = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;
			try {
				const response = await axios.get(
					`${url}/genre/movie/list?language=en`,

					{
						headers: {
							accept: "application/json",

							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				setGenreList(response.data.genres);
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
