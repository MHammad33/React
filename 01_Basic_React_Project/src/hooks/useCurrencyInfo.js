import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then(res => res.json())
      .then(data => {
        console.log("Data: ", data);
        setCurrencyInfo(data[currency]);
      })
      .catch(err => console.error(err));

  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;