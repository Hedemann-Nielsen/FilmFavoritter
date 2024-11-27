import { useEffect, useState } from "react";
import axios from "axios";

export const useSeriesDetails = (seriesId) => {
	const [seriesDetails, setSeriesDetails] = useState({});
	const [loadingSeriesDetails, setLoadingSeriesDetails] = useState(true);
	const [errorSeriesDetails, setErrorSeriesDetails] = useState(null);

	useEffect(() => {
		const fetchSeriesDetails = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjUzNzQzMC42ODk5MTIzLCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NLvRm4nWskan3dNG2MIBh8m8M8CRGyqJj2chp_xR0ig",
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
