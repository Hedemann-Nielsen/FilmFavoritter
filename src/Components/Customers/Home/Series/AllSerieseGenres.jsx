import { useRef } from "react";
import { useGenreImages } from "../../../Hooks/Movies/GenreImages";
import { Link } from "react-router-dom";
import { CustomScrollBar } from "../../../Common/CustomScrollbar";

export const AllSerieseGenres = () => {
	const scrollContainerRef = useRef(null);
	const { genreImages, loadingImages, errorImages } = useGenreImages();

	if (loadingImages) return <p>Loading genres...</p>;
	if (errorImages) return <p>Error: {errorImages}</p>;

	return (
		<section className="h-full py-11">
			<div className="flex items-baseline mb-3">
				<h1 className="mb-3">Alle genre</h1>
				<p className="text-subtleDark ml-3">
					{genreImages.length} genre i serier
				</p>
			</div>
			<div
				className="scroll-container flex relative w-full overflow-x-auto"
				ref={scrollContainerRef}>
				{/* All genres */}
				{genreImages &&
					genreImages.map((genre) => (
						<Link key={genre.id} to={`/genre/${genre.id}`}>
							<div className="relative mx-3 w-[200px] h-[200px] min-w-[200px]">
								<div className="relative mx-3 w-[200px] h-[200px] min-w-[200px] transform transition-transform duration-300 ease-in-out hover:translate-y-1">
									<h3 className="absolute bg-opacity-50 bg-black w-full h-full rounded-full justify-center items-center flex">
										{genre.name}
									</h3>
									{genre.image ? (
										<img
											src={genre.image}
											alt={genre.name}
											className="w-full h-full object-cover rounded-full"
										/>
									) : (
										<p>No image</p>
									)}
								</div>
							</div>
						</Link>
					))}
			</div>
			<CustomScrollBar scrollContainerRef={scrollContainerRef} />
		</section>
	);
};
