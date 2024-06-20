import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";

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
			{
				loading ? (
					<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
						<div className="w-full block">
							<Header />
							<main>{/** @OUTLET */}</main>
							<Footer />
						</div>
					</div>
				) : null /** @TODO Loading Screen  */
			}
		</>
	);
}

export default App;
