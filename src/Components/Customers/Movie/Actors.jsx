export const Actors = ({ actingCast }) => {
	return (
		<section className="my-7">
			<h2 className="uppercase text-title tracking-wider mb-4">Medvirkende</h2>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 w-full">
				{/* Render all actors */}
				{actingCast.map((actor, index) => (
					<div
						key={index}
						className="mx-3 flex flex-col items-center justify-between align-middle mb-5 min-w-28">
						<img
							src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
							alt={actor.name}
							className="w-28 h-28 rounded-full object-cover"
						/>
						<div className="text-center mt-2">
							<h3 className="text-base text-title">{actor.name}</h3>
							<p className="text-xs">{actor.character}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
