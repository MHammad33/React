import { useState } from "react";

const Counter = () => {
	const counterStyles = {
		color: "red",
		fontSize: "2rem",
		fontWeight: "bold",
		backgroundColor: "black",
		padding: "10px",
		borderRadius: "5px",
		width: "50px",
		display: "inline-block",
		textAlign: "center",
	};

	// @Issue: Counter is not updating
	// let counter = 5;

	// const incrementValue = () => {
	// 	counter += 1;
	// 	console.log("Incremented!", counter);
	// };

	// const decrementValue = () => {
	// 	counter -= 1;
	// };

	// @Solution: Use useState to update the counter
	const [counter, setCounter] = useState(0);
	const incrementValue = () => {
		if (counter === 10) {
			alert("Counter cannot be greater than 10!");
			return;
		}

		setCounter(counter + 1);
		console.log("Incremented! Previous Value:", counter);
	};

	const decrementValue = () => {
		if (counter === 0) {
			alert("Counter cannot be negative!");
			return;
		}

		console.log("Decremented! Previous Value:", counter);
		setCounter(counter - 1);
	};

	return (
		<div>
			<hr />
			<h2>
				Counter: <em style={counterStyles}>{counter}</em>
			</h2>
			<button onClick={incrementValue}>Increment</button>
			<button onClick={decrementValue}>Decrement</button>
		</div>
	);
};
export default Counter;
