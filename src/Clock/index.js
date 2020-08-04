import React, { useState, useEffect } from "react";
import "./style.css";

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
        <p className="clock">{date}</p>
    )
};

export default Clock;