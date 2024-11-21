import { useEffect, useState } from "react";

export const News = () => {
	const [moviesData, setMoviesData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url =
		"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzljNTkwYmU5ZGIzYjhiNDA2NWMzNTk4NWFhYjQ5YiIsIm5iZiI6MTczMjEwNzExOS4wMTgyNzQ4LCJzdWIiOiI2NzNjODZjODc4ZjBjZDQ4OTE3MzliYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2qMxBcWLZMBh7PlTgs7th6r_Ts4vMPX-j3VbtGRRi9o",
		},
	};

	//fetch movies
	useEffect(() => {
		fetch(url, options)
			.then((res) => res.json())
			.then((json) => {
				setMoviesData(json.results);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) {
		// Showigt loading undtil fetch has finished
		return <p>Loading...</p>;
	}

	if (error) {
		// Showing eror massage if any error
		return <p>Error: {error}</p>;
	}
	console.log(moviesData[0]);

	return (
		<section className="bg-BaggroundPrim w-full rounded-lg">
			<h1 className="text-center">Nyeste film</h1>
			<section className="p-10">
				<div className=" grid grid-cols-2 gap-1.5 lg:grid-cols-5 xl:grid-cols-7">
					{/* Billeder - Gælder alle størrelser */}
					{moviesData.slice(0, 1).map((movie, index) => (
						<img
							key={index}
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt={movie.title}
							className=" object-cover rounded-lg  h-[201.5px]"
						/>
					))}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{moviesData.slice(1, 3).map((movie, index) => (
							<img
								key={index}
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
								alt={movie.title}
								className=" object-cover rounded-lg h-[100px]"
							/>
						))}
					</div>
					{moviesData.slice(3, 4).map((movie, index) => (
						<img
							key={index}
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt={movie.title}
							className=" object-cover rounded-lg h-[201.5px]"
						/>
					))}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{" "}
						{moviesData.slice(4, 6).map((movie, index) => (
							<img
								key={index}
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
								alt={movie.title}
								className=" object-cover rounded-lg h-[100px]"
							/>
						))}
					</div>
					{moviesData.slice(6, 7).map((movie, index) => (
						<img
							key={index}
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt={movie.title}
							className=" object-cover rounded-lg h-[201.5px]"
						/>
					))}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{" "}
						{moviesData.slice(7, 9).map((movie, index) => (
							<img
								key={index}
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
								alt={movie.title}
								className=" object-cover rounded-lg h-[100px]"
							/>
						))}
					</div>
					{moviesData.slice(9, 10).map((movie, index) => (
						<img
							key={index}
							src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
							alt={movie.title}
							className=" object-cover rounded-lg h-[201.5px]"
						/>
					))}
				</div>
			</section>
		</section>
	);
};
