import { Outlet } from "react-router-dom";
import { Footer } from "../Common/Footer.jsx";
import { Header } from "../Common/Header/Header.jsx";
import { MobilHeader } from "../Common/Header/MobilHeader.jsx";
import { useResizeHandler } from "../Common/ResizeHandler.jsx";

export const Layout = () => {
	const { width } = useResizeHandler();

	return (
		<>
			{/* checks if window size is below 768px*/}
			{width <= 768 ? <MobilHeader /> : <Header />}
			<main className="bg-gradient-to-b from-BaggroundPrim to-BaggroundSec  px-10">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
