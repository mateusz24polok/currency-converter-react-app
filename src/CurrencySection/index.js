import React from "react";
import "./style.css";
import CurrencySelect from "../CurrencySelect";
import CurrencyValueInput from "../CurrencyValueInput";

const CurrencySection = ({
  currencyValue,
  currencyValueChangeHandler,
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
      <CurrencyValueInput
      currencyValue = {currencyValue}
      currencyValueChangeHandler = {currencyValueChangeHandler}
      />
    </section>
  );
};

export default CurrencySection;