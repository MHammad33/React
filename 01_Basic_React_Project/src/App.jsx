import { useState } from "react";
import { Input, Navbar } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
	const navLinks = ["Home", "About", "Services", "Contact", "Blog"];

	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("pkr");
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(from); // Custom hook
	const options = Object.keys(currencyInfo);

	// Swap from and to currencies
	const swapCurrencies = () => {
		setFrom(to);
		setTo(from);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};

	// Convert the amount
	const convertAmount = () => {
		console.log("Converting...", amount, currencyInfo[to]);
		setConvertedAmount(Number((amount * currencyInfo[to]).toFixed(2)));
	};

	return (
		<>
			<Navbar navLinks={navLinks} />
			<div
				className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
				style={{
					backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=400')`,
				}}
			>
				<div className="w-full">
					<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
						<form
							onSubmit={(e) => {
								e.preventDefault();
								convertAmount();
							}}
						>
							<div className="w-full mb-1">
								<Input
									label="From"
									amount={amount}
									onAmountChange={(amountChanged) => {
										setAmount(amountChanged);
									}}
									currencyOptions={options}
									onCurrencyChange={(currencyChanged) => {
										setFrom(currencyChanged);
									}}
									selectCurrency={from}
								/>
							</div>
							<div className="relative w-full h-0.5">
								<button
									type="button"
									className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
									onClick={swapCurrencies}
								>
									swap
								</button>
							</div>
							<div className="w-full mt-1 mb-4">
								<Input
									label="To"
									amount={convertedAmount}
									currencyOptions={options}
									onCurrencyChange={(currencyChanged) => {
										setTo(currencyChanged);
									}}
									selectCurrency={to}
									amountDisabled={true}
								/>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
							>
								Convert {from.toUpperCase()} to {to.toUpperCase()}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
