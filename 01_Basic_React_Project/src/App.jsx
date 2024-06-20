import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				// If user is logged in, dispatch the login action to have state online
				if (userData) {
					dispatch(login(userData));
				} else {
					// If user is not logged in, dispatch the logout action to have state offline
					dispatch(logout());
				}
			})
			.finally(() => {
				setLoading(false);
			});
	});

	return (
		<>
			{loading ? null /** @TODO Loading Screen  */ : (
				<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
					<div className="w-full block">
						<Header />
						<main>
							<Outlet />
						</main>
						<Footer />
					</div>
				</div>
			)}
		</>
	);
}

export default App;
