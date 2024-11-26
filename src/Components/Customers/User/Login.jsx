import { useAuth } from "../../../Providers/AuthProvider";
import { LoggedIn } from "./logedin/LoggedIn";
import { NotLoggedIn } from "./NotLoggedIn";

export const Login = () => {
	const { loginData } = useAuth();

	return (
		<>
			{!loginData ? (
				// Not logged in
				<NotLoggedIn />
			) : (
				// logged in
				<LoggedIn />
			)}
		</>
	);
};
