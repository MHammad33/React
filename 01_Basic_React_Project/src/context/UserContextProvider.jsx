import Proptypes from "prop-types";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

UserContextProvider.propTypes = {
	children: Proptypes.node.isRequired,
};

export default UserContextProvider;
