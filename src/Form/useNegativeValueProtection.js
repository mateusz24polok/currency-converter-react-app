import { useState, useEffect } from "react";

export const useNegativeValueProtection = (baseCurrencyValue, minorCurrencyValue, setBaseCurrencyValue, setMinorCurrencyValue, initialValue = false) => {
    const [negativeValueProtection, setNegativeValueProtection] = useState(false);

    useEffect(() => {
        if (baseCurrencyValue < 0 || minorCurrencyValue < 0) {
            setNegativeValueProtection(true);
            setBaseCurrencyValue(0);
            setMinorCurrencyValue(0);
        }
        const timeoutIndex = setTimeout(() => {
            setNegativeValueProtection(false);
        }, 2000)

        return (() => {
            clearTimeout(timeoutIndex);
        })
    }, [baseCurrencyValue, minorCurrencyValue])

    return negativeValueProtection;
};