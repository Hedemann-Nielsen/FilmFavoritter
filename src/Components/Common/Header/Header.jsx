import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../Providers/AppContext";
import { useAuth } from "../../../Providers/AuthProvider";
import { useGenreList } from "../../Hooks/Movies/GenreMovieList";
import { useSeriesGenreList } from "../../Hooks/Series/SeriesGenreList";

import logo from "../../../assets/Film-favoritter-logo.png";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export const Header = () => {
	const { loginData } = useAuth();
	const { genreList } = useGenreList();
	const { seriesGenreList } = useSeriesGenreList();
	const [selectedGenre, setSelectedGenre] = useState();
	const { setContentType, contentType } = useContext(AppContext);
	const location = useLocation();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Function to handle genre changes
	const handleGenreChange = (e) => {
		setSelectedGenre(e.target.value);
		if (e.target.value) {
			// Redirect to selected genre page
			window.location.href = `/genre/${e.target.value}`;
		}
	};

	// funktion to toggle arrow on drop down
	const toggleDropdown = (state) => {
		setIsDropdownOpen(state);
	};

	// only show buttons on specific pages
	const showButtons =
		location.pathname === "/" || location.pathname === "/home";

	return (
		<header className="bg-BaggroundPrim flex justify-between items-center px-10 py-9">
			<Link to="/" className="flex items-center gap-2">
				<img src={logo} alt="" className=" rounded-full" />
			</Link>
			{showButtons && (
				<div className="flex space-x-4 uppercase align-middle justify-center text-title">
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
			<div className="flex  space-x-3 items-center">
				<Link to="/login">
					<button className="flex w-[144px] justify-between">
						{/* Changes text if user is logged in */}
						<p className="text-BaggroundPrim">
							{loginData ? "Min side" : "Login "}
						</p>
						<FaUser className=" text-BaggroundPrim" />
					</button>
				</Link>

				{/* Genre Dropdown */}
				<div className="relative">
					{/* Arrow icon */}
					<IoMdArrowDropdown
						className={`absolute right-3 top-2 text-title text-2xl transform duration-500 transition-transform ${
							isDropdownOpen ? "rotate-180" : ""
						}`}
					/>
					<select
						name="Vælg genre"
						onChange={handleGenreChange}
						//open dropdown
						onFocus={() => toggleDropdown(true)}
						//close dropdown
						onBlur={() => toggleDropdown(false)}
						className="appearance-none border border-gray-700 bg-BaggroundSec text-title text-base rounded-lg px-4 py-2 w-fit focus:outline-none focus:border-subtleDark focus:shadow-[0_0_5px_rgba(115,115,185,0.5)]"
						defaultValue="">
						<option value="" disabled className="text-title">
							Genre
						</option>
						{(contentType === "movies" ? genreList : seriesGenreList).map(
							(genre) => (
								<option
									key={genre.id}
									value={genre.id}
									className="bg-[#1e1b33] text-[#eaeaea]">
									{genre.name}
								</option>
							)
						)}
					</select>
				</div>
				<div className="flex  w-[144px] bg-BaggroundSec rounded-lg space-x-2 align-middle items-center justify-between px-5 text-title ">
					<p className="flex h-10 items-center text-title ">søg</p>
					<FaSearch />
				</div>
			</div>
		</header>
	);
};
