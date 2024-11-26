import { useAuth } from "../../Providers/AuthProvider";

export const LogoutButton = () => {
	const { logout } = useAuth();
	return <button onClick={logout}>Log ud</button>;
};
