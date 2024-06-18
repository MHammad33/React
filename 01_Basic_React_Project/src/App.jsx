import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
	console.log("App Rendered");

	return (
		<UserContextProvider>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}

export default App;
