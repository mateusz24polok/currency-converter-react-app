import React from "react";
import LoadingDots from "./LoadingDots/LoadingDots";

const LoadingPage = () => (
    <section>
        <p>
            Your currencies rates are loading now from european bank
            <LoadingDots size={24} />
        </p>
    </section>
);

export default LoadingPage;