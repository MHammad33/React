import { forwardRef, useId } from "react";
import Proptypes from "prop-types";

const Input = forwardRef(function Input(
	{ label, type = "text", className = "", ...props },
	ref
) {
	const inputId = useId();

	return (
		<div className="w-full">
			{label && (
				<label className="inline-block mb-1 pl-1" htmlFor={inputId}>
					{label}
				</label>
			)}
			<input
				id={inputId}
				type={type}
				className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
				ref={ref}
				{...props}
			/>
		</div>
	);
});

Input.propTypes = {
	label: Proptypes.string,
	type: Proptypes.string,
	className: Proptypes.string,
};

export default Input;
