import { usePopularList } from "../../Hooks/PopularListData";

export const News = () => {
	// Using the popularMovies hook to fetch the list of populat movies

	const { popularMovies, loading, error } = usePopularList();

	// Display a loading message while Loading
	if (loading) {
		return <p>Loading...</p>;
	}
	// Display a error message if there is an issue from fetching data

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<section className=" bg-BaggroundPrim w-full rounded-lg">
			<h1 className="text-center">Nyeste film</h1>
			<section className="p-10">
				<div className=" grid grid-cols-2 gap-1.5 lg:grid-cols-5 xl:grid-cols-7">
					{/* Billeder - Gælder alle størrelser */}
					{popularMovies &&
						popularMovies
							.slice(0, 1)
							.map((movie, index) => (
								<img
									key={index}
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt={movie.title}
									className=" object-cover rounded-lg  h-[205px]"
								/>
							))}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{popularMovies &&
							popularMovies
								.slice(1, 3)
								.map((movie, index) => (
									<img
										key={index}
										src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
										alt={movie.title}
										className=" object-cover rounded-lg h-[100px]"
									/>
								))}
					</div>
					{popularMovies &&
						popularMovies
							.slice(3, 4)
							.map((movie, index) => (
								<img
									key={index}
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt={movie.title}
									className="hidden lg:block 2xl:block object-cover rounded-lg  h-[205px]"
								/>
							))}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{" "}
						{popularMovies &&
							popularMovies
								.slice(4, 6)
								.map((movie, index) => (
									<img
										key={index}
										src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
										alt={movie.title}
										className="hidden lg:block 2xl:block object-cover rounded-lg h-[100px] "
									/>
								))}
					</div>
					{popularMovies &&
						popularMovies
							.slice(6, 7)
							.map((movie, index) => (
								<img
									key={index}
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt={movie.title}
									className="hidden lg:block 2xl:block  object-cover rounded-lg  h-[205px] sm:hidden"
								/>
							))}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{popularMovies &&
							popularMovies
								.slice(7, 9)
								.map((movie, index) => (
									<img
										key={index}
										src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
										alt={movie.title}
										className="hidden xl:block object-cover rounded-lg h-[100px] sm:hidden"
									/>
								))}
					</div>
					{popularMovies &&
						popularMovies
							.slice(9, 10)
							.map((movie, index) => (
								<img
									key={index}
									src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
									alt={movie.title}
									className="hidden xl:block object-cover rounded-lg  h-[205px] sm:hidden"
								/>
							))}
				</div>
			</section>
		</section>
	);
};
