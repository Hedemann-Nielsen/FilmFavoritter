import { useAuth } from "../../../Providers/AuthProvider";

export const NotLoggedIn = () => {
	const { authenticateUser } = useAuth();

	return (
		<section className=" mt-4 flex flex-col justify-center items-center rounded-lg text-center w-full h-fit bg-BaggroundPrim px-11 py-9">
			<h1>Login</h1>
			<p className=" w-96">
				Log ind via TMDB side herunder for at integrere din konto med
				<span className="font-bold"> Film favoritter.</span> Dette giver dig
				mulighed for at bedømme film og vedligeholde dine favoritlister.
			</p>
			<button onClick={authenticateUser} className="w-52 mt-5">
				log ind
			</button>
		</section>
	);
};
