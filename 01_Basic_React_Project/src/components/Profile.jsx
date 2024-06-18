import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
	const { user } = useContext(UserContext);

	console.log("Profile user:", user);

	// If user is not logged in, return a message
	if (!user) return <div> Please Login...</div>;

	// If user is logged in, return the user details
	return <div>Welcome {user?.username}</div>;
};
export default Profile;
