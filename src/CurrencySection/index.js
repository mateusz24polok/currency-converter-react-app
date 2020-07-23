import React from "react";
import "./style.css";
import CurrencySelect from "../CurrencySelect"

const CurrencySection = ({
  currencyValue,
  currencyValueChange,
  currencyChange,
  currencyArray,
  defaultSelection
}) => {
  return (
    <section className="calculatorForm__currencySection">
      <CurrencySelect
      selectName = "currency1"
      currencyChange = {currencyChange}
      currencyArray = {currencyArray}
      defaultSelection = {defaultSelection}
      />
      <input
        className="calculatorForm__input"
        placeholder="enter value"
        value={currencyValue}
        type="number"
        step="0.01"
        min="0"
        onChange={currencyValueChange}
      />
    </section>
  );
};

export default CurrencySection;