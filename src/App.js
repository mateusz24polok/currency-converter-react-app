import React from "react";
import "./index.css";
import CurrencySection from "./CurrencySection";
import Button from "./Button";

const currenciesArray = [
  "PLN",
  "EUR",
  "USD",
  "GBP",
  "CHF",
  "CZK",
  "RUB",
  "CAD",
  "AUD",
  "JPY",
  "HUF"
];

const App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCurrencyValue: 0,
      secondCurrencyValue: 0,
      firstCurrency: "PLN",
      secondCurrency: "EUR"
    };

    this.onFirstInputChange = this.onFirstInputChange.bind(this);
    this.onSecondInputChange = this.onSecondInputChange.bind(this);
    this.onFirstSelectChange = this.onFirstSelectChange.bind(this);
    this.onSecondSelectChange = this.onSecondSelectChange.bind(this);
    this.updateCurrencyValue = this.updateCurrencyValue.bind(this);
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
          ).toFixed(2)
        });
      }
    } catch {
      console.log("Error");
    }
  };

  onFirstInputChange = async event => {
    await this.setState({
      firstCurrencyValue: event.target.value
    });
    this.updateCurrencyValue(
      this.state.secondCurrencyValue,
      this.state.firstCurrencyValue
    );
  };

  onSecondInputChange = async event => {
    await this.setState({
      secondCurrencyValue: event.target.value
    });
    this.updateCurrencyValue(
      this.state.firstCurrencyValue,
      this.state.secondCurrencyValue
    );
  };

  onFirstSelectChange = async event => {
    await this.setState({
      firstCurrency: event.target.value
    });
    this.updateCurrencyValue(
      this.state.secondCurrencyValue,
      this.state.firstCurrencyValue
    );
  };

  onSecondSelectChange = async event => {
    await this.setState({
      secondCurrency: event.target.value
    });
    this.updateCurrencyValue(
      this.state.secondCurrencyValue,
      this.state.firstCurrencyValue
    );
  };

  render() {
    return (
      <>
        <div className="appWrapper">
          <h1 className="calculatorHeader">Currency Converter</h1>
          <form className="calculatorForm">
            <CurrencySection
              currencyValueChangeHandler={this.onFirstInputChange}
              currencyValue={this.state.firstCurrencyValue}
              currencyChange={this.onFirstSelectChange}
              currencyArray={currenciesArray}
              defaultSelection="PLN"
            />
            <CurrencySection
              currencyValueChangeHandler={this.onSecondInputChange}
              currencyValue={this.state.secondCurrencyValue}
              currencyChange={this.onSecondSelectChange}
              currencyArray={currenciesArray}
              defaultSelection="EUR"
            />
            <Button buttonContent = "Check exchange rate and date"/>
            <p className="calculatorForm__Message" />
          </form>
        </div>

        <div className="backgroundImageContainer">
          <div className="backgroundColorContainer" />
        </div>
      </>
    );
  }
};

export default App;
