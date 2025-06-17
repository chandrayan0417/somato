import Navbar from "./components/Navbar";
import Roueter from "./components/Router";
const App = () => {
	return (
		<div className="w-full h-full overflow-auto scrollbar-none">
			<Navbar />
			<Roueter />
		</div>
	);
};

export default App;
