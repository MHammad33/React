import { createContext } from "react";

/**
 * @desc This is the context object that will be used to pass the user data to the components.
 * @dev The context object is created using the createContext() method from the react library.
 */
const UserContext = createContext(null);

export default UserContext;