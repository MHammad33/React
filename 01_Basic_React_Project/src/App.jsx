import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	console.log(watch("example")); // watch input value by passing the name of it

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="bg-black text-white h-screen flex flex-col justify-center items-center gap-2"
		>
			<input
				className="px-4 py-2 bg-gray-500 w-1/4 outline-none"
				type="text"
				{...register("example")}
				placeholder="Name"
			/>

			<input
				className="px-4 py-2 bg-gray-500 w-1/4 mt-2 outline-none"
				{...register("exampleRequired", { required: true })}
				placeholder="email"
			/>
			{errors.exampleRequired && <span>This field is required</span>}

			<input type="submit" className="cursor-pointer px-4 py-2 bg-blue-500" />
		</form>
	);
}

export default App;
