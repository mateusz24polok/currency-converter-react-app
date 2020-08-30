import React from "react";
import { ErrorInfo } from "./styled";

const ErrorPage = ({ errorMessage }) => (
    <section>
        <ErrorInfo>Sorry, the application you are trying to run has the following problem:</ErrorInfo>
        <ErrorInfo>{errorMessage} !!!</ErrorInfo>
    </section>
);

export default ErrorPage;