import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout.jsx";

import { HomePage } from "../../Pages/HomePage.jsx";
import { GenrePage } from "../../Pages/GenrePage.jsx";
import { MoviePage } from "../../Pages/MoviePage.jsx";
import { UserPage } from "../../Pages/UserPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPage.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/home",
				element: <HomePage />,
			},
			{
				path: "/genre",
				element: <GenrePage />,
			},
			{
				path: "/movie/:id",
				element: <MoviePage />,
			},
			{
				path: "/user/:user-name",
				element: <UserPage />,
			},
			{
				path: "/fallback",
				element: <FallbackPage />,
			},
		],
	},
]);
