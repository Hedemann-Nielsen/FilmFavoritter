import logo from "../../assets/film-favoritter.logo.png";

export const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-400 py-6">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				<div className="flex items-center">
					<img src={logo} alt="logo" className="w-12 h-12 mr-3 rounded-full" />
					<span className="text-lg font-bold text-white">Film favoritter</span>
				</div>
				<div className="flex space-x-6 mt-4 md:mt-0 ">
					<a href="#" className="hover:text-blue-500 transition duration-300">
						Home
					</a>
					<a href="#" className="hover:text-blue-500 transition duration-300">
						About
					</a>
					<a href="#" className="hover:text-blue-500 transition duration-300">
						Contact
					</a>
					<a href="#" className="hover:text-blue-500 transition duration-300">
						Privacy Policy
					</a>
				</div>
			</div>
			<div className="mt-6 text-center text-xs">
				&copy; 2024 MovieVerse. All rights reserved.
			</div>
		</footer>
	);
};
