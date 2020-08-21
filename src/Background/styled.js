import styled from "styled-components";

export const BackgroundImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-image: url("https://storage.needpix.com/rsynced_images/currency-3321101_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const BackgroundColorContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(10, 10, 10, 0.705);
`;