import { useState, useEffect } from "react";

export const useCurrenciesRates = () => {
    const [currenciesRates, setCurrenciesRates] = useState();
    const [errorInfo, setErrorInfo] = useState();

    useEffect(() => {
        fetch(`https://api.exchangeratesapi.io/latest?base=PLN`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(currencyData => {
                setTimeout(() => {
                    setCurrenciesRates(currencyData)
                }, 2000)
            })
            .catch(error => {
                setErrorInfo(error.message);
            })
    }, []);

    return (
        {
            currenciesRates,
            errorInfo
        }
    )
};