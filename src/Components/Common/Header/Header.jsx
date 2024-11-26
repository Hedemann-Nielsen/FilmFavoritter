import { Link, NavLink } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../../../Providers/AuthProvider";
export const Header = () => {
	const { loginData } = useAuth();
	return (
		<header className="bg-BaggroundPrim flex justify-between items-center px-10 py-9">
			<Link to="/">
				<h1 className="text-title text-3xl">Film favoritter</h1>
			</Link>
			<nav className="text-title">
				<ul className="flex space-x-4 align-middle justify-center">
					<li>
						<select name="Genre" className="bg-BaggroundPrim uppercase">
							<option disabled>Genre</option>
							<option value="Drama">Drama</option>
							<option value="Thriller">Thriller</option>
						</select>
					</li>
					<li>
						<NavLink className="uppercase">film</NavLink>
					</li>
					<li>
						<NavLink className="uppercase">serier</NavLink>
					</li>
				</ul>
			</nav>
			<div className="flex  space-x-3">
				<button className="flex space-x-2">
					<FaUser className=" text-BaggroundPrim" />
					{/* changes text if logged in */}
					<Link to="/login">
						<p className="text-BaggroundPrim">
							{loginData ? "Log ud" : "Login "}
						</p>
					</Link>
				</button>
				<div className="flex w-[144px] bg-[#D9D9D9] rounded-lg  space-x-2 align-middle items-center justify-center text-[#1E1B33]">
					<FaSearch />
					<p className="text-BaggroundPrim">søg</p>
				</div>
			</div>
		</header>
	);
};
