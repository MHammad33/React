import PropTypes from "prop-types";
import { useId } from "react";

function Input({ label = "", type = "text", className = "", ...props }) {
	const inputId = useId();
	console.log(props);

	return (
		<div className="w-full">
			<label
				className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
				htmlFor={inputId}
			>
				{label}
			</label>
			<input
				className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${className}`}
				id={inputId}
				type={type}
				{...props}
			/>
		</div>
	);
}

Input.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	props: PropTypes.object,
};

export default Input;
