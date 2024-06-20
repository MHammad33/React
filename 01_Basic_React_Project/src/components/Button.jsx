import PropTypes from "prop-types";

function Button({
	children,
	type = "button",
	className = "",
	bgColor = "bg-blue-600",
	hoverColor = "hover:bg-blue-700",
	textWhite = "text-white",
	...props
}) {
	return (
		<button
			className={`${bgColor} ${hoverColor} ${textWhite} font-bold py-2 px-4 rounded ${className}`}
			type={type}
			{...props}
		>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	className: PropTypes.string,
	bgColor: PropTypes.string,
	hoverColor: PropTypes.string,
	textWhite: PropTypes.string,
	props: PropTypes.object,
};

export default Button;
