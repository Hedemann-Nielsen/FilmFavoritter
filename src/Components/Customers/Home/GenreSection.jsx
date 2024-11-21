import { useEffect, useState } from "react";
import { formatDateShortMonth } from "../../Utils/FormatDate";
import { ToggleSwitch } from "../../Common/ToggleSwitch";
import { ProgressIndicator } from "../../Common/ProgressIndicator/ProgressIndicator";

import { GoHeartFill } from "react-icons/go";
export const GenreSection = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.themoviedb.org/3/discover/movie?with_genres=28";
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
				console.log(json.results);

				setMovies(json.results); // Gemmer resultaterne i state
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<section>
			<ToggleSwitch />
			<div className="flex items-baseline mb-3">
				<h1>Action</h1>
				<p className="text-subtleDark ml-3">{movies.length} films</p>
			</div>
			{/* Flex container for desktop */}
			<div className="hidden xl:flex flex-row pb-20">
				{/* Movie items */}
				{movies &&
					movies.slice(0, 10).map((movie, index) => (
						<>
							<figure
								key={index}
								className="relative mx-3 shadow-xl shadow-BaggroundPrim group cursor-pointer">
								<img
									src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
									alt={movie.title}
									className="object-cover rounded-lg"
								/>
								<figcaption className="w-full absolute bottom-[-55px] bg-[#1d1e2cc7] p-4 transition-all duration-300 group-hover:bottom-0 opacity-0 group-hover:opacity-100">
									<h2 className="text-title text-sm">{movie.title}</h2>
									<h2 className="text-title text-xs mb-3 font-thin ">
										{formatDateShortMonth(movie.release_date)}
									</h2>
									<ProgressIndicator index={movie.vote_average} />
								</figcaption>
								<div className="flex absolute -top-3 -right-3 bg-hl w-10 h-10 rounded-full justify-center items-center">
									<GoHeartFill className="w-6 h-6 z-10" />
								</div>
							</figure>
						</>
					))}
			</div>
		</section>
	);
};
