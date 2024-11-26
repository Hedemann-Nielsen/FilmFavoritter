import { Link } from "react-router-dom";
import { usePopularList } from "../../Hooks/Movies/PopularListData";

export const News = () => {
	// Using the popularMovies hook to fetch the list of popular movies
	const { popularMovies, loadingPopularMovies, errorPopularMovies } =
		usePopularList();

	// Display a loading message while loading
	if (loadingPopularMovies) return <p>Loading...</p>;
	if (errorPopularMovies) return <p>Error: {errorPopularMovies}</p>;

	// Helper function for rendering movie images
	const renderMovies = (movies, className, sliceRange) => {
		return movies.slice(...sliceRange).map((movie) => (
			<Link to={`/movie/${movie.id}`}>
				<img
					key={movie.id}
					src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
					alt={movie.title}
					className={`object-cover rounded-lg ${className}`}
				/>
			</Link>
		));
	};

	return (
		<section className="bg-BaggroundPrim w-full rounded-lg">
			<h1 className="text-center">Nyeste film</h1>
			<section className="p-10">
				<div className="grid grid-cols-2 gap-1.5 lg:grid-cols-5 xl:grid-cols-7">
					{/* Main large image */}
					{renderMovies(popularMovies, "h-[205px]", [0, 1])}

					{/* Two small images */}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{renderMovies(popularMovies, "h-[100px]", [1, 3])}
					</div>

					{/* Additional images for larger screens */}
					{renderMovies(popularMovies, "hidden lg:block h-[205px]", [3, 4])}

					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{renderMovies(popularMovies, "hidden lg:block h-[100px]", [4, 6])}
					</div>

					{renderMovies(
						popularMovies,
						"hidden lg:block h-[205px] sm:hidden",
						[6, 7]
					)}

					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{renderMovies(
							popularMovies,
							"hidden xl:block h-[100px] sm:hidden",
							[7, 9]
						)}
					</div>

					{renderMovies(
						popularMovies,
						"hidden xl:block h-[205px] sm:hidden",
						[9, 10]
					)}
				</div>
			</section>
		</section>
	);
};
