import TodoForm from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	return (
		<>
			<Navbar navLinks={navLinks} />
			<div className="bg-gray-800 flex justify-center text-white h-screen items-center">
				<TodoForm />
				<Todos />
			</div>
		</>
	);
}

export default App;
