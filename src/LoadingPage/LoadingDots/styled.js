import styled from "styled-components";

export const FirstLoadingDot = styled.span`
    display: inline-block;
    color: ${ ({ theme }) => theme.color.silver};
    transform:translateY(0);
    animation-name: firstDotLoading;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;


    @keyframes firstDotLoading {
        0% {
            transform: translateY(0);
        }

        25% {
            transform: translateY(-25%);
        }

        50% {
            transform: translateY(0);
        }
        
        100% {
            transform: translateY(0);
        }
    }
`;

export const SecondLoadingDot = styled(FirstLoadingDot)`
        animation-name: secondDotLoading;
        @keyframes secondDotLoading {
        0% {
            transform: translateY(0);
        }

        25% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-25%);
        }

        75% {
            transform: translateY(0);
        }
        
        100%{
            transform: translateY(0);
        }
    }
`;

export const LastLoadingDot = styled(FirstLoadingDot)`
        animation-name: LastDotLoading;
        @keyframes LastDotLoading {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(0);
        }
        
        75% {
            transform: translateY(-25%);
        }

        100% {
            transform: translateY(0);
        }
    }
`;