import React from "react";
import "./style.css";

const CurrencySelect = ({selectName, currencyChange, currencyArray, defaultSelection})=>(
    <select
    className="calculatorForm__select"
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
  </select>
);

export default CurrencySelect;