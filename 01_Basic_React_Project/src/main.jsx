import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import { AuthLayout } from "./components/";
import {
	AddPost,
	AllPosts,
	EditPost,
	Home,
	Login,
	Post,
	Signup,
} from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" element={<Home />} />

			<Route
				path="/login"
				element={
					<AuthLayout authentication={false}>
						<Login />
					</AuthLayout>
				}
			/>

			<Route
				path="/signup"
				element={
					<AuthLayout authentication={false}>
						<Signup />
					</AuthLayout>
				}
			/>

			<Route
				path="/all-posts"
				element={
					<AuthLayout authentication>
						<AllPosts />
					</AuthLayout>
				}
			/>

			<Route
				path="/add-post"
				element={
					<AuthLayout authentication>
						<AddPost />
					</AuthLayout>
				}
			/>

			<Route
				path="/edit-post/:slug"
				element={
					<AuthLayout authentication>
						<EditPost />
					</AuthLayout>
				}
			/>

			<Route
				path="/post/:slug"
				element={
					<AuthLayout authentication>
						<Post />
					</AuthLayout>
				}
			/>

			<Route path="*" element={<h1>404 Not Found</h1>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
