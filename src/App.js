import React from "react";
import AppHeader from "./AppHeader";
import AppWrapper from "./AppWrapper";
import Form from "./Form";
import Background from "./Background";
import Clock from "./Clock";
import LoadingPage from "./LoadingPage/LoadingPage";
import ErrorPage from "./ErrorPage/ErrorPage";
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
        <Clock />
        <AppHeader />
        {currenciesRates ? (
          <>
            <Form
              currenciesArray={currenciesArray}
              currenciesRates={currenciesRates}
            />
          </>
        ) : (
            errorInfo ? <ErrorPage errorMessage={errorInfo} /> : <LoadingPage />
          )}
      </AppWrapper>
      <Background />
    </>
  )
};

export default App;
