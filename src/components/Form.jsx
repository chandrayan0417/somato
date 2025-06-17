import { nanoid } from "nanoid";
import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { itemContext } from "./Context";
const Form = () => {
	const [items, setItems] = useContext(itemContext);

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		watch,
		formState: { errors },
	} = useForm();
	const isVeg = watch("choice");
	function submitHandler(data) {
		data.id = nanoid();
		setItems([...items, data]);
		reset();
	}
	return (
		<form className="flex flex-col text-2xl gap-5 px-15 sticky top-27" onSubmit={handleSubmit(submitHandler)}>
			<div className="flex flex-col">
				<label className="font-delius" htmlFor="title">
					Title
				</label>
				<input
					className=" focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl focus:bg-zinc-50 mt-2"
					{...register("title", {
						required: "title can not be empty",
						validate: (value) => value.trim() !== "" || "title cannot be just whitespace",
					})}
					id="title"
					type="text"
					placeholder="title"
					name="title"
				/>

				{errors?.title?.message && (
					<small className="text-red-500 mt-2 text-sm">
						<i className="ri-error-warning-line" /> {errors.title.message}
					</small>
				)}
			</div>
			<div className="flex flex-col">
				<label className="font-delius" htmlFor="description">
					Description
				</label>
				<textarea
					{...register("description", {
						required: "description can not be empty",
						validate: (value) => value.trim() !== "" || "description cannot be just whitespace",
					})}
					className=" focus:bg-zinc-50 focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl h-50 mt-2 resize-none"
					id="description"
					type="text"
					placeholder="description"
					name="description"
				/>
				{errors?.description?.message && (
					<small className="text-red-500 mt-2 text-sm">
						<i className="ri-error-warning-line" />
						{errors.description.message}
					</small>
				)}
			</div>
			<div
				className="
            flex flex-col"
			>
				<label className="font-delius" htmlFor="image">
					Image Link
				</label>
				<input
					{...register("imageLink")}
					className=" focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl focus:bg-zinc-50 mt-2"
					id="image"
					type="text"
					placeholder="image link"
					name="imageLink"
				/>
			</div>
			<div className="flex flex-col">
				<label className="font-delius" htmlFor="price">
					Price
				</label>
				<input
					{...register("price", {
						required: "price can not be empty",
						validate: (value) => value > 0 || "invalid input",
					})}
					className=" focus:border-[#F72E41] border-2 border-red-100 p-2 rounded-md focus:outline-hidden text-xl focus:bg-zinc-50 mt-2"
					id="price"
					type="number"
					placeholder="price"
					name="price"
				/>
				{errors?.price?.message && (
					<small className="text-red-500 mt-2 text-sm">
						<i className="ri-error-warning-line" /> {errors.price.message}
					</small>
				)}
			</div>
			<div className="flex flex-col">
				<div className=" flex justify-between">
					<button
						className={`font-delius bg-green-400 text-white hover:bg-green-500 w-3/7 py-2 rounded-md cursor-pointer ${
							isVeg === "Veg" ? "outline-2 outline-offset-2 outline-zinc-400" : ""
						}`}
						type="button"
						onClick={() => setValue("choice", "Veg")}
					>
						Veg
					</button>

					<button
						className={`font-delius bg-red-500 text-white hover:bg-red-600 w-3/7 py-2 rounded-md cursor-pointer ${
							isVeg === "Non Veg" ? "outline-2 outline-offset-2 outline-zinc-400" : ""
						}`}
						type="button"
						onClick={() => setValue("choice", "Non Veg")}
					>
						Non Veg
					</button>
				</div>

				<input type="hidden" {...register("choice", { required: "select one option" })} />
				{errors?.choice?.message && (
					<small className="text-red-500 mt-2 text-sm">
						<i className="ri-error-warning-line" />
						{errors.choice.message}
					</small>
				)}
			</div>
			<button
				className="font-delius  text-white py-2 px-15 bg-[#F72E41] hover:bg-red-400 rounded-lg transition-colors duration-200 cursor-pointer mt-5"
				type="submit"
			>
				Add Item <i className="ri-menu-add-line" />
			</button>
		</form>
	);
};

export default Form;
