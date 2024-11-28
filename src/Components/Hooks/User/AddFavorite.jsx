import { useState, useEffect } from "react";
import axios from "axios";

export const useAddFavorite = (sessionId, movieId) => {
	const [isLiked, setIsLiked] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// Checking if the movie has already been liked
	const fetchFavoriteStatus = async () => {
		if (!sessionId || !movieId) return;

		const apiKey = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;

		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/account/${sessionId}/favorite/movies`,
				{
					headers: {
						Authorization: `Bearer ${apiKey}`,
					},
				}
			);

			// Check if the movie is in the favorites list
			const isMovieFavorited = response.data.results.some(
				(movie) => movie.id === movieId
			);
			setIsLiked(isMovieFavorited);
		} catch (error) {
			console.error("Error fetching favorite status:", error);
			setErrorMessage("Failed to fetch favorite status.");
		}
	};

	// Handles clicks on like button
	const handleLikeClick = async (movieId, sessionId) => {
		const apiKey = import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN;

		const options = {
			method: "POST",
			url: `https://api.themoviedb.org/3/account/${sessionId}/favorite`,
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				Authorization: `Bearer ${apiKey}`,
			},
			data: {
				media_type: "movie",
				media_id: movieId,
				favorite: !isLiked,
			},
		};

		try {
			const response = await axios.request(options);
			setIsLiked((prevState) => !prevState);
		} catch (error) {
			console.error("Error liking/disliking movie:", error);
			setErrorMessage(
				"Failed to update favorite status. Please try again later."
			);
		}
	};

	// Fetch status at first render
	useEffect(() => {
		fetchFavoriteStatus();
	}, [sessionId, movieId]);

	return {
		isLiked,
		errorMessage,
		handleLikeClick,
	};
};
