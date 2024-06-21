import PropTypes from "prop-types";
import { forwardRef, useId } from "react";

const Select = forwardRef(function Select(
	{ options, label, className = "", ...props },
	ref
) {
	const id = useId();
	return (
		<div className="w-full">
			{/* Label for Select */}
			{label && (
				<label htmlFor={id} className="">
					{label}
				</label>
			)}
			{/* Select */}
			<select
				className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
				id={id}
				ref={ref}
				{...props}
			>
				{options?.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
});

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({})),
	label: PropTypes.string,
	className: PropTypes.string,
};

export default Select;
