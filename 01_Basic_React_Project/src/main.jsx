import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";

import { About, Contact, Home, User } from "./components";

/***
 * @Complex
 */
// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Home />,
// 			},
// 			{
// 				path: "/about",
// 				element: <About />,
// 			},
// 			{
// 				path: "/contact",
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

/**
 * @Simple
 */
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/user/:id" element={<User />} />
			<Route path="*" element={<h1>404 Not Found</h1>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
