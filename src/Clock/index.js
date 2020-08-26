import React from "react";
import { ClockText } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockText>{date.toLocaleString()}</ClockText>
    )
};

export default Clock;