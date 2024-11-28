import { Link } from "react-router-dom";
import { usePopularSeriesList } from "../../../Hooks/Series/PopularSeriesList";

export const NewSeries = () => {
	// Using the popularSeries hook to fetch the list of popular movies
	const { popularSeries, loadingPopularSeries, errorPopularSeries } =
		usePopularSeriesList();

	// Display a loading message while loading
	if (loadingPopularSeries) return <p>Loading series...</p>;
	if (errorPopularSeries) return <p>Error: {errorPopularSeries}</p>;

	// Helper function for rendering movie images
	const renderSeries = (series, className, sliceRange) => {
		return series.slice(...sliceRange).map((series) => (
			<Link key={series.id} to={`/series/${series.id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`}
					alt={series.title}
					className={`object-cover rounded-lg ${className}`}
				/>
			</Link>
		));
	};

	return (
		<section className="bg-BaggroundPrim w-full rounded-lg">
			<h1 className="text-center">Nyeste serier</h1>
			<section className="p-10">
				<div className="grid grid-cols-2 gap-1.5 lg:grid-cols-5 xl:grid-cols-7">
					{/* Main large image */}
					{renderSeries(popularSeries, "h-[205px]", [0, 1])}

					{/* Two small images */}
					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{renderSeries(popularSeries, "h-[100px]", [1, 3])}
					</div>

					{/* Additional images for larger screens */}
					{renderSeries(popularSeries, "hidden lg:block h-[205px]", [3, 4])}

					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{renderSeries(popularSeries, "hidden lg:block h-[100px]", [4, 6])}
					</div>

					{renderSeries(
						popularSeries,
						"hidden lg:block h-[205px] sm:hidden",
						[6, 7]
					)}

					<div className="grid grid-cols-1 grid-rows-2 gap-1.5">
						{renderSeries(
							popularSeries,
							"hidden xl:block h-[100px] sm:hidden",
							[7, 9]
						)}
					</div>

					{renderSeries(
						popularSeries,
						"hidden xl:block h-[205px] sm:hidden",
						[9, 10]
					)}
				</div>
			</section>
		</section>
	);
};
