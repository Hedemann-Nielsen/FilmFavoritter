import { Outlet } from "react-router-dom";
import { Footer } from "../Common/Footer.jsx";
import { Header } from "../Common/Header/Header.jsx";
import { MobilHeader } from "../Common/Header/MobilHeader.jsx";
import { useResizeHandler } from "../Common/ResizeHandler/ResizeHandler.jsx";
import { ScrollToTop } from "../Common/ScrollToTop/ScrollToTop.jsx";

export const Layout = () => {
	const { width } = useResizeHandler();

	return (
		<>
			{/* Sikre at siden scroller op til toppen på alle sider */}
			<ScrollToTop />
			{/* tjekker om viduetsstørrelse er under 768px, hvis den er det vises mobil	header, hvis den er over vises desktop header */}
			{width <= 768 ? <MobilHeader /> : <Header />}
			<main className="bg-gradient-to-b from-BaggroundPrim to-BaggroundSec  px-10">
				<Outlet />
			</main>

			<Footer />
		</>
	);
};
