import { useEffect, useState } from "react";

export const useFetchMovies = (genreId) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjEwNzExOS4wMTgyNzQ4LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2qMxBcWLZMBh7PlTgs7th6r_Ts4vMPX-j3VbtGRRi9o",
		},
	};

	useEffect(() => {
		fetch(url, options)
			.then((res) => res.json())
			.then((json) => {
				setMovies(json.results);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [genreId]);

	return { movies, loading, error };
};
