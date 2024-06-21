import { Container, PostForm } from "../components";
import appWriteService from "../appwrite/config";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
	const [post, setPost] = useState(null);
	const { slug } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (slug) {
			appWriteService.getPost(slug).then((post) => {
				if (post) {
					setPost(post);
				} else {
					navigate("/");
				}
			});
		} else {
			navigate("/");
		}
	}, [slug, navigate]);

	return post ? (
		<div className="py-8">
			<Container>
				<PostForm post={post} />
			</Container>
		</div>
	) : null;
}
export default EditPost;
