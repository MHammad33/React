import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
	/**
	 * @Old_Method
	 */
	// const [data, setData] = useState(null);

	// useEffect(() => {
	// 	fetch("https://api.github.com/users/MHammad33")
	// 		.then((res) => {
	// 			console.log("Converting the response to JSON");
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			console.log("Data Fetched: ", data);
	// 			setData(data);
	// 		});
	// }, []);

	/**
	 * @Loader_Method
	 */
	const data = useLoaderData();

	return (
		<div className="text-center m-4 bg-gray-600 p-4 text-white text-3xl">
			Github Followers: <span className="text-red-400">{data?.followers}</span>
			<img
				className="text-center"
				src={data?.avatar_url}
				alt="Github Picture"
				width={300}
			/>
		</div>
	);
};
export default Github;

export const GithubLoader = async () => {
	const response = await fetch("https://api.github.com/users/MHammad33");
	return response.json();
};
