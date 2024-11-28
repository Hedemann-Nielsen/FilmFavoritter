import React from "react";
import { useUserDetails } from "../../Hooks/User/UserDetails";
import { useSeriesDetails } from "../../Hooks/Series/SeriesDetails";
import { useParams } from "react-router-dom";
import { useSeriesCredits } from "../../Hooks/Series/SeriesCredits";
import { ScrollToTop } from "../../Common/ScrollToTop";
import { PrimarySeriesDetails } from "./PrimaryDetails";
import { Backdrop } from "../../Common/Backdrop";
import { SeriesOverview } from "./SeriesOverview";
import { Actors } from "../../Common/Actors";
import { CrewSection } from "../../Common/CrewSection";

export const Series = () => {
	const { series_id } = useParams();
	const seriesId = series_id;

	const { userData } = useUserDetails();

	//series details from fetch
	const { seriesDetails, errorSeriesDetails, loadingSeriesDetails } =
		useSeriesDetails(seriesId || null);

	// Series dredits from fetch
	const { credits, loadingCredits, errorCredits } = useSeriesCredits(
		seriesId || null
	);

	const backdropPath = seriesDetails?.backdrop_path;

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
	if (loadingSeriesDetails || loadingCredits) return <p>Loading series...</p>;
	if (errorSeriesDetails) return <p>Error: {errorSeriesDetails}</p>;
	if (errorCredits) return <p>Error: {errorCredits}</p>;

	return (
		<>
			<ScrollToTop />
			<Backdrop backdropPath={backdropPath} />
			<PrimarySeriesDetails seriesDetails={seriesDetails} userData={userData} />
			<SeriesOverview seriesDetails={seriesDetails} />
			<Actors actingCast={actingCast} />
			<CrewSection
				directors={directors}
				producers={producers}
				writers={writers}
			/>
		</>
	);
};
