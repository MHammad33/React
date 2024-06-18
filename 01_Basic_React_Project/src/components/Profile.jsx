import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
	const { user } = useContext(UserContext);

	console.log("Profile user:", user);

	// If user is not logged in, return a message
	if (!user) return <div> Please Login...</div>;

	// If user is logged in, return the user details
	return (
		<div className="bg-black text-white p-6">
			<h2 className="font-bold text-2xl text-center">Profile</h2>
			<span className="shadow-sm mx-auto w-fit p-4">
				Welcome {user?.username}
			</span>
		</div>
	);
};
export default Profile;
