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
		<div>
			<h2>Login</h2>
			<input
				type="text"
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
export default Login;
