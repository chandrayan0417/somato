import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Roueter from "./components/Router";
const App = () => {
	return (
		<div className="w-full h-full overflow-y-auto overflow-x-hidden md:overflow-x-auto scrollbar-none">
			<Navbar />
			<Roueter />
			<ToastContainer position="bottom-right" closeOnClick />
		</div>
	);
};

export default App;
