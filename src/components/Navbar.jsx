import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const show = () => {
		setIsActive(true);
	};
	const hide = () => {
		setIsActive(false);
	};

	return (
		<>
			<div className="sticky top-0 z-50 backdrop-blur-xl bg-white/50">
				<div className="md:py-5 py-2 lg:px-30 md:px-15 px-5 flex items-center justify-between">
					<NavLink to="/" className="font-griffy text-5xl">
						So<span className="text-[#F72E41]">mato</span>
					</NavLink>
					<button type="button" className="md:hidden" onClick={show}>
						<i className="ri-menu-line text-3xl" />
					</button>
					<div
						className={`fixed md:static top-0 ${
							isActive ? "right-0" : "-right-full"
						} flex-col md:flex-row gap-5 text-2xl font-delius flex bg-white md:bg-transparent p-3 md:p-0 border-l border-zinc-200 md:border-0 h-screen w-1/2 md:h-auto md:w-auto transition-[right] duration-500 ease-in-out z-60`}
					>
						<button
							className="md:hidden flex py-2 px-5"
							type="button"
							onClick={hide}
						>
							<i className="ri-close-line text-4xl" />
						</button>
						<NavLink
							onClick={hide}
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
							onClick={hide}
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
							onClick={hide}
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
							onClick={hide}
							className={(e) =>
								`py-2 px-5 rounded-full transition-colors duration-200 ${
									e.isActive ? "bg-[#F72E41] text-white" : "hover:bg-red-100"
								}`
							}
							to="cart"
						>
							<i className="ri-shopping-cart-2-fill" />
						</NavLink>
					</div>
				</div>
			</div>

			<div
				className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-200 ease-in-out ${
					isActive ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={hide}
			/>
		</>
	);
};

export default Navbar;
