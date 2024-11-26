import { useEffect, useState } from "react";
import { useUserDetails } from "../../../Hooks/User/UserDetails";
import { UserDetails } from "./UserDetails";
import { FavoritMovieList } from "./FavoritMovieList";
import { FavoritSeriesList } from "./FavoritSeriesList.jsx";

export const LoggedIn = () => {
	const { userData, loadingUserDetails, errorUserDetails } = useUserDetails();
	const [accountId, setAccountId] = useState(null);

	useEffect(() => {
		if (userData && userData.id) {
			setAccountId(userData.id);
		}
	}, [userData]);

	if (loadingUserDetails || !userData) {
		return <p>Henter brugerdata...</p>;
	}

	if (errorUserDetails) {
		return <p>Error loading user details: {errorUserDetails}</p>;
	}

	return (
		<>
			<UserDetails userData={userData} />

			{accountId && <FavoritMovieList accountId={accountId} />}
			{accountId && <FavoritSeriesList accountId={accountId} />}
		</>
	);
};
