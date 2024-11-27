import { Link } from "react-router-dom";
import { useSeriesFromGenreList } from "../../../Hooks/Series/SeriesFromGenreList";
import { SeriesCard } from "../../../Common/SeriesCard";

export const SeriesGenreSection = ({ genreId, title }) => {
	// Use movie hook ONLY when genreId is defined
	const { singleGenreList, singleGenreTotal, loading, error } =
		useSeriesFromGenreList(genreId || null);

	if (loading) return <p>Loading series...</p>;
	if (error) return <p>Error loading series: {error}</p>;

	return (
		<section>
			<div className="flex justify-between pb-2">
				<div className="flex items-baseline mb-3">
					{/* title for genre */}
					<h1>{title}</h1>
					{/* total numer of series */}
					<p className="text-subtleDark ml-3">
						{singleGenreTotal?.total_results || 0} serier
					</p>
				</div>
				{/* button to more series in genre */}
				<button>
					<Link to={`/seriesgenre/${genreId}`}>Vis flere</Link>
				</button>
			</div>
			<SeriesCard singleGenreList={singleGenreList} />
		</section>
	);
};
