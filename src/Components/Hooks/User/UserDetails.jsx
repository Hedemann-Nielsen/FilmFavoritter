import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Providers/AuthProvider";

export const useUserDetails = () => {
	const { sessionId } = useAuth();
	const [userData, setUserData] = useState(null);
	const [loadingUserDetails, setLoadingUserDetails] = useState(true);
	const [errorUserDetails, setErrorUserDetails] = useState(null);

	useEffect(() => {
		const fetchUserDetails = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_TMDB_API_URL}/account`,
					{
						headers: {
							accept: "application/json",
							Authorization: `Bearer ${
								import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
							}`,
						},
					}
				);

				setUserData(response.data);
			} catch (error) {
				setErrorUserDetails(error.message);
			} finally {
				setLoadingUserDetails(false);
			}
		};

		fetchUserDetails();
	}, [sessionId]);

	return { userData, loadingUserDetails, errorUserDetails };
};
