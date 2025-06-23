import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<div className=" sticky top-0 z-50 backdrop-blur-xl bg-white/50 ">
			<div className="py-5 px-30 flex items-center justify-between ">
				<NavLink to="/" className="font-griffy text-5xl">
					So<span className="text-[#F72E41]">mato</span>
				</NavLink>
				<div className=" flex gap-5 text-2xl font-delius">
					<NavLink
						className={(e) =>
							`py-2 px-5 rounded-full transition-colors duration-200 ${
								e.isActive ? "bg-[#F72E41] text-white" : "hover:bg-red-100"
							}`
						}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={(e) =>
							`py-2 px-5 rounded-full transition-colors duration-200 ${
								e.isActive ? "bg-[#F72E41] text-white" : "hover:bg-red-100"
							}`
						}
						to="/menu"
					>
						Menu
					</NavLink>
					<NavLink
						className={(e) =>
							`py-2 px-5 rounded-full transition-colors duration-200 ${
								e.isActive ? "bg-[#F72E41] text-white" : "hover:bg-red-100"
							}`
						}
						to="/listitem"
					>
						List Item
					</NavLink>
					<NavLink
						className={(e) =>
							`py-2 px-5 rounded-full transition-colors duration-200 ${
								e.isActive ? "bg-[#F72E41] text-white" : "hover:bg-red-100"
							}`
						}
						to="cart"
					>
						<i className=" ri-shopping-cart-2-fill" />
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
