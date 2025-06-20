import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import Context from "./components/Context.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter basename="/somato">
		<Context>
			<App />
		</Context>
	</BrowserRouter>,
);
