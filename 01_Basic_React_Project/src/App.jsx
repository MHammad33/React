import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
	const [color, setColor] = useState("olive");

	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	return (
		<>
			<Navbar navLinks={navLinks} />
			<div className={`w-full h-screen bg-${color}-500 duration-200`}>
				<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
					<div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
						{["red", "green", "blue", "yellow", "purple"].map(
							(colorVal, index) => {
								console.log(colorVal);
								return (
									<button
										key={index}
										className={`outline-none px-4 bg-${colorVal}-500 text-white rounded-xl`}
										onClick={() => setColor(colorVal)}
									>
										{colorVal}
									</button>
								);
							}
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
