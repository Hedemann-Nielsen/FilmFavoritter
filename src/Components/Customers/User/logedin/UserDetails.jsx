import { LogoutButton } from "../../../Common/Logout";

export const UserDetails = ({ userData }) => {
	return (
		<section className=" mt-4  flex flex-col justify-center items-center rounded-lg w-full h-fit bg-BaggroundPrim px-11 py-9">
			<h1>Du er logget ind som</h1>
			<h2 className="mb-3">{userData.username}</h2>
			<LogoutButton />
		</section>
	);
};
