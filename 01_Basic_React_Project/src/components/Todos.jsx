import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todos);

	return (
		<div>
			<div className="text-white text-2xl">Todos</div>
			{todos.map((todo) => (
				<div
					key={todo.id}
					className="bg-white/10 p-3 rounded-lg m-2 flex justify-between items-center"
				>
					<span>{todo.title}</span>
					<button
						className="bg-red-600 text-white rounded-lg px-2 py-1"
						onClick={() => dispatch(removeTodo(todo.id))}
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
};
export default Todos;
