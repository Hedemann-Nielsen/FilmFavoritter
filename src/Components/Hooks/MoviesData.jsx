import { useEffect, useState } from "react";

export const useMoviesData = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMoviesData = async () => {
			try {
				const response = await fetch(
					"https://api.themoviedb.org/3/movie/popular?api_key=authorization=eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjEwNzExOS4wMTgyNzQ4LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0&language=en-US&page=1"
				);
				const data = await response.json();
				setMoviesData(data.results);
				setLoading(false); // Set loading to false once the data is fetched
			} catch (error) {
				setError(error.message); // Set error if fetching fails
				setLoading(false); // Also stop loading
			}
		};

		fetchMoviesData(); // Call the fetch function
	}, []); // Empty dependency array to run the effect only once

	return { moviesData, loading, error };
};
