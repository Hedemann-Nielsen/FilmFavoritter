import React from "react";

const CrewList = ({ title, crewMembers }) => {
	if (!crewMembers) return null;

	return (
		<>
			<h2 className="text-xl mt-4 text-subtleDark">{title}</h2>
			<ul className="flex space-x-1">
				{crewMembers.map((person, index) => (
					<li key={person.id}>
						<p className="text-subtleDark">
							{person.name}
							{index < crewMembers.length - 1 && ","}
						</p>
					</li>
				))}
			</ul>
		</>
	);
};

export const CrewSection = ({ producers, directors, writers }) => {
	return (
		<section className="py-14">
			<CrewList title="Directors" crewMembers={directors} />
			<CrewList title="Producers" crewMembers={producers} />
			<CrewList title="Writers" crewMembers={writers} />
		</section>
	);
};
