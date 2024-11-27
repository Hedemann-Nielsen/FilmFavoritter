import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout.jsx";

import { HomePage } from "../../Pages/HomePage.jsx";
import { MovieGenrePage } from "../../Pages/MovieGenrePage.jsx";
import { SeriesGenrePage } from "../../Pages/SeriesGenrePage.jsx";
import { MoviePage } from "../../Pages/MoviePage.jsx";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { Approved } from "../Customers/User/Approved.jsx";
import { SeriesPage } from "../../Pages/SeriesPage.jsx";

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
				element: <MovieGenrePage />,
			},
			{
				path: "/seriesgenre/:genre_id",
				element: <SeriesGenrePage />,
			},
			{
				path: "/movie/:movie_id",
				element: <MoviePage />,
			},
			{
				path: "/series/:series_id",
				element: <SeriesPage />,
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
