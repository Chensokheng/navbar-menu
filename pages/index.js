import React from "react";
import Navbar from "../components/Navbar";
export default function Home() {
	return (
		<div className="bg-slate-50 h-screen">
			<div className="max-w-5xl mx-auto bg-white h-screen">
				<Navbar />
				<div className=" p-5 sm:px-24">
					<h1 className="text-4xl sm:text-5xl font-bold">
						Lorem Ipsum is simply dummy and text of the printing.
					</h1>
					<p className="mt-5">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the standard
						dummy text ever since the 1500s, when an unknown printer
						took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries,
						but also the leap into electronic typesetting, remaining
						essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem
						Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including
						versions of Lorem Ipsum
					</p>
				</div>
			</div>
		</div>
	);
}
