import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	// Default type is  'movies'
	const [contentType, setContentType] = useState("movies");

	return (
		<AppContext.Provider value={{ contentType, setContentType }}>
			{children}
		</AppContext.Provider>
	);
};
