import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../../Providers/AuthProvider";
import { useGenreList } from "../../Hooks/movies/GenreMovieList";
import { useSeriesGenreList } from "../../Hooks/Series/SeriesGenreList";
import { useContext, useState } from "react";
import { AppContext } from "../../../Providers/AppContext";

export const Header = () => {
	const { loginData } = useAuth();
	const { genreList } = useGenreList();
	const { seriesGenreList } = useSeriesGenreList();
	const [selectedGenre, setSelectedGenre] = useState();
	const { setContentType, contentType } = useContext(AppContext);
	const location = useLocation();

	// Function for handling genre selection
	const handleGenreChange = (e) => {
		// Updates the selected type
		setSelectedGenre(e.target.value);
	};

	if (selectedGenre) {
		// Redirect to the selected genre page
		window.location.href = `/genre/${selectedGenre}`;
	}
	// Determine if we are on a specific path
	const showButtons =
		location.pathname === "/" || location.pathname === "/home";

	return (
		<header className="bg-BaggroundPrim flex justify-between items-center px-10 py-9">
			<Link to="/">
				<h1 className="text-title text-3xl">Film favoritter</h1>
			</Link>
			{showButtons && (
				<div className="flex space-x-4 uppercase align-middle justify-center text-title ">
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
			<div className="flex space-x-3">
				<select
					name="Vælg genre"
					onChange={handleGenreChange}
					className="border border-gray-300 text-subtleDark text-base rounded-lg block w-fit px-4 focus:outline-none"
					defaultValue="">
					<option value="" disabled>
						Genre
					</option>
					{(contentType === "movies" ? genreList : seriesGenreList).map(
						(genre) => {
							return (
								<option key={genre.id} value={genre.id}>
									{genre.name}
								</option>
							);
						}
					)}
				</select>

				<Link to="/login">
					<button className="flex space-x-2">
						<FaUser className=" text-BaggroundPrim" />
						{/* changes text if logged in */}
						<p className="text-BaggroundPrim">
							{loginData ? "Profil" : "Login "}
						</p>
					</button>
				</Link>
				<div className="flex w-[144px] bg-[#D9D9D9] rounded-lg  space-x-2 align-middle items-center justify-center text-[#1E1B33]">
					<FaSearch />
					<p className="text-BaggroundPrim">søg</p>
				</div>
			</div>
		</header>
	);
};
