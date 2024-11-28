import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useSeriesFromGenreList = (genreId) => {
	// States for movie list, total data, loading state, and error handling
	const [singleGenreList, setSingleGenreList] = useState([]);
	const [singleGenreTotal, setSingleGenreTotal] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	// Fetch series for a specific page and genre
	const fetchSeriesFromGenreList = useCallback(
		async (page = 1) => {
			if (!genreId) return;

			setLoading(true);
			setError(null);
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&page=${page}`,
					{
						headers: {
							accept: "application/json",
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjE5MTQxMi4wNDg2MTg2LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RWWRaVJkTDv2ibU3w1dRMtZ52bzV7_VO8iK4STgYP2s",
						},
					}
				);

				// Remove duplicates and update movie list and total data
				const filteredMovies = response.data.results.filter(
					(movie, index, self) =>
						index === self.findIndex((m) => m.id === movie.id)
				);
				setSingleGenreList((prevMovies) => [...prevMovies, ...filteredMovies]);

				setSingleGenreTotal(response.data.results);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		},
		[genreId]
	);

	// Fetch the first page of movies when genreId changes
	useEffect(() => {
		setSingleGenreList([]);
		setCurrentPage(1);
		fetchSeriesFromGenreList(1);
	}, [genreId, fetchSeriesFromGenreList]);

	// Load the next page of movies
	const loadMore = () => {
		if (
			singleGenreTotal?.total_pages &&
			currentPage < singleGenreTotal.total_pages
		) {
			const nextPage = currentPage + 1;
			setCurrentPage(nextPage);
			fetchSeriesFromGenreList(nextPage);
		}
	};

	// Return necessary data and functions
	return {
		singleGenreList,
		singleGenreTotal,
		loading,
		error,
		loadMore,
		hasMore: currentPage < singleGenreTotal?.total_pages,
	};
};
