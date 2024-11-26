import { useEffect } from "react";
import { useAuth } from "../../../Providers/AuthProvider";
import { useSearchParams, useNavigate } from "react-router-dom";

export const Approved = () => {
	const { createSessionId } = useAuth();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		const requestToken = searchParams.get("request_token");
		const approved = searchParams.get("approved");

		if (approved === "true" && requestToken) {
			createSessionId(requestToken).then(() => {
				navigate("/login"); // Omdiriger til dashboard
			});
		} else {
			console.error("User did not approve or missing request token.");
		}
	}, [searchParams, createSessionId, navigate]);

	return <p>Login er under behandling...</p>;
};
