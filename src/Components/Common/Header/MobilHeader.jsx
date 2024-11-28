import { useContext, useState } from "react";
import { useGenreList } from "../../Hooks/movies/GenreMovieList";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { useSeriesGenreList } from "../../Hooks/Series/SeriesGenreList";
import { AppContext } from "../../../Providers/AppContext";
export const MobilHeader = () => {
	const [isOpen, setOpen] = useState(false);
	const { genreList } = useGenreList();
	const { seriesGenreList } = useSeriesGenreList();
	const { setContentType, contentType } = useContext(AppContext);
	const handleMenuClick = () => {
		setOpen(false);
	};

	// Determine if we are on a specific path
	const showButtons =
		location.pathname === "/" || location.pathname === "/home";

	return (
		<header className="bg-BaggroundPrim flex justify-between items-center px-10 py-9">
			<div>
				<h1 className="text-2xl text-title uppercase">Film favoritter</h1>
				{showButtons && (
					<div className="flex space-x-4 uppercase text-title ">
						<p
							onClick={() => setContentType("movies")}
							className={`hover:text-subtleDark ${
								contentType === "movies"
									? "border-b-2 border-title transition duration-300 ease-in-out"
									: ""
							}`}>
							film
						</p>
						<p
							onClick={() => setContentType("series")}
							className={`hover:text-subtleDark ${
								contentType === "series"
									? "border-b-2 border-title transition duration-300 ease-in-out"
									: ""
							}`}>
							serier
						</p>
					</div>
				)}
			</div>
			<span className="z-50">
				{/* brugermenu fra react npm pakke */}

				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					rounded
					direction="right"
					color="#fff"
				/>
				<section
					className={`bg-BaggroundSec h-screen absolute top-0 right-0 w-52 transition-transform duration-300 ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<Hamburger
						toggled={isOpen}
						toggle={setOpen}
						rounded
						direction="right"
						color="#fff"
					/>
					{(contentType === "movies" ? genreList : seriesGenreList).map(
						(genre) => {
							return (
								<Link
									to={`/genre/${genre.id}`}
									key={genre.id}
									onClick={handleMenuClick}
									className="px-4 text-title flex flex-row hover:text-subtleDark">
									{genre.name}
								</Link>
							);
						}
					)}
				</section>
			</span>
		</header>
	);
};
