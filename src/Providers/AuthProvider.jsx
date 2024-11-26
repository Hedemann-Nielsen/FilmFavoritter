import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// API base URL og nøgler
const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [sessionId, setSessionId] = useState(null);
	const [loginData, setLoginData] = useState(false);

	// Step 1: Create a request token
	const createRequestToken = async () => {
		try {
			const response = await axios.get(`${API_URL}/authentication/token/new`, {
				params: { api_key: API_KEY },
			});
			return response.data.request_token;
		} catch (error) {
			console.error("Error creating request token:", error);
			throw new Error("Failed to create request token.");
		}
	};

	// Step 2: Redirect user for authentication
	const authenticateUser = async () => {
		try {
			const requestToken = await createRequestToken();
			const redirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}/approved`;
			window.location.href = redirectUrl; // Omdirigerer brugeren
		} catch (error) {
			console.error("Error redirecting user for authentication:", error);
		}
	};

	// Step 3: Create a session ID
	const createSessionId = async (requestToken) => {
		try {
			const response = await axios.post(
				`${API_URL}/authentication/session/new`,
				{ request_token: requestToken },
				{ params: { api_key: API_KEY } }
			);
			const { session_id } = response.data;
			setSessionId(session_id);
			setLoginData(true);
		} catch (error) {
			console.error("Error creating session ID:", error);
		}
	};

	// Logout function
	const logout = () => {
		setSessionId(null);
		setLoginData(false);
	};

	return (
		<AuthContext.Provider
			value={{
				loginData,
				sessionId,
				authenticateUser,
				createSessionId,
				logout,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

// Custom hook to use AuthContext
export const useAuth = () => {
	return useContext(AuthContext);
};
