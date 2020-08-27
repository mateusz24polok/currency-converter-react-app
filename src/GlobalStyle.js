import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        height: 100%;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body{
        position: relative;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;