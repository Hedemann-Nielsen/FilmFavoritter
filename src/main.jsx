import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.sass";
import App from "./App.jsx";
import { AuthProvider } from "./Providers/AuthProvider.jsx";
import { AppProvider } from "./Providers/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<AppProvider>
				<App />
			</AppProvider>
		</AuthProvider>
	</React.StrictMode>
);
