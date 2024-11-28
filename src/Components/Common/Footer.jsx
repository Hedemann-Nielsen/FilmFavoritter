import { useContext } from "react";
import logo from "../../assets/film-favoritter-logo.png";
import { AppContext } from "../../Providers/AppContext";
import { Link } from "react-router-dom";

export const Footer = () => {
	const { setContentType, contentType } = useContext(AppContext);
	const date = new Date();
	const year = date.getFullYear();

	// only show buttons on specific pages
	const showButtons =
		location.pathname === "/" || location.pathname === "/home";

	return (
		<footer className=" text-gray-400 py-8 border-t-2 border-subtleLight">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				<Link to="/" className="flex items-center">
					<img src={logo} alt="logo" className="w-12 h-12 mr-3 rounded-full" />
					<span className="text-lg font-bold text-white">Film favoritter</span>
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
			</div>
			<div className="mt-6 text-center text-xs">
				&copy; {year} FilmFavoritter. All rights reserved.
				<p className="text-center text-xs text-subtleDark">
					made by Tanja Hedemann Nielsen
				</p>
			</div>
		</footer>
	);
};
