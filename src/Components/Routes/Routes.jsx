import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout.jsx";

import { HomePage } from "../../Pages/HomePage.jsx";
import { GenrePage } from "../../Pages/GenrePage.jsx";
import { MoviePage } from "../../Pages/MoviePage.jsx";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { Approved } from "../Customers/User/Approved.jsx";

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
				path: "/genre/:genre_id",
				element: <GenrePage />,
			},
			{
				path: "/movie/:movie_id",
				element: <MoviePage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/approved",
				element: <Approved />,
			},

			{
				path: "/fallback",
				element: <FallbackPage />,
			},
		],
	},
]);
