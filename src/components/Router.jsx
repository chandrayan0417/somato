import { Route, Routes } from "react-router-dom";

import Booking from "../routes/Booking";
import Cart from "../routes/Cart";
import Home from "../routes/Home";
import Listitem from "../routes/Listitem";
import Menu from "../routes/Menu";

const Roueter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/menu" element={<Menu />}></Route>
			<Route path="/booking" element={<Booking />}></Route>
			<Route path="/listitem" element={<Listitem />}></Route>
			<Route path="/cart" element={<Cart />}></Route>
		</Routes>
	);
};

export default Roueter;
