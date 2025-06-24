import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import Context from "./components/Context.jsx";

createRoot(document.getElementById("root")).render(
	<HashRouter>
		<Context>
			<App />
		</Context>
	</HashRouter>,
);
