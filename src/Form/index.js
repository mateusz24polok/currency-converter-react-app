import React, { useState, useEffect } from "react";
import CurrencySection from "../CurrencySection";
import Button from "../Button";
import Message from "../Message";

const Form = ({ currenciesArray }) => {

    const [firstCurrencyValue, setFirstCurrencyValue] = useState(0);
    const [secondCurrencyValue, setSecondCurrencyValue] = useState(0);
    const [firstCurrency, setFirstCurrency] = useState("PLN");
    const [secondCurrency, setSecondCurrency] = useState("EUR");
    const [exchangeDate, setExchangeDate] = useState("");
    const [exchangeRate, setExchangeRate] = useState("");

    useEffect(() => {
        const exchangeData = getExchangeData(firstCurrency, secondCurrency);

        exchangeData.then(exchangeData => {
            setSecondCurrencyValue(firstCurrencyValue * exchangeData.exchangeRate)
        })
    },
        [firstCurrencyValue, firstCurrency, secondCurrency])

    // useEffect(() => {
    //     const exchangeData = getExchangeData(
    //         firstCurrency,
    //         secondCurrency
    //     );

    //     exchangeData.then(exchangeData => {
    //         setFirstCurrencyValue(secondCurrencyValue * 1 / exchangeData.exchangeRate)
    //     })
    // }, [secondCurrencyValue])

    const getExchangeData = async (basedCurrency, exchangedCurrency) => {
        const exchangeDataResponse = await fetch(
            `https://api.exchangeratesapi.io/latest?base=${basedCurrency}`
        );
        const exchangeData = await exchangeDataResponse.json();
        if (basedCurrency === "EUR" && exchangedCurrency === "EUR") {
            return {
                exchangeRate: 1,
                exchangeDate: exchangeData.date
            };
        } else {
            return {
                exchangeRate: exchangeData.rates[exchangedCurrency],
                exchangeDate: exchangeData.date
            };
        }
    };

    const onFirstInputChange = event => {
        setFirstCurrencyValue(event.target.value);
        setExchangeDate("");
    };

    const onSecondInputChange = event => {
        setSecondCurrencyValue(event.target.value);
        setExchangeDate("");
    };

    const onFirstSelectChange = event => {
        setFirstCurrency(event.target.value);
        setExchangeDate("");
    };

    const onSecondSelectChange = event => {
        setSecondCurrency(event.target.value);
        setExchangeDate("");
    };

    const onButtonClick = async () => {
        const exchangeData = await getExchangeData(
            firstCurrency,
            secondCurrency
        );
        setExchangeDate(exchangeData.exchangeDate);
        setExchangeRate(exchangeData.exchangeRate.toFixed(3));
    };

    return (
        <form className="calculatorForm">
            <CurrencySection
                currencyValueChangeHandler={onFirstInputChange}
                currencyValue={firstCurrencyValue}
                currencyChange={onFirstSelectChange}
                currencyArray={currenciesArray}
                defaultSelection="PLN"
            />
            <CurrencySection
                currencyValueChangeHandler={onSecondInputChange}
                currencyValue={secondCurrencyValue}
                currencyChange={onSecondSelectChange}
                currencyArray={currenciesArray}
                defaultSelection="EUR"
            />
            <Button
                buttonContent="Check exchange rate and date"
                onClick={onButtonClick}
            />
            <Message
                content={`Your calculation is current for ${exchangeDate} 
                    and your exchange rate is ${exchangeRate}`}
                extraClass={exchangeDate ? "calculatorForm__Message--info" : ""} />
        </form>
    );
};

export default Form;