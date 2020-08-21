import React from "react";
import CurrencySelect from "../CurrencySelect";
import CurrencyValueInput from "../CurrencyValueInput";
import { StyledSection } from "./styled";

const CurrencySection = ({
  currencyValue,
  currencyValueChangeHandler,
  currencyChange,
  currencyArray,
  defaultSelection
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
      />
    </StyledSection>
  );
};

export default CurrencySection;