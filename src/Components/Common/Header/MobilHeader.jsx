import { useState } from "react";
import { useGenreList } from "../../Hooks/movies/GenreMovieList";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
export const MobilHeader = () => {
	const [isOpen, setOpen] = useState(false);
	const { genreList } = useGenreList();

	const handleMenuClick = () => {
		setOpen(false);
	};

	return (
		<header className="bg-BaggroundPrim flex justify-between items-center px-10 py-9">
			<h1 className="text-2xl text-title uppercase">Film favoritter</h1>

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
					{genreList &&
						genreList.map((genre) => {
							return (
								<Link
									to={`/genre/${genre.id}`}
									key={genre.id}
									onClick={handleMenuClick}
									className="px-4 text-title flex flex-row hover:text-subtleDark">
									{genre.name}
								</Link>
							);
						})}
					{/* <select
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
					</select> */}
				</section>
			</span>
		</header>
	);
};
