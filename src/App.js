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
    <>
      <AppWrapper>
        {currenciesRates ? (
          <>
            <Clock />
            <AppHeader />
            <Form currenciesArray={currenciesArray} />
          </>
        ) : (<p>{errorInfo ? errorInfo : "Dane się jeszcze ładują"}</p>)}
      </AppWrapper>
      <Background />
    </>
  )
};

export default App;
