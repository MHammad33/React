import { Input, Navbar } from "./components";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	return (
		<>
			<Navbar navLinks={navLinks} />
			<Input label="From" />
		</>
	);
}

export default App;
