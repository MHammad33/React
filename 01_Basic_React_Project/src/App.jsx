import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Container from "./components/Container";
import Button from "./components/Button";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	return (
		<>
			<Navbar navLinks={navLinks} />
			<Container>
				<form>
					<Input placeholder="Username" />
					<Input placeholder="Password" />
					<Button type="submit">Submit</Button>
				</form>
			</Container>
		</>
	);
}

export default App;
