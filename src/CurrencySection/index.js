import React from "react";
import CurrencySelect from "../CurrencySelect";
import CurrencyValueInput from "../CurrencyValueInput";
import { StyledSection } from "./styled";

const CurrencySection = ({
  currencyValue,
  currencyValueChangeHandler,
  currencyChange,
  currencyArray,
  defaultSelection,
  inputDisabled
}) => {
  return (
    <StyledSection>
      <CurrencySelect
        selectName="currency1"
        currencyChange={currencyChange}
        currencyArray={currencyArray}
        defaultSelection={defaultSelection}
      />
      <CurrencyValueInput
        currencyValue={currencyValue}
        currencyValueChangeHandler={currencyValueChangeHandler}
        disabled={inputDisabled}
      />
    </StyledSection>
  );
};

export default CurrencySection;