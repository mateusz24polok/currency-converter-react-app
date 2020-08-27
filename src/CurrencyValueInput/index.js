import React from "react";
import { StyledInput } from "./styled";

const CurrencyValueInput = ({ currencyValue, currencyValueChangeHandler, disabled }) => (
  <StyledInput
    className="calculatorForm__input"
    placeholder="enter value"
    value={currencyValue}
    type="number"
    step="0.01"
    min="0"
    onChange={currencyValueChangeHandler}
    disabled={disabled}
  />
);

export default CurrencyValueInput;