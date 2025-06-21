import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { cartContext } from "../components/Context";
const Cart = () => {
	const [cart, setCart] = useContext(cartContext);
	useEffect(() => {
		const parseCart = JSON.parse(localStorage.getItem("cart"));
		parseCart && setCart(parseCart);
	}, [setCart]);
	function getItem(item) {
		console.log(item);
	}

	const handleAdd = (item) => {
		item.quantity >= 10
			? null
			: (() => {
					const updatedCart = cart.map((cartItem) =>
						cartItem.id === item.id
							? { ...cartItem, quantity: cartItem.quantity + 1 }
							: cartItem,
					);
					setCart(updatedCart);
					localStorage.setItem("cart", JSON.stringify(updatedCart));
				})();
	};

	const handleRemove = (item) => {
		item.quantity <= 1
			? null
			: (() => {
					const updatedCart = cart.map((cartItem) =>
						cartItem.id === item.id
							? { ...cartItem, quantity: cartItem.quantity - 1 }
							: cartItem,
					);
					setCart(updatedCart);
					localStorage.setItem("cart", JSON.stringify(updatedCart));
				})();
	};

	const handleCartRemove = (item) => {
		const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
		setCart(updatedCart);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		toast.error(`${item.title} removed from cart`);
	};

	return (
		<div className="mx-30  flex text-xl font-nanum-myeongjo font-light">
			<div className="  w-2/3 p-5">
				<div className="flex w-full mb-5">
					<div className="flex w-3/5 justify-between px-5">
						<h1>Item Details </h1>
						<h1>Quantity</h1>
					</div>
					<div className="flex w-2/5 justify-around pr-20">
						<h1>Price</h1>
						<h1>Total</h1>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					{cart.map((item) => (
						<div
							key={item.id}
							className="border-2 rounded-sm border-zinc-100  flex items-center  hover:scale-101 hover:shadow-xs duration-200 cursor-default"
						>
							<div className="flex  w-3/5 justify-between py-3 pl-3">
								<div className="flex gap-3">
									<div
										className="h-15 w-15 bg-cover bg-center rounded-sm"
										style={{ backgroundImage: `url(${item.imageLink})` }}
									/>
									<div className="flex flex-col gap-2 ">
										<h1>{item.title}</h1>
										<div
											className={`text-xs py-1 px-2 rounded-md text-white font-bold w-fit ${
												item.choice === "Veg" ? "bg-green-600" : "bg-red-600"
											}`}
										>
											{item.choice}
										</div>
									</div>
								</div>
								<div className="flex gap-5 justify-center items-center">
									<button
										onClick={() => handleRemove(item)}
										type="button"
										className={`${item.quantity <= 1 ? "cursor-not-allowed" : "cursor-pointer "}`}
									>
										<i className="ri-subtract-line" />
									</button>
									<div className="w-10 h-10 border-2 rounded-xs border-zinc-100  flex justify-center items-center ">
										<span>{String(item.quantity).padStart(2, "0")}</span>
									</div>
									<button
										onClick={() => handleAdd(item)}
										type="button"
										className={`${item.quantity >= 10 ? "cursor-not-allowed" : "cursor-pointer "}`}
									>
										<i className="ri-add-line" />
									</button>
								</div>
							</div>
							<div className="w-2/5 flex justify-between items-center">
								<div className="flex gap-3 justify-around w-4/5">
									<div>{item.price}</div>
									<div>{item.price * item.quantity}</div>
								</div>
								<div
									onClick={() => handleCartRemove(item)}
									className="text-3xl flex justify-center items-center  hover:bg-[#F72E41] hover:text-white hover:cursor-pointer w-1/5 h-21 rounded-r-sm duration-200 "
								>
									<i className="ri-delete-bin-line" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className=" w-1/3 h-full"></div>
		</div>
	);
};

export default Cart;
