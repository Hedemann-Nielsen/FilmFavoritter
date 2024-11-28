import { useEffect, useState } from "react";
import axios from "axios";

export const useYoutubeSeries = (seriesId) => {
	const [youtubeVideo, setYoutubeVideo] = useState([]);
	const [youtubeVideoKey, setYoutubeVideoKey] = useState(null);
	const [loadingYoutubeVideo, setLoadingYoutubeVideo] = useState(true);
	const [errorYoutubeVideo, setErrorYoutubeVideo] = useState(null);

	useEffect(() => {
		const fetchMoviesData = async () => {
			const accessToken = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;
			const url = import.meta.env.VITE_TMDB_API_URL;

			try {
				const response = await axios.get(
					`${url}/tv/${seriesId}/videos?language=en-US`,
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${accessToken}`,
						},
					}
				);

				const videos = response.data.results;
				setYoutubeVideo(videos);

				// Find 'Official Trailer'
				const officialTrailer = videos.find(
					(video) => video.name === "Official Trailer"
				);

				if (officialTrailer) {
					setYoutubeVideoKey(officialTrailer.key);
				} else {
					setYoutubeVideoKey(null);
				}
			} catch (error) {
				setErrorYoutubeVideo(error.message);
			} finally {
				setLoadingYoutubeVideo(false);
			}
		};

		fetchMoviesData();
	}, [seriesId]);

	return {
		youtubeVideo,
		youtubeVideoKey,
		loadingYoutubeVideo,
		errorYoutubeVideo,
	};
};
