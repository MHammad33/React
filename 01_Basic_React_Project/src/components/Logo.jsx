import Proptypes from "prop-types";

const Logo = ({ width = "100px" }) => {
	return <div className={`w-[${width}]`}>Logo</div>;
};

Logo.propTypes = {
	width: Proptypes.string,
};

export default Logo;
