import { useCallback, useState } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [characterAllowed, setCharacterAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const generatePassword = useCallback(() => {
		let pass = "";
		let str = "ABCDEGHIJKLMNOPWRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // 52

		if (numberAllowed) str += "0123456789";
		if (characterAllowed) str += "!@#$%^&*()_+";

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, characterAllowed, setPassword]);

	return (
		<div className="bg-gray-800 mx-auto shadow-md w-full max-w-md rounded-lg px-4 my-8 text-orange-500 p-5">
			<h1 className="text-white text-center p-2 my-2 font-semibold text-xl">
				Password Generator
			</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<input
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3"
					placeholder="Password"
					readOnly
				/>
				<button className="outline-none px-3 py-1 bg-blue-500 text-white shrink-0">
					Copy
				</button>
			</div>

			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<input
						type="range"
						min={8}
						max={20}
						value={length}
						onChange={(e) => setLength(e.target.value)}
						className="cursor-pointer"
					/>
					<label>{length}</label>
				</div>

				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						id="numbersInput"
						defaultChecked={numberAllowed}
						onChange={(e) => setNumberAllowed((prev) => !prev)}
						className="cursor-pointer"
					/>
					<label htmlFor="numbersInput">Numbers</label>
				</div>

				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						id="charInput"
						defaultChecked={characterAllowed}
						onChange={(e) => setCharacterAllowed((prev) => !prev)}
						className="cursor-pointer"
					/>
					<label htmlFor="charInput">Numbers</label>
				</div>
			</div>
		</div>
	);
};
export default PasswordGenerator;
