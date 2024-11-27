import { LuDot } from "react-icons/lu";

export const SeriesOverview = ({ seriesDetails }) => {
	const seasons = seriesDetails.seasons;

	return (
		<>
			<section className="pb-7 border-b-2 border-title">
				<div>
					<h2 className="uppercase text-title tracking-wider">beskrivelse</h2>
				</div>
				<p>{seriesDetails.overview}</p>
			</section>
			<section>
				<h2>Seasoner i {seriesDetails.name}</h2>
				{seasons.length > 0 &&
					seasons.map((season) => (
						<div key={season.id}>
							<h3>Sæson navn: {season.name}</h3>
							<div className="flex items-center pl-3">
								<p className=" text-subtleDark">
									Sæson nummer: {season.season_number}
								</p>
								<LuDot className=" text-subtleDark" />
								<p className=" text-subtleDark">
									Episoder: {season.episode_count}
								</p>
							</div>
						</div>
					))}
			</section>
		</>
	);
};
