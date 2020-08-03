import React from "react";
import "./index.css";
import AppHeader from "./AppHeader";
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
    <div className="appWrapper">
      <AppHeader />
      <Form currenciesArray={currenciesArray} />
    </div>

    <div className="backgroundImageContainer">
      <div className="backgroundColorContainer" />
    </div>
  </>
)

export default App;
