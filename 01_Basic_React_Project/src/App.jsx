import Navbar from "./components/Navbar";
import config from "./config/config";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	console.log("config", config.appWriteUrl);

	return (
		<>
			<Navbar navLinks={navLinks} />
			<h1 className="text-3xl bg-green-400 p-2">Hello, React</h1>
		</>
	);
}

export default App;
