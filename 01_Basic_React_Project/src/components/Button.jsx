import Proptypes from "prop-types";

function Button({
	children,
	type = "button",
	bgColor = "bg-blue-600",
	textColor = "text-white",
	className = "",
	...props
}) {
	return (
		<button
			type={type}
			className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: Proptypes.string,
	type: Proptypes.string,
	bgColor: Proptypes.string,
	textColor: Proptypes.string,
	className: Proptypes.string,
};

export default Button;
