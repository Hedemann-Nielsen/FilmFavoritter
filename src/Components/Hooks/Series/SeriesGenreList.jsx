import { useEffect, useState } from "react";
import axios from "axios";

export const useSeriesGenreList = () => {
	const [seriesGenreList, setSeriesGenreList] = useState([]);
	const [loadingSeriesGenre, setLoadingSeriesGenre] = useState(true);
	const [errorSeriesGenre, setErrorSeriesGenre] = useState(null);

	useEffect(() => {
		const fetchSeriesGenreList = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;

			try {
				const response = await axios.get(
					`${url}/genre/tv/list?language=en`,

					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				setSeriesGenreList(response.data.genres);
			} catch (error) {
				setErrorSeriesGenre(error.message);
			} finally {
				setLoadingSeriesGenre(false);
			}
		};

		fetchSeriesGenreList();
	}, []);

	return { seriesGenreList, errorSeriesGenre, loadingSeriesGenre };
};
