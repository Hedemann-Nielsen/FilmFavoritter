import { useParams } from "react-router-dom";

import { useMovieDetails } from "../../Hooks/MovieDetails";
import { useMovieCredits } from "../../Hooks/MovieCredits";
import { Backdrop } from "../../Common/Backdrop";
import { PrimaryDetails } from "./PrimaryDetails";
import { CrewSection } from "./CrewSection";
import { Actors } from "./Actors";
import { Overview } from "./overview";

export const Movie = () => {
	const { movie_id } = useParams();
	const movieId = movie_id;

	//movie details from fetch
	const { movieDetails, errorMovieDetails, loadingMovieDetails } =
		useMovieDetails(movieId || null);
	// Movie dredits from fetch
	const { credits, loadingCredits, errorCredits } = useMovieCredits(
		movieId || null
	);

	const backdropPath = movieDetails?.backdrop_path;

	// find actors
	const actingCast =
		credits?.cast?.filter(
			(person) => person.known_for_department === "Acting"
		) || [];

	// find prducers
	const producers =
		credits?.crew?.filter((person) => person.job === "Producer") || [];
	// find directors
	const directors =
		credits?.crew?.filter((person) => person.job === "Director") || [];
	// find writers
	const writers =
		credits?.crew?.filter(
			(person) => person.known_for_department === "Writing"
		) || [];

	// Show loading or error messages
	if (loadingMovieDetails || loadingCredits) return <p>Loading movie...</p>;
	if (errorMovieDetails) return <p>Error: {errorMovieDetails.message}</p>;
	if (errorCredits) return <p>Error: {errorCredits.message}</p>;

	return (
		<>
			<Backdrop backdropPath={backdropPath} />
			<PrimaryDetails movieDetails={movieDetails} />
			<Overview movieDetails={movieDetails} />
			<Actors actingCast={actingCast} />
			<CrewSection
				directors={directors}
				producers={producers}
				writers={writers}
			/>
		</>
	);
};
