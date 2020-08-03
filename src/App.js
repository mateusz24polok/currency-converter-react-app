import React from "react";
import "./index.css";
import AppHeader from "./AppHeader";
import AppWrapper from "./AppWrapper";
import Form from "./Form";

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

    <div className="backgroundImageContainer">
      <div className="backgroundColorContainer" />
    </div>
  </>
)

export default App;
