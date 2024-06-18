import Navbar from "./components/Navbar";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	return (
		<>
			<Navbar navLinks={navLinks} />
			<PasswordGenerator />
		</>
	);
}

export default App;
