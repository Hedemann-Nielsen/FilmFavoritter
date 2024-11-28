import { useEffect, useState } from "react";
import axios from "axios";

export const usePopularSeriesList = () => {
	const [popularSeries, setPopularSeries] = useState([]);
	const [loadingPopularSeries, setLoadingPopularSeries] = useState(true);
	const [errorPopularSeries, setErrorPopularSeries] = useState(null);

	// Fetching popular series
	useEffect(() => {
		const fetchSeriesData = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;

			try {
				const response = await axios.get(
					`${url}/tv/popular?language=en-US&page=1`,
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				setPopularSeries(response.data.results);
			} catch (error) {
				setErrorPopularSeries(error.message);
			} finally {
				setLoadingPopularSeries(false);
			}
		};

		fetchSeriesData();
	}, []);

	return { popularSeries, loadingPopularSeries, errorPopularSeries };
};
