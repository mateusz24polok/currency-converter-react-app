import React, { useState } from "react";
import CurrencySection from "../CurrencySection";
import Button from "../Button";
import Message from "../Message";
import { useNegativeValueProtection } from "./useNegativeValueProtection";

const Form = ({ currenciesArray, currenciesRates }) => {

    const [firstCurrencyValue, setFirstCurrencyValue] = useState(0);
    const [secondCurrencyValue, setSecondCurrencyValue] = useState(0);
    const [firstCurrency, setFirstCurrency] = useState("PLN");
    const [secondCurrency, setSecondCurrency] = useState("EUR");
    const [exchangeDate, setExchangeDate] = useState("");
    const [exchangeRate, setExchangeRate] = useState("");

    const negativeValueProtection = useNegativeValueProtection(firstCurrencyValue, secondCurrencyValue, setFirstCurrencyValue, setSecondCurrencyValue);

    const getRate = (reverseRate, baseCurrency, minorCurrency) => {
        const baseCurrencyPLNRate = currenciesRates.rates[baseCurrency];
        const minorCurrencyPLNRate = currenciesRates.rates[minorCurrency];
        if (reverseRate) {
            return baseCurrencyPLNRate / minorCurrencyPLNRate;
        }
        return minorCurrencyPLNRate / baseCurrencyPLNRate;
    };

    const onFirstInputChange = event => {
        setFirstCurrencyValue(event.target.value);
        setSecondCurrencyValue((event.target.value * getRate(false, firstCurrency, secondCurrency)).toFixed(2))
        setExchangeDate("");
    };

    const onSecondInputChange = event => {
        setSecondCurrencyValue(event.target.value);
        setFirstCurrencyValue((event.target.value * getRate(true, firstCurrency, secondCurrency)).toFixed(2))
        setExchangeDate("");
    };

    const onFirstSelectChange = event => {
        setFirstCurrency(event.target.value);
        setSecondCurrencyValue((firstCurrencyValue * getRate(false, event.target.value, secondCurrency)).toFixed(2))
        setExchangeDate("");
    };

    const onSecondSelectChange = event => {
        setSecondCurrency(event.target.value);
        setSecondCurrencyValue((firstCurrencyValue * getRate(false, firstCurrency, event.target.value)).toFixed(2))
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
                content={negativeValueProtection
                    ? "You have entered negative value"
                    : `Your calculation is current for ${exchangeDate} 
                    and your exchange rate is ${exchangeRate}`
                }
                info={exchangeDate ? true : false}
                warning={negativeValueProtection}
            />
        </form>
    );
};

export default Form;