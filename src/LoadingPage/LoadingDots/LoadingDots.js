import React from "react";
import { FirstLoadingDot, SecondLoadingDot, LastLoadingDot } from "./styled";

const LoadingDots = ({ size }) => (
    <>
        <FirstLoadingDot size={size}>.</FirstLoadingDot>
        <SecondLoadingDot size={size}>.</SecondLoadingDot>
        <LastLoadingDot size={size}>.</LastLoadingDot>
    </>
);

export default LoadingDots;
