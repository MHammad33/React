import { useForm } from "react-hook-form";
import { Input, Button, Select, RTE } from "../index";
import appWriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function PostForm({ post }) {
	const { register, handleSubmit, watch, setValue, control, getValues } =
		useForm({
			defaultValues: {
				title: post?.title || "",
				slug: post?.slug || "",
				content: post?.content || "",
				status: post?.status || "active",
			},
		});
	const navigate = useNavigate();
	const userData = useSelector((state) => state.userData);

	const submit = async (data) => {
		if (post) {
			const file = data.image[0]
				? appWriteService.uploadFile(data.image[0])
				: null;
			if (file) {
				appWriteService.deleteFile(post.featuredImage);
			}

			const dbPost = await appWriteService.updatePost(post.$id, {
				...data,
				featuredImage: file ? file.$id : undefined,
			});

			if (dbPost) {
				navigate(`/post/${dbPost.$id}`);
			}
		} else {
			const file = data.image[0]
				? appWriteService.uploadFile(data.image[0])
				: null;

			if (file) {
				const fileId = file.$id;
				data.featuredImage = fileId;
				const dbPost = await appWriteService.createPost({
					...data,
					userId: userData.$id,
				});

				if (dbPost) {
					navigate(`/post/${dbPost.$id}`);
				}
			}

			const dbPost = await appWriteService.createPost({ ...data });
		}
	};

	return <div></div>;
}

PostForm.propTypes = {
	post: PropTypes.object,
};

export default PostForm;
