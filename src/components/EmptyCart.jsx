import { Link } from "react-router-dom";
const EmptyCart = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center flex-col gap-3">
			<i className="ri-close-circle-fill text-9xl text-gray-400" />
			<h1 className="text-2xl text-gray-400">
				There are no items in your cart.
			</h1>
			<Link
				className="py-2 px-7 rounded-sm transition delay-75 ease-in-out duration-200 bg-[#F72E41] text-white   hover:bg-red-600"
				to="/menu"
			>
				View Menu
			</Link>
		</div>
	);
};

export default EmptyCart;
