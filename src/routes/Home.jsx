import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { bookingContext } from "../components/Context";
const Home = () => {
	const [hideHeading, setHideHeading] = useState(false);
	const [booking, setBooking] = useContext(bookingContext);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		if (/^\d{0,10}$/.test(value)) {
			setInput(value);
		}
	};
	const submitHandler = (data) => {
		setBooking([...booking, data]);
    
	};

	const bookHandler = () => {
		setHideHeading((prev) => !prev);
	};
	return (
		<div className=" px-30 flex justify-between pt-15">
			<div className=" w-3/5 z-50">
				<div
					className={`font-amarante h-140 text-9xl/37 py-15 cursor-default text-shadow-md ${hideHeading ? "hidden" : ""}`}
				>
					it's not just Food, It's an Experience.
				</div>
				<form
					onSubmit={handleSubmit()}
					className={`flex flex-col gap-2 h-fit w-180 min-h-110 bg-zinc-100  border border-zinc-200 rounded-xl shadow-md my-15 p-5 ${!hideHeading ? "hidden" : ""}`}
				>
					<div className="flex flex-col">
						<label className="font-open-sans" htmlFor="name">
							Name
						</label>
						<input
							className="w-100 bg-zinc-50 rounded-md focus:outline-hidden text-xl focus:bg-white p-2 mt-1"
							{...register("name", {
								required: "name can not be empty",
								validate: (value) =>
									value.trim() !== "" || "name cannot be just whitespace",
							})}
							id="name"
							type="text"
							placeholder="John Deo"
							name="name"
						/>

						{errors?.name?.message && (
							<small className="text-red-500 mt-1 text-sm">
								<i className="ri-error-warning-line" /> {errors.name.message}
							</small>
						)}
					</div>
					<div className="flex flex-col">
						<label className="font-open-sans" htmlFor="number">
							Number
						</label>

						<input
							className="w-70 bg-zinc-50 rounded-md focus:outline-none text-xl focus:bg-white p-2 mt-1 no-spinner"
							{...register("number", {
								required: "Number cannot be empty",
								pattern: {
									value: /^[0-9]{10}$/,
									message: "Enter a valid 10-digit number",
								},
							})}
							id="number"
							placeholder="99999-00000"
							name="number"
							type="tel"
							maxLength={10}
						/>

						{errors?.number?.message && (
							<small className="text-red-500 mt-2 text-sm">
								<i className="ri-error-warning-line" /> {errors.number.message}
							</small>
						)}
					</div>
					<div className="flex flex-col">
						<label className="font-open-sans" htmlFor="emailid">
							Email Address
						</label>
						<input
							className="w-90 bg-zinc-50 rounded-md focus:outline-hidden text-xl focus:bg-white p-2 mt-1 no-spinner"
							{...register("emailid", {
								required: "email address can not be empty",
								validate: (value) =>
									value.trim() !== "" || "emailid cannot be just whitespace",
							})}
							id="emailid"
							placeholder="example@abc.com"
							name="emailid"
							type="email"
							value={input}
						/>

						{errors?.emailid?.message && (
							<small className="text-red-500 mt-2 text-sm">
								<i className="ri-error-warning-line" /> {errors.emailid.message}
							</small>
						)}
					</div>
					<div className=" flex flex-col">
						<div className="flex gap-4">
							<div className=" flex flex-col">
								<label className="font-open-sans" htmlFor="checkin">
									Select Check-In Time
								</label>
								<input
									className="w-40 bg-zinc-50 rounded-md focus:outline-none text-xl focus:bg-white p-2 mt-1 no-spinner"
									{...register("checkin", {
										required: "Please select a check-in time",
										validate: (value) => {
											return value >= "10:00" && value <= "20:00"
												? true
												: "Check-in-out must be between 10:00 AM and 8:00 PM";
										},
									})}
									id="checkin"
									name="checkin"
									type="time"
									defaultValue=""
								/>
							</div>
							<div className="flex flex-col">
								<label className="font-open-sans" htmlFor="checkout">
									Select Check-Out Time
								</label>
								<input
									className="w-40 bg-zinc-50 rounded-md focus:outline-none text-xl focus:bg-white p-2 mt-1 no-spinner"
									{...register("checkout", {
										required: "Please select a check-out time",
										validate: (value) => {
											return value >= "10:00" && value <= "20:00"
												? true
												: "Check-in-out must be between 10:00 AM and 8:00 PM";
										},
									})}
									id="checkout"
									name="checkout"
									type="time"
									defaultValue=""
								/>
							</div>
						</div>
						{(errors?.checkin?.message || errors?.checkout?.message) && (
							<div className="text-red-500 mt-2 text-sm space-y-1">
								{errors?.checkin?.message && (
									<p>
										<i className="ri-error-warning-line" />{" "}
										{errors.checkin.message}
									</p>
								)}
							</div>
						)}
					</div>
					<div className="flex justify-between items-end">
						<div className="flex flex-col">
							<label className="font-open-sans" htmlFor="date">
								Select Date
							</label>
							<input
								className="w-45 bg-zinc-50 rounded-md focus:outline-none text-xl focus:bg-white p-2 mt-1 no-spinner"
								{...register("date", {
									required: "Please select a booking date",
									validate: (value) => {
										const selectedDate = new Date(value);
										const today = new Date();
										const oneMonthFromToday = new Date();
										oneMonthFromToday.setMonth(today.getMonth() + 1);

										selectedDate.setHours(0, 0, 0, 0);
										today.setHours(0, 0, 0, 0);
										oneMonthFromToday.setHours(0, 0, 0, 0);

										return selectedDate >= today &&
											selectedDate <= oneMonthFromToday
											? true
											: "Date must be between today and 1 month from today";
									},
								})}
								id="date"
								name="date"
								type="date"
							/>
							{errors?.date?.message && (
								<small className="text-red-500 mt-2 text-sm">
									<i className="ri-error-warning-line" /> {errors.date.message}
								</small>
							)}
						</div>

						<button
							className="font-open-sans  h-fit text-white py-2 px-15 bg-[#F72E41] hover:bg-red-600 rounded-lg transition-colors duration-200 cursor-pointer "
							type="submit"
						>
							Add Item <i className="ri-menu-add-line" />
						</button>
					</div>{" "}
				</form>

				<div className="flex gap-5 font-delius">
					<Link
						className="py-2 px-7 rounded-full transition delay-75 ease-in-out duration-200 bg-[#F72E41] text-white   hover:bg-red-600"
						to="/menu"
					>
						View Menu
					</Link>
					<button
						type="button"
						onClick={bookHandler}
						className="py-2 px-7 w-38 rounded-full transition delay-75 ease-in-out duration-200 bg-zinc-200    hover:bg-zinc-300"
					>
						{hideHeading ? "Go Back" : "Book A Table"}
					</button>
				</div>
				<footer className=" flex gap-5 pt-30 text-xl font-light">
					<p>
						© <span>{new Date().getFullYear()}</span> Somato IN
					</p>
					<a
						href="https://github.com/chandrayan0417"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="ri-github-fill" /> chandrayan0417
						<i className="ri-external-link-line" />
					</a>
				</footer>
			</div>

			<div
				className=" w-2/5 bg-cover bg-center h-180 scale-125"
				style={{
					backgroundImage:
						"url('https://i.pinimg.com/736x/0d/fd/5e/0dfd5e58db8d61727c8323c71a49c6a0.jpg')",
				}}
			/>
		</div>
	);
};

export default Home;
