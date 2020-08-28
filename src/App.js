import React, { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import AppWrapper from "./AppWrapper";
import Form from "./Form";
import Background from "./Background";
import Clock from "./Clock";
import { useCurrenciesRates } from "./useCurrenciesRates";

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
  const { currenciesRates, errorInfo } = useCurrenciesRates();

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
