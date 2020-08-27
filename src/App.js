import React from "react";
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

const App = () => (
  <>
    <AppWrapper>
      <Clock />
      <AppHeader />
      <Form currenciesArray={currenciesArray} />
    </AppWrapper>
    <Background />
  </>
)

export default App;
