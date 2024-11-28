import { useState, useEffect } from "react";
import "./styles.progressIndicator.sass";

export const ProgressIndicator = ({ index }) => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		// Convert index (0-10) to percentage (0-100)
		const percentage = (index / 10) * 100;
		setPercentage(percentage);
	}, [index]);

	const getIndicatorStyle = () => {
		return {
			background: `conic-gradient(
          red 0%,
          yellow ${percentage / 2}%,
          green ${percentage}%,
          #EAEAEA00 ${percentage}%
        ) content-box`,
		};
	};

	return (
		<div className="index-container">
			<div className="indicator" style={getIndicatorStyle()}></div>
			<p className="index-text hidden xl:block">{percentage.toFixed(0)}%</p>
		</div>
	);
};
