import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { cartContext, itemContext } from "../components/Context";
const Menu = () => {
	const [items, setItems] = useContext(itemContext);
	const [cart, setCart] = useContext(cartContext);

	const addToCartHandler = (id) => {
		const currentItem = items.find((item) => item.id === id);
		const alreadyInCart = cart.find((cartItem) => cartItem.id === id);
		if (alreadyInCart) {
			toast.warning(`${currentItem.title} is already in the cart`);
			return;
		}
		const updateCart = [...cart, currentItem];
		setCart(updateCart);
		localStorage.setItem("cart", JSON.stringify(updateCart));
		toast.success(`${currentItem.title} added to cart`);
	};
	return (
		<div className="flex gap-5 flex-wrap  px-30">
			{items?.map((item) => {
				const hasImage = !!item.imageLink;
				const fallbackImage =
					"https://i.pinimg.com/736x/c4/c7/69/c4c7697549a8c6a1c3f26a743caa75e4.jpg";

				return (
					<div
						key={item.id}
						className="h-108 w-89 border border-gray-100 hover:shadow-lg rounded-xl transition-shadow duration-200 cursor-default font-open-sans"
					>
						<div
							className={`h-[45%] bg-cover bg-center rounded-t-xl flex justify-end items-start filter ${item.isAvailable ? "saturate-100" : "saturate-0"}`}
							style={{
								backgroundImage: `url(${hasImage ? item.imageLink : fallbackImage})`,
							}}
						/>
						<div className="h-[55%] w-full rounded-b-xl p-2 bg-gray-50 flex flex-col">
							<div className="flex justify-between items-center  pb-1">
								<div className="text-3xl">₹{item.price}</div>
								<span
									className={`text-lg scale-75 py-1 px-3 rounded-md text-white font-bold ${
										item.choice === "Veg" ? "bg-green-600" : "bg-red-600"
									}`}
								>
									{item.choice}
								</span>
							</div>
							<h1 className="text-2xl">{item.title}</h1>
							<p className="font-light">{item.description}</p>
							<div className="flex justify-between mt-auto ">
								<button
									className={` w-[47%] py-2 bg-[#F72E41] text-white   hover:bg-red-600 rounded-lg cursor-pointer font-semibold ${item.isAvailable ? "" : "hidden"}`}
									type="button"
								>
									Order Now
								</button>
								<button
									onClick={() => addToCartHandler(item.id)}
									className={`w-[47%] py-2  text-white bg-orange-500 hover:bg-yellow-500 rounded-lg cursor-pointer font-semibold ${item.isAvailable ? "" : "hidden"}`}
									type="button"
								>
									Add To Cart
								</button>
								<span
									className={`w-full py-2 text-center text-white bg-red-500 rounded-lg font-semibold ${item.isAvailable ? "hidden" : ""}`}
								>
									Not Available
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Menu;
