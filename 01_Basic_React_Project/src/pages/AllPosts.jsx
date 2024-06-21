import { Container, PostCard } from "../components";
import appWriteService from "../appwrite/config";
import { useEffect, useState } from "react";

function AllPosts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		appWriteService.getAllPosts([]).then((posts) => {
			if (posts) {
				setPosts(posts.documents);
			}
		});
	}, []);

	return (
		<div className="py-8">
			<Container>
				<div className="flex flex-wrap">
					{posts.map((post) => (
						<div key={post.$id}>
							<PostCard {...post} />
						</div>
					))}
				</div>
			</Container>
		</div>
	);
}
export default AllPosts;
