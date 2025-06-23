import { nanoid } from "nanoid";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const itemContext = createContext(null);
export const cartContext = createContext(null);
export const bookingContext = createContext(null);
const defaultItems = [
	{
		id: nanoid(),
		title: "Paneer Butter Masala",
		description:
			"Paneer Butter Masala is a rich and creamy North Indian curry made with paneer cubes simmered in a buttery tomato-based sauce.",
		imageLink:
			"https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg",
		price: 250,
		quantity: 1,
		choice: "Veg",
		isAvailable: true,
	},
	{
		id: nanoid(),
		title: "Chicken Biryani",
		description:
			"Chicken Biryani is a fragrant and flavorful rice dish made with marinated chicken, aromatic spices, and layered basmati rice, cooked to perfection.",
		imageLink:
			"https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 320,
		quantity: 1,
		choice: "Non Veg",
		isAvailable: true,
	},
	{
		id: nanoid(),
		title: "Chole Bhature",
		description:
			"Chole Bhature is a popular North Indian dish consisting of spicy chickpeas served with deep-fried fluffy bread, perfect for a hearty meal.",
		imageLink:
			"https://i.pinimg.com/736x/65/cc/2a/65cc2ab54262b157d0f309e832a21dca.jpg",
		price: 180,
		quantity: 1,
		choice: "Veg",
		isAvailable: true,
	},
	{
		title: "Butter Chicken",
		description:
			"Butter Chicken is a classic Indian dish made with tender chicken pieces cooked in a rich and creamy tomato-based gravy.",
		imageLink:
			"https://i.pinimg.com/736x/22/83/3e/22833ee1780f63d3b6f1a0b9ff67af1c.jpg",
		price: "270",
		choice: "Non Veg",
		id: nanoid(),
		quantity: 1,
		isAvailable: true,
	},
	{
		title: "Masala Dosa",
		description:
			"Masala Dosa is a popular South Indian dish featuring a crispy rice crepe filled with spiced mashed potatoes, served with chutneys and sambar.",
		imageLink:
			"https://i.pinimg.com/736x/9b/52/22/9b5222f6b9af5bab30bf2683193008f7.jpg",
		price: "180",
		choice: "Veg",
		id: nanoid(),
		quantity: 1,
		isAvailable: true,
	},
	{
		title: "Fish Curry",
		description:
			"Fish Curry is a flavorful coastal dish made with fresh fish simmered in a spicy and tangy coconut or tomato-based gravy.",
		imageLink:
			"https://i.pinimg.com/736x/a5/3f/6a/a53f6a5a686b9c3ee181e9b7063e5cee.jpg",
		price: "250",
		choice: "Non Veg",
		id: nanoid(),
		quantity: 1,
		isAvailable: true,
	},
	{
		title: "Rajma Chawal",
		description:
			"Rajma Chawal is a comforting North Indian meal made with red kidney beans cooked in a spiced tomato gravy served over steamed rice.",
		imageLink:
			"https://i.pinimg.com/736x/56/91/c9/5691c9c263a0ac60aa7db154b7c5ead8.jpg",
		price: "280",
		choice: "Veg",
		id: nanoid(),
		quantity: 1,
		isAvailable: true,
	},
	{
		title: "Mutton Rogan Josh",
		description:
			"Mutton Rogan Josh is a flavorful Kashmiri curry made with tender mutton slow-cooked in a blend of aromatic spices and yogurt.",
		imageLink:
			"https://i.pinimg.com/736x/5d/51/f2/5d51f2ea2e122b6a7dc67004421d295e.jpg",
		price: "350",
		choice: "Non Veg",
		id: nanoid(),
		quantity: 1,
		isAvailable: false,
	},
	{
		title: "Veg Pulao",
		description:
			"Veg Pulao is a fragrant and colorful rice dish cooked with mixed vegetables, aromatic spices, and garnished with fresh coriander.",
		imageLink:
			"https://i.pinimg.com/736x/f7/c4/40/f7c440616f8acba19dc237a6c32565df.jpg",
		price: "280",
		choice: "Veg",
		id: nanoid(),
		quantity: 1,
		isAvailable: true,
	},
];
const Context = (props) => {
	const [cart, setCart] = useState([]);
	const [items, setItems] = useState([]);
	const [booking, setBooking] = useState([]);
	useEffect(() => {
		try {
			const storedItems = localStorage.getItem("itemList");
			if (storedItems) {
				setItems(JSON.parse(storedItems));
			} else {
				setItems(defaultItems);
				localStorage.setItem("itemList", JSON.stringify(defaultItems));
			}
		} catch (error) {
			toast.warn("localStorage setItems error");
		}
	}, []);

	return (
		<bookingContext.Provider value={[booking, setBooking]}>
			<itemContext.Provider value={[items, setItems]}>
				<cartContext.Provider value={[cart, setCart]}>
					{props.children}
				</cartContext.Provider>
			</itemContext.Provider>
		</bookingContext.Provider>
	);
};

export default Context;
