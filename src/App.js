import React from "react";
import "./index.css";
import AppHeader from "./AppHeader";
import AppWrapper from "./AppWrapper";
import Form from "./Form";
import Background from "./Background";

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
      <AppHeader />
      <Form currenciesArray={currenciesArray} />
    </AppWrapper>
    <Background />
  </>
)

export default App;
