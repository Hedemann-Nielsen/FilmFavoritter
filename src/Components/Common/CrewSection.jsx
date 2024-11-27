import React from "react";

export const CrewSection = ({ producers, directors, writers }) => {
	return (
		<section className="py-14">
			<h2 className="text-xl text-subtleDark">Directors</h2>
			{directors && (
				<ul className="flex">
					{directors &&
						directors?.map((person, index) => (
							<li key={person.id}>
								<p className="text-subtleDark">
									{person.name} {index < directors.length - 1 && ","}
								</p>
							</li>
						))}
				</ul>
			)}

			<h2 className="text-xl mt-4 text-subtleDark ">Producers</h2>
			{producers && (
				<ul className="flex space-x-1">
					{producers?.map((person, index) => (
						<li key={person.id}>
							<p className="text-subtleDark">
								{person.name}
								{index < producers.length - 1 && ","}
							</p>
						</li>
					))}
				</ul>
			)}

			<h2 className="text-xl mt-4 text-subtleDark">Writers</h2>
			{writers && (
				<ul className="flex space-x-1">
					{writers?.map((person, index) => (
						<li key={person.id}>
							<p className="text-subtleDark">
								{person.name}
								{index < writers.length - 1 && ","}
							</p>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};
