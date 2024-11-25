import { useLocation } from "react-router-dom";

export const Backdrop = ({ title, backdropPath }) => {
	const location = useLocation();

	//Determine if we are on a specific path
	const showTitle = !location.pathname.startsWith("/movie/");

	return (
		<div className="relative w-full">
			<div className="flex items-baseline mb-3">
				{/* title for genre only showing if path is not /movie */}
				{showTitle && (
					<h1 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-title sm:text-[52px] xl:text-[72px] uppercase tracking-widest">
						{title}
					</h1>
				)}
			</div>
			<div className="absolute inset-0 bg-[#1d1e2cc7] opacity-80 rounded-lg"></div>
			<img
				src={`https://image.tmdb.org/t/p/w500${backdropPath}`}
				alt={`${title}`}
				className="object-cover w-screen sm:h-80 xl:h-96 rounded-lg"
			/>
		</div>
	);
};
