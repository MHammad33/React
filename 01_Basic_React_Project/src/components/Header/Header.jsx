import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	// Get the auth state from the store
	const authStatus = useSelector((state) => state.status);
	console.log("Header :: authState", authStatus);

	// NavItems
	const navItems = [
		{ name: "Home", path: "/", active: true },
		{ name: "Login", path: "/login", active: !authStatus },
		{ name: "Signup", path: "/signup", active: !authStatus },
		{ name: "All Posts", path: "/all-posts", active: authStatus },
		{ name: "Add Post", path: "/add-post", active: authStatus },
	];

	// Navigate
	const navigate = useNavigate();

	return (
		<header className="py-3 shadow bg-gray-500">
			<Container>
				<nav className="flex">
					{/*  Logo */}
					<div className="mr-4">
						<Link to="/">
							<Logo width="70px" />
						</Link>
					</div>

					{/* Nav Items */}
					<ul className="flex gap-2 ml-auto">
						{navItems.map((item) =>
							item.active ? (
								<li key={item.path}>
									<button onClick={() => navigate(item.path)}>
										{item.name}
									</button>
								</li>
							) : null
						)}
						{/* AuthStatus determines Logout Button to show or not */}
						{authStatus && (
							<li>
								<LogoutBtn />
							</li>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
};
export default Header;
