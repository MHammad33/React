import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setUser } = useContext(UserContext);

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Login in Process...");

		// Create a user object
		const user = { username, password };
		console.log(user);

		// Set the user object in the context
		setUser(user);

		// Reset the input fields
		setUsername("");
		setPassword("");
	};

	return (
		<div className="flex flex-col max-w-md mx-auto my-12  bg-gray-800 p-4">
			<h2 className="font-semibold text-xl text-white text-center m-4">
				Login
			</h2>
			<input
				className="w-full mt-2 px-2 py-1 rounded-md bg-gray-200 text-gray-800 outline-none "
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				className="w-full mt-2 px-2 py-1 rounded-md bg-gray-200 text-gray-800 outline-none"
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className="px-2 py-1 bg-blue-400 text-white rounded-md mt-2 cursor-pointer hover:bg-blue-500 focus:outline-none"
				type="submit"
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	);
};
export default Login;
