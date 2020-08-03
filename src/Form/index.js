import React from "react";
import CurrencySection from "../CurrencySection";
import Button from "../Button";
import Message from "../Message";

const Form = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCurrencyValue: 0,
            secondCurrencyValue: 0,
            firstCurrency: "PLN",
            secondCurrency: "EUR",
            exchangeDate: "",
            exchangeRate: ""
        };

        this.onFirstInputChange = this.onFirstInputChange.bind(this);
        this.onSecondInputChange = this.onSecondInputChange.bind(this);
        this.onFirstSelectChange = this.onFirstSelectChange.bind(this);
        this.onSecondSelectChange = this.onSecondSelectChange.bind(this);
        this.updateCurrencyValue = this.updateCurrencyValue.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    getExchangeData = async (basedCurrency, exchangedCurrency) => {
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

    updateCurrencyValue = async (updatedCurrencyValue, basedCurrencyValue) => {
        try {
            const exchangeData = await this.getExchangeData(
                this.state.firstCurrency,
                this.state.secondCurrency
            );
            if (updatedCurrencyValue === this.state.firstCurrencyValue) {
                this.setState({
                    firstCurrencyValue: (
                        (1 / exchangeData.exchangeRate) *
                        basedCurrencyValue
                    ).toFixed(2)
                });
            } else {
                this.setState({
                    secondCurrencyValue: (
                        exchangeData.exchangeRate * basedCurrencyValue
                    ).toFixed(2),
                    exchangeDate: ""
                });
            }
        } catch {
            console.log("Error");
        }
    };

    onFirstInputChange = async event => {
        await this.setState({
            firstCurrencyValue: event.target.value,
            exchangeDate: ""
        });
        this.updateCurrencyValue(
            this.state.secondCurrencyValue,
            this.state.firstCurrencyValue
        );
    };

    onSecondInputChange = async event => {
        await this.setState({
            secondCurrencyValue: event.target.value,
            exchangeDate: ""
        });
        this.updateCurrencyValue(
            this.state.firstCurrencyValue,
            this.state.secondCurrencyValue
        );
    };

    onFirstSelectChange = async event => {
        await this.setState({
            firstCurrency: event.target.value,
            exchangeDate: ""
        });
        this.updateCurrencyValue(
            this.state.secondCurrencyValue,
            this.state.firstCurrencyValue
        );
    };

    onSecondSelectChange = async event => {
        await this.setState({
            secondCurrency: event.target.value,
            exchangeDate: ""
        });
        this.updateCurrencyValue(
            this.state.secondCurrencyValue,
            this.state.firstCurrencyValue
        );
    };

    onButtonClick = async () => {
        const exchangeData = await this.getExchangeData(
            this.state.firstCurrency,
            this.state.secondCurrency
        );
        this.setState({
            exchangeDate: exchangeData.exchangeDate,
            exchangeRate: exchangeData.exchangeRate.toFixed(3)
        });
    };

    render() {
        return (
            <form className="calculatorForm">
                <CurrencySection
                    currencyValueChangeHandler={this.onFirstInputChange}
                    currencyValue={this.state.firstCurrencyValue}
                    currencyChange={this.onFirstSelectChange}
                    currencyArray={this.props.currenciesArray}
                    defaultSelection="PLN"
                />
                <CurrencySection
                    currencyValueChangeHandler={this.onSecondInputChange}
                    currencyValue={this.state.secondCurrencyValue}
                    currencyChange={this.onSecondSelectChange}
                    currencyArray={this.props.currenciesArray}
                    defaultSelection="EUR"
                />
                <Button
                    buttonContent="Check exchange rate and date"
                    onClick={this.onButtonClick}
                />
                <Message
                    content={`Your calculation is current for ${this.state.exchangeDate} 
                    and your exchange rate is ${this.state.exchangeRate}`}
                    extraClass={this.state.exchangeDate ? "calculatorForm__Message--info" : ""} />
            </form>
        );
    }
};

export default Form;