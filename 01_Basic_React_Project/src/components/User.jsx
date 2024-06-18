import { useParams } from "react-router-dom";

const User = () => {
	const { id } = useParams();

	return (
		<div className="max-w-md mx-auto p-4 text-red-300 bg-gray-500 text-center flex justify-center items-center">
			User: <span className="mx-1 text-gray-100">{id}</span>
		</div>
	);
};
export default User;
