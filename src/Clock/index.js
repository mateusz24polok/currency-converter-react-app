import React, { useState, useEffect } from "react";
import { ClockText } from "./styled";

const Clock = () => {

    const [date, setDate] = useState((new Date()).toLocaleString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date();
            setDate(newDate.toLocaleString());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <ClockText>{date}</ClockText>
    )
};

export default Clock;