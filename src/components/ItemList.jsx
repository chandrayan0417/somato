import { useContext } from "react";
import { toast } from "react-toastify";
import { itemContext } from "./Context";

const ItemList = () => {
	const [items, setItems] = useContext(itemContext);

	const deleteHandler = (id) => {
		const updatedItems = items.filter((item) => item.id !== id);
		const currentItem = items.find((item) => item.id === id);
		setItems(updatedItems);
		localStorage.setItem("itemList", JSON.stringify(updatedItems));
		toast.error(
			<div>
				{currentItem.title}
				<button
					onClick={() => undoHandler(currentItem)}
					type="button"
					className="ml-2 bg-sky-300 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-sky-400 "
				>
					Undo
				</button>
			</div>,
		);
	};

	const undoHandler = (item) => {
		setItems((prev) => {
			const updated = [...prev, item];
			localStorage.setItem("itemList", JSON.stringify(updated));
			return updated;
		});
	};

	return (
		<div className="flex gap-5 flex-wrap ">
			{items?.map((item) => {
				const hasImage = !!item.imageLink;
				const fallbackImage =
					"https://i.pinimg.com/736x/c4/c7/69/c4c7697549a8c6a1c3f26a743caa75e4.jpg";

				return (
					<div
						key={item.id}
						className="h-100 w-70 border border-gray-100 hover:shadow-lg rounded-xl transition-shadow duration-200 font-open-sans"
					>
						<div
							className="h-[40%] bg-cover bg-center rounded-t-xl flex justify-end items-start"
							style={{
								backgroundImage: `url(${hasImage ? item.imageLink : fallbackImage})`,
							}}
						>
							<button
								className="bg-white m-2 px-2 py-1 rounded-md hover:bg-red-400 hover:text-white hover:scale-102 transition-all duration-200 cursor-pointer"
								type="button"
								onClick={() => deleteHandler(item.id)}
							>
								Delete
							</button>
						</div>
						<div className="h-[60%] w-full rounded-b-xl p-2 bg-gray-50">
							<div className="flex justify-between items-center pt-3 pb-1">
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
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
