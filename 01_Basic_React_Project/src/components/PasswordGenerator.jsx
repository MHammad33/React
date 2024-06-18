import { useState } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [characterAllowed, setCharacterAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const generatePassword = () => {};

	return <div className="mx-4 p-3 text-white bg-black"></div>;
};
export default PasswordGenerator;
