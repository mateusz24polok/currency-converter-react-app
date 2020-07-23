import React from "react";
import "./style.css";

const CurrencySection = ({
  currencyValue,
  currencyValueChange,
  currencyChange,
  currencyArray,
  defaultSelection
}) => {
  return (
    <section className="calculatorForm__currencySection">
      <select
        className="calculatorForm__select"
        name="currency1"
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