import Navbar from "./components/Navbar";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	return (
		<>
			<Navbar navLinks={navLinks} />
			<h1 className="text-3xl bg-green-400 p-2">Hello, React</h1>
		</>
	);
}

export default App;
