import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function MobileMenu({ links, close }) {
	const [animation, setAnimation] = useState(false);

	useEffect(() => {
		setAnimation(true);
		window.addEventListener("resize", (e) => {
			if (e.target.innerWidth >= 640) {
				close();
			}
		});
		return () => {
			window.removeEventListener("resize", () => {});
		};
	}, []);

	return (
		<div>
			<div className="fixed inset-0 top-0 l-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60"></div>

			<div className="fixed inset-0 top-0 l-0 p-5">
				<div
					className={`w-full bg-white rounded-xl p-5 transition-all  ${
						animation ? "scale-100" : "scale-90"
					}`}
				>
					<div className="flex items-center justify-between">
						<h1>Navigation</h1>
						<IoCloseOutline
							className="w-7 h-7 hover:scale-110 transition-all cursor-pointer"
							onClick={close}
						/>
					</div>
					<div className=" mt-5 divide-y">
						{links.map(({ text, path }, index) => {
							return (
								<Link
									key={index}
									href={path}
									className="block py-2 text-zinc-500"
								>
									{text}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
