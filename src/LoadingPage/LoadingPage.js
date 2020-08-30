import React from "react";
import LoadingDots from "./LoadingDots/LoadingDots";
import { LoadingInfo, Image } from "./styled";
import Picture from "../waving-dollar.gif";

const LoadingPage = () => (
    <section>
        <LoadingInfo>
            Your exchange rates are loading now from European Central Bank site. Please wait 
            <LoadingDots />
        </LoadingInfo>
        <Image src={Picture} alt="waving dollar" />
    </section>
);

export default LoadingPage;