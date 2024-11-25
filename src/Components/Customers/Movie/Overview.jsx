export const Overview = ({ movieDetails }) => {
	return (
		<section className="pb-7 border-b-2 border-title">
			<div>
				<h2 className="uppercase text-title tracking-wider">beskrivelse</h2>
			</div>
			<p>{movieDetails.overview}</p>
		</section>
	);
};
