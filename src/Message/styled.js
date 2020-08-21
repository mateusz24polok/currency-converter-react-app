import styled, { css } from "styled-components";

export const MessageContent = styled.p`
    height: 80px;
    width: 400px;
    font-size: 24px;
    margin: 30px auto;
    text-align: center;
    opacity: 0;
    color: transparent;
    transition: opacity 0.2s linear;
    line-height: 1;

    @media (max-width: 500px) {
        height: 80px;
        width: 200px;
        font-size: 20px;
        margin: 20px auto;
}

    ${({ warning }) => (warning && css`
        opacity: 1;
        color: red;
    `)}

    ${({ info }) => (info && css`
        opacity: 1;
        color: rgba(157, 233, 145, 0.76);
    `)}
`;