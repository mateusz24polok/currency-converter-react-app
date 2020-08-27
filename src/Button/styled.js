import styled from "styled-components";

export const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
    border: none;
    font-size: 24px;
    padding: 10px;
    box-shadow: 3px -4px 5px 2px ${({theme})=>theme.color.mineShaft};
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.silver};
    transition: background-color 0.15s linear;
    border-radius: 10px;

    &:hover{
        background-color: ${({ theme }) => theme.color.white};
    }

    @media (max-width: 500px) {
        font-size: 20px;
        padding: 5px;
    }
`;