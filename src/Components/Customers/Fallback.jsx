import { Link } from "react-router-dom";

export const Fallback = () => {
	return (
		<div>
			<div>
				<h1>404</h1>
			</div>
			<div>
				<h2>Nothing to see here</h2>
				<p>
					Page you are trying to open does not exist. You may have mistyped the
					address, or the page has been moved to another URL.
					<p>If you think this is an error contact support.</p>
				</p>

				<Link>Take me to home page</Link>
			</div>
		</div>
	);
};
