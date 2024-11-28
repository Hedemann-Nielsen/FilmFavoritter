import { useEffect, useState } from "react";
import axios from "axios";

export const useSeriesDetails = (seriesId) => {
	const [seriesDetails, setSeriesDetails] = useState({});
	const [loadingSeriesDetails, setLoadingSeriesDetails] = useState(true);
	const [errorSeriesDetails, setErrorSeriesDetails] = useState(null);

	useEffect(() => {
		const fetchSeriesDetails = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;

			try {
				const response = await axios.get(
					`${url}/tv/${seriesId}?language=en-US`,
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				setSeriesDetails(response.data);
			} catch (error) {
				setErrorSeriesDetails(error.message);
			} finally {
				setLoadingSeriesDetails(false);
			}
		};
		fetchSeriesDetails();
	}, [seriesId]);

	return { seriesDetails, errorSeriesDetails, loadingSeriesDetails };
};
