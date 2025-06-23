import { Route, Routes } from "react-router-dom";

import Cart from "../routes/Cart";
import Home from "../routes/Home";
import Listitem from "../routes/Listitem";
import Menu from "../routes/Menu";
import PageNotFound from "./PageNotFound";

const Roueter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/listitem" element={<Listitem />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default Roueter;
