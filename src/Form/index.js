import React, { useState, useEffect } from "react";
import CurrencySection from "../CurrencySection";
import Button from "../Button";
import Message from "../Message";

const Form = ({ currenciesArray, currenciesRates }) => {

    console.log(currenciesRates);

    const [firstCurrencyValue, setFirstCurrencyValue] = useState(0);
    const [secondCurrencyValue, setSecondCurrencyValue] = useState(0);
    const [firstCurrency, setFirstCurrency] = useState("PLN");
    const [secondCurrency, setSecondCurrency] = useState("EUR");
    const [exchangeDate, setExchangeDate] = useState("");
    const [exchangeRate, setExchangeRate] = useState("");

    useEffect(() => {
        const firstCurrencyPLNRate = currenciesRates.rates[firstCurrency];
        const secondCurrencyPLNRate = currenciesRates.rates[secondCurrency];
        const rate = secondCurrencyPLNRate / firstCurrencyPLNRate;

        console.log(firstCurrencyPLNRate, secondCurrencyPLNRate, rate);

        setSecondCurrencyValue(firstCurrencyValue * rate)
    },
        [firstCurrencyValue, firstCurrency, secondCurrency, currenciesRates.rates])

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
        const firstCurrencyPLNRate = currenciesRates.rates[firstCurrency];
        const secondCurrencyPLNRate = currenciesRates.rates[secondCurrency];
        const rate = secondCurrencyPLNRate / firstCurrencyPLNRate;
        setExchangeDate(currenciesRates.date);
        setExchangeRate(rate.toFixed(3));
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
                currencyValue={secondCurrencyValue.toFixed(2)}
                currencyChange={onSecondSelectChange}
                currencyArray={currenciesArray}
                defaultSelection="EUR"
                inputDisabled
            />
            <Button
                buttonContent="Check exchange rate and date"
                onClick={onButtonClick}
            />
            <Message
                content={`Your calculation is current for ${exchangeDate} 
                    and your exchange rate is ${exchangeRate}`}
                info={exchangeDate ? true : false} />
        </form>
    );
};

export default Form;