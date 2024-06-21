import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const authStatus = useSelector((state) => state.status);

	useEffect(() => {
		/** @TODO : Make it more easy to understand */
		if (authentication && authStatus !== authentication) {
			navigate("/login");
		} else if (!authentication && authStatus !== authentication) {
			navigate("/");
		}
		setLoading(false);
	}, [authStatus, navigate, authentication]);

	return loading ? <h1>Loading...</h1> : <>{children}</>;
}

Protected.propTypes = {
	children: PropTypes.node.isRequired,
	authentication: PropTypes.bool,
};
