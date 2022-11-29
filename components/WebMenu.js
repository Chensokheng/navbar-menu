import Link from "next/link";
import React from "react";

export default function WebMenu({ links }) {
	return (
		<div className="w-full sm:w-auto hidden sm:block">
			<div className=" text-zinc-400 flex gap-6 items-center shadow-md border border-zinc-300 rounded-full px-5 py-3 bg-white">
				{links.map(({ text, path }, index) => {
					return (
						<Link
							key={index}
							href={path}
							className="hover:text-teal-800 cursor-pointer"
						>
							{text}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
