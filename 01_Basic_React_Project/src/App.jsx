import { Controller, useForm } from "react-hook-form";

function App() {
	const {
		register,
		handleSubmit,
		// watch,
		control,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	// console.log(watch("example")); // watch input value by passing the name of it

	return (
		<div className="w-full px-4 max-w-7xl mx-auto bg-gray-600">
			<h2 className="text-white font-bold text-4xl p-4">
				React Hook Form Example
			</h2>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="text-white h-screen flex flex-col items-center gap-2 w-full"
			>
				<div>
					<label>Name</label>
					<input
						className="px-4 py-2 bg-gray-500 w-full outline-none"
						type="text"
						{...register("name", { required: "Name is required" })}
						placeholder="Name"
					/>
					{errors.name && <span>{errors.name.message}</span>}
				</div>

				<div>
					<label>Email</label>

					<input
						className="px-4 py-2 bg-gray-500 w-full my-2 outline-none"
						{...register("email", { required: "Email is required" })}
						placeholder="Email"
					/>
					{errors.email && <span>{errors.email.message}</span>}
				</div>

				<Controller
					name="age"
					control={control}
					defaultValue=""
					rules={{ required: "Age is required" }}
					render={({ field }) => (
						<div>
							<label>Age</label>
							<input
								className="px-4 py-2 bg-gray-500 w-full my-2 outline-none"
								{...field}
								placeholder="Age"
							/>
							{errors.age && <span>{errors.age.message}</span>}
						</div>
					)}
				/>

				<button type="submit" className="cursor-pointer px-4 py-2 bg-blue-500">
					Submit
				</button>
			</form>
		</div>
	);
}

export default App;
