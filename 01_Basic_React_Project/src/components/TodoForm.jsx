import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
	const [todo, setTodo] = useState("");

	const { addTodo } = useTodo();

	const handleAddTodo = (e) => {
		console.log("Adding todo...");
		e.preventDefault();

		// If todo is empty
		if (!todo) {
			alert("Please provide some text to add todo...");
			return;
		}

		addTodo({ todo, isCompleted: false });
	};

	return (
		<form className="flex" onSubmit={handleAddTodo}>
			<input
				type="text"
				placeholder="Write Todo..."
				className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				type="submit"
				className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
			>
				Add
			</button>
		</form>
	);
}

export default TodoForm;
