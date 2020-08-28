import React from "react";

const ErrorPage = ({ errorMessage }) => (
    <>
        <p>Wystąpił błąd typu:</p>
        <p>{errorMessage}</p>
    </>
);

export default ErrorPage;