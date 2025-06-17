import { nanoid } from "nanoid";
import { createContext, useState } from "react";
export const itemContext = createContext(null);

const Context = (props) => {
	const [items, setItems] = useState([
		{
			id: nanoid(),
			title: "Paneer Butter Masala",
			description:
				"Paneer Butter Masala is a rich and creamy North Indian curry made with paneer cubes simmered in a buttery tomato-based sauce.",
			imageLink: "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg",
			price: 250,
			choice: "Veg",
		},
		{
			id: nanoid(),
			title: "Chicken Biryani",
			description:
				"Chicken Biryani is a fragrant and flavorful rice dish made with marinated chicken, aromatic spices, and layered basmati rice, cooked to perfection.",
			imageLink:
				"https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: 320,
			choice: "Non Veg",
		},
		{
			id: nanoid(),
			title: "Chole Bhature",
			description:
				"Chole Bhature is a popular North Indian dish consisting of spicy chickpeas served with deep-fried fluffy bread, perfect for a hearty meal.",
			imageLink: "https://i.pinimg.com/736x/65/cc/2a/65cc2ab54262b157d0f309e832a21dca.jpg",
			price: 180,
			choice: "Veg",
		},
		{
			id: nanoid(),
			title: "Paneer Butter Masala",
			description:
				"Paneer Butter Masala is a rich and creamy North Indian curry made with paneer cubes simmered in a buttery tomato-based sauce.",
			imageLink: "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg",
			price: 250,
			choice: "Veg",
		},
		{
			id: nanoid(),
			title: "Chicken Biryani",
			description:
				"Chicken Biryani is a fragrant and flavorful rice dish made with marinated chicken, aromatic spices, and layered basmati rice, cooked to perfection.",
			imageLink:
				"https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: 320,
			choice: "Non Veg",
		},
		{
			id: nanoid(),
			title: "Chole Bhature",
			description:
				"Chole Bhature is a popular North Indian dish consisting of spicy chickpeas served with deep-fried fluffy bread, perfect for a hearty meal.",
			imageLink: "https://i.pinimg.com/736x/65/cc/2a/65cc2ab54262b157d0f309e832a21dca.jpg",
			price: 180,
			choice: "Veg",
		},
		{
			id: nanoid(),
			title: "Paneer Butter Masala",
			description:
				"Paneer Butter Masala is a rich and creamy North Indian curry made with paneer cubes simmered in a buttery tomato-based sauce.",
			imageLink: "https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg",
			price: 250,
			choice: "Veg",
		},
		{
			id: nanoid(),
			title: "Chicken Biryani",
			description:
				"Chicken Biryani is a fragrant and flavorful rice dish made with marinated chicken, aromatic spices, and layered basmati rice, cooked to perfection.",
			imageLink:
				"https://images.unsplash.com/photo-1642821373181-696a54913e93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			price: 320,
			choice: "Non Veg",
		},
		{
			id: nanoid(),
			title: "Chole Bhature",
			description:
				"Chole Bhature is a popular North Indian dish consisting of spicy chickpeas served with deep-fried fluffy bread, perfect for a hearty meal.",
			imageLink: "https://i.pinimg.com/736x/65/cc/2a/65cc2ab54262b157d0f309e832a21dca.jpg",
			price: 180,
			choice: "Veg",
		},
	]);
	return <itemContext.Provider value={[items, setItems]}>{props.children}</itemContext.Provider>;
};

export default Context;
