import styled from "styled-components";

export const FirstLoadingDot = styled.span`
    display: inline-block;
    color: red;
    transform:translateY(0);
    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;


    @keyframes loading {
        0% {
            transform: translateY(0);
        }

        33.33%{
            transform: translateY(-25%);
        }

        66.66%{
            transform: translateY(0);
        }
        
        100%{
            transform: translateY(0);
        }
    }
`;

export const SecondLoadingDot = styled(FirstLoadingDot)`
        animation-name: loading2;
        @keyframes loading2 {
        0% {
            transform: translateY(0);
        }

        33.33%{
            transform: translateY(0);
        }

        66.66%{
            transform: translateY(-25%);
        }
        
        100%{
            transform: translateY(0);
        }
    }
`;

export const LastLoadingDot = styled(FirstLoadingDot)`
        animation-name: loading3;
        @keyframes loading3 {
        0% {
            transform: translateY(0);
        }

        66.66%{
            transform: translateY(0);
        }
        
        100%{
            transform: translateY(-25%);
        }
    }
`;