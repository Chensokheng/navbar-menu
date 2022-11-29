import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";

export default function Navbar() {
	const links = [
		{
			text: "About",
			path: "/about",
		},
		{
			text: "Article",
			path: "/article",
		},
		{
			text: "Projects",
			path: "/projects",
		},
		{
			text: "Speaking",
			path: "/Speaking",
		},
		{
			text: "Uses",
			path: "/uses",
		},
	];
	const [open, setOpen] = useState(false);

	return (
		<nav className="pt-10 w-full flex justify-center items-center p-5">
			<WebMenu links={links} />
			<div className="flex justify-end w-full sm:hidden ">
				<button
					className="bg-white shadow-md px-5 py-2 rounded-full text-zinc-500 "
					onClick={() => {
						setOpen(true);
					}}
				>
					Menu
				</button>
			</div>
			{open ? (
				<MobileMenu links={links} close={() => setOpen(false)} />
			) : (
				<></>
			)}
		</nav>
	);
}
