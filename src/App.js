import React, { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import AppWrapper from "./AppWrapper";
import Form from "./Form";
import Background from "./Background";
import Clock from "./Clock";

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



const App = () => {
  const [currenciesRates, setCurrenciesRates] = useState();

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=PLN`)
      .then(response => response.json())
      .then(currencyData => {
        setTimeout(() => {
          setCurrenciesRates(currencyData)
        }, 2000)
      })
  }, []);

  return (
    <>
      <AppWrapper>
        {currenciesRates ? (
          <>
            <Clock />
            <AppHeader />
            <Form currenciesArray={currenciesArray} />
          </>
        ) : (<p>Dane się jeszcze ładujo</p>)}
      </AppWrapper>
      <Background />
    </>
  )
};

export default App;
