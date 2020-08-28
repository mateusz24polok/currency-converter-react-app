import React from "react";
import { FirstLoadingDot, SecondLoadingDot, LastLoadingDot } from "./styled";

const LoadingPage = () => (
    <p>
        Trwa ładowanie danych
        <FirstLoadingDot>.</FirstLoadingDot>
        <SecondLoadingDot>.</SecondLoadingDot>
        <LastLoadingDot>.</LastLoadingDot>
    </p>
);

export default LoadingPage;