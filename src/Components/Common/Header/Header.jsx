import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../../Providers/AuthProvider";
import { useGenreList } from "../../Hooks/movies/GenreMovieList";
import { useState } from "react";

export const Header = () => {
	const { loginData } = useAuth();
	const { genreList } = useGenreList();
	const [selectedGenre, setSelectedGenre] = useState();

	// Function for handling genre selection
	const handleGenreChange = (e) => {
		// Updates the selected type
		setSelectedGenre(e.target.value);
	};

	if (selectedGenre) {
		// Redirect to the selected genre page
		window.location.href = `/genre/${selectedGenre}`;
	}

	return (
		<header className="bg-BaggroundPrim flex justify-between items-center px-10 py-9">
			<Link to="/">
				<h1 className="text-title text-3xl">Film favoritter</h1>
			</Link>
			<nav className="text-title">
				<ul className="flex space-x-4 align-middle justify-center">
					<li>
						<NavLink className="uppercase">film</NavLink>
					</li>
					<li>
						<NavLink className="uppercase">serier</NavLink>
					</li>
				</ul>
			</nav>
			<div className="flex space-x-3">
				<select
					name="Vælg genre"
					onChange={handleGenreChange}
					className="border border-gray-300 text-subtleDark text-base rounded-lg block w-fit px-4 focus:outline-none"
					defaultValue="">
					<option value="" disabled selected>
						Genre
					</option>
					{genreList &&
						genreList.map((genre) => {
							return (
								<option key={genre.id} value={genre.id}>
									{genre.name}
								</option>
							);
						})}
				</select>

				<button className="flex space-x-2">
					<FaUser className=" text-BaggroundPrim" />
					{/* changes text if logged in */}
					<Link to="/login">
						<p className="text-BaggroundPrim">
							{loginData ? "Profil" : "Login "}
						</p>
					</Link>
				</button>
				<div className="flex w-[144px] bg-[#D9D9D9] rounded-lg  space-x-2 align-middle items-center justify-center text-[#1E1B33]">
					<FaSearch />
					<p className="text-BaggroundPrim">søg</p>
				</div>
			</div>
		</header>
	);
};
