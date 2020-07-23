import React from "react";
import "./style.css";

const CurrencyValueInput = ({currencyValue, currencyValueChangeHandler})=>(
    <input
    className="calculatorForm__input"
    placeholder="enter value"
    value={currencyValue}
    type="number"
    step="0.01"
    min="0"
    onChange={currencyValueChangeHandler}
  />
);

export default CurrencyValueInput;