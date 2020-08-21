import React from "react";
import { StyledSelect } from "./styled";

const CurrencySelect = ({ selectName, currencyChange, currencyArray, defaultSelection }) => (
  <StyledSelect
    name={selectName}
    onChange={currencyChange}
  >
    {currencyArray.map(currency => {
      if (currency === defaultSelection) {
        return (
          <option selected key={currency} value={currency}>
            {currency}
          </option>
        );
      }
      return (
        <option key={currency} value={currency}>
          {currency}
        </option>
      );
    })}
  </StyledSelect>
);

export default CurrencySelect;