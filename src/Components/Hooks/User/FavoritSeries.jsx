import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Providers/AuthProvider";

export const useFavoritSeries = ({ accountId }) => {
	const { sessionId } = useAuth();
	const [favoritSeries, setFavoritSeries] = useState(null);
	const [loadingFavoritSeries, setLoadingFavoritSeries] = useState(true);
	const [errorFavoritSeries, setErrorFavoritSeries] = useState(null);

	useEffect(() => {
		const fetchFavoritSeries = async () => {
			try {
				const response = await axios.get(
					`${
						import.meta.env.VITE_TMDB_API_URL
					}/account/${accountId}/favorite/tv?language=en-US&page=1&sort_by=created_at.asc`,
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${
								import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
							}`,
						},
					}
				);

				setFavoritSeries(response.data.results);
			} catch (error) {
				setErrorFavoritSeries(error.message);
			} finally {
				setLoadingFavoritSeries(false);
			}
		};

		fetchFavoritSeries();
	}, [sessionId]);

	return { favoritSeries, loadingFavoritSeries, errorFavoritSeries };
};
