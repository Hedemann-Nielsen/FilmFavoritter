import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const MobilHeader = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<header className="bg-BaggroundPrim flex justify-between items-center px-10 py-9">
			<h1 className="text-2xl text-title uppercase">Film favoritter</h1>

			<span>
				{/* brugermenu fra react npm pakke */}

				<Hamburger
					toggled={isOpen}
					toggle={setOpen}
					rounded
					direction="right"
					color="#fff"
				/>
				<section
					className={`bg-title h-screen absolute top-0 right-0 w-52 transition-transform duration-300 ${
						isOpen ? "translate-x-0" : "translate-x-full"
					}`}>
					<Hamburger
						toggled={isOpen}
						toggle={setOpen}
						rounded
						direction="right"
						color="#1E1B33"
					/>
					<ul>
						<li>
							<Link>menu 1</Link>
						</li>
						<li>
							<Link>menu 2</Link>
						</li>
						<li>
							<Link>menu 3</Link>
						</li>
					</ul>
				</section>
			</span>
		</header>
	);
};
