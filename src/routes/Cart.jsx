import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import gpay from "../assets/google-pay-svgrepo-com.svg";
import paypal from "../assets/paypal-logo-svgrepo-com.svg";
import stripe from "../assets/stripe-svgrepo-com.svg";
import { cartContext } from "../components/Context";
import { itemContext } from "../components/Context";
import EmptyCart from "../components/EmptyCart";
const Cart = () => {
	const [cart, setCart] = useContext(cartContext);

	useEffect(() => {
		const parseCart = JSON.parse(localStorage.getItem("cart")) || [];
		const availableItems = parseCart.filter((item) => item.isAvailable);
		availableItems && setCart(availableItems);
	}, [setCart]);

	let subTotal = 0;
	for (const element of cart) {
		subTotal += element.price * element.quantity;
	}
	const tax = subTotal * 0.05;
	const handlingFee = 42;
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

	return cart.length === 0 ? (
		<EmptyCart />
	) : (
		<div className="mx-30  flex text-xl font-nanum-myeongjo font-light ">
			<div className="  w-2/3 p-5">
				<div className="flex w-full mb-5 sticky top-16 z-50">
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
										className={"h-15 w-15 bg-cover bg-center rounded-sm "}
										style={{
											backgroundImage: `url(${item.imageLink})`,
										}}
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
								<div className="flex gap-3 justify-around w-4/5 pr-3">
									<div>{item.price}</div>
									<div>{item.price * item.quantity}</div>
								</div>
								<button
									type="button"
									onClick={() => handleCartRemove(item)}
									className="text-3xl flex justify-center items-center  hover:bg-[#F72E41] hover:text-white hover:cursor-pointer w-1/5 h-21 rounded-r-sm duration-200 "
								>
									<i className="ri-delete-bin-line" />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-1/3 h-fit mt-17 mx-20 p-5 border-2 border-zinc-100 sticky top-40 rounded-sm flex flex-col gap-5">
				<div className="text-3xl  ">Order Summery</div>
				<div className="flex flex-col gap-3 ">
					<div className="flex justify-between  text-xl">
						<h1 className=" ">Subtotal</h1>
						<strong>₹ {subTotal?.toFixed(2)}</strong>
					</div>
					<div className="flex justify-between  text-xl">
						<h1 className=" ">Estimated tax</h1>
						<strong>₹ {tax?.toFixed(2)}</strong>
					</div>
					<div className="flex justify-between text-xl">
						<h1 className=" ">Delivery & handling fees</h1>
						<strong>₹ {subTotal > 0 ? handlingFee?.toFixed(2) : 0}</strong>
					</div>
					<div className="flex justify-between border-t-2 border-zinc-100 pt-1">
						<strong>Total</strong>
						<strong>
							₹ {(subTotal > 0 ? tax + subTotal + handlingFee : 0).toFixed(2)}
						</strong>
					</div>
				</div>
				<button
					className="text-center w-full px-20 py-3 rounded-sm bg-[#F72E41] text-white hover:bg-red-600"
					type="button"
				>
					Check Out <i className="ri-arrow-right-long-line" />
				</button>
				<div>
					<p className="font-light text-sm text-center">
						Available payment options
					</p>
					<div className="flex items-center scale-150 justify-center">
						<img
							src={gpay}
							alt="Google Pay"
							className="h-10 w-16 object-contain scale-170 mx-5 "
						/>
						<img
							src={paypal}
							alt="PayPal"
							className="h-10 w-16 object-contain scale-150"
						/>
						<img
							src={stripe}
							alt="Stripe"
							className="h-10 w-16 object-contain scale-80"
						/>
					</div>
				</div>{" "}
			</div>
		</div>
	);
};

export default Cart;
