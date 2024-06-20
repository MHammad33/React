import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Container from "./components/Container";
import Button from "./components/Button";
import { useRef, useState } from "react";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	// Create state for input fields
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [result, setResult] = useState("");
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	// Create refs for input fields
	const inputRef = useRef();
	const passwordRef = useRef();

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("APP :: Username: ", username);
		console.log("APP :: Password: ", password);

		setResult(`Username: ${username} Password: ${password}`);
		setIsFormSubmitted(true);
	};

	return (
		<>
			<Navbar navLinks={navLinks} />
			<Container>
				<form onSubmit={handleSubmit}>
					<Input
						placeholder="Username"
						ref={inputRef}
						onChange={() => setUsername(inputRef.current.value)}
					/>
					<Input
						placeholder="Password"
						ref={passwordRef}
						onChange={() => setPassword(passwordRef.current.value)}
					/>
					<Button type="submit">Submit</Button>
				</form>

				<Container>
					{isFormSubmitted && (
						<div>
							<h2>Form Submitted</h2>
							<p>{result}</p>
						</div>
					)}
				</Container>
			</Container>
		</>
	);
}

export default App;
