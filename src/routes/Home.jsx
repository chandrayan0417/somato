import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div className=" px-30 flex justify-between pt-15">
			<div>
				<div className="font-amarante text-9xl py-20 cursor-default text-shadow-md ">
					it's not just Food, It's an Experience.
				</div>
				<div className="flex gap-5 font-delius">
					<Link
						className="py-2 px-7 rounded-full transition delay-75 ease-in-out duration-200 bg-[#F72E41] text-white  hover:scale-103 hover:bg-red-400"
						to="/menu"
					>
						View Menu
					</Link>
					<Link
						className="py-2 px-7 rounded-full transition delay-75 ease-in-out duration-200 bg-[#E0D9D9]   hover:scale-103 hover:bg-[#E6E0E0]"
						to="/booking"
					>
						Book A Table
					</Link>
				</div>
				<footer className=" flex gap-5 pt-30 text-xl font-light">
					<p>
						© <span>{new Date().getFullYear()}</span> Somato IN
					</p>
					<a href="https://github.com/chandrayan0417" target="_blank" rel="noopener noreferrer">
						<i className="ri-github-fill"></i> chandrayan0417
						<i className="ri-external-link-line"></i>
					</a>
				</footer>
			</div>

			<div
				className=" w-full bg-cover bg-center scale-125"
				style={{
					backgroundImage:
						"url('https://i.pinimg.com/736x/0d/fd/5e/0dfd5e58db8d61727c8323c71a49c6a0.jpg')",
				}}
			/>
		</div>
	);
};

export default Home;
