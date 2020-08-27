import styled from "styled-components"

export const StyledInput = styled.input`
    width: 100%;
    font-size: 24px;
    padding: 10px;
    box-shadow: 3px -4px 5px 2px ${({ theme }) => theme.color.mineShaft};
    margin: 10px;
    background-color: ${({ theme }) => theme.color.silver};
    border: none;
    flex: 0 1 200px;
    border-radius: 10px;

    &:focus{
        background-color: ${({ theme }) => theme.color.white};
    }

    @media (max-width: 500px) {
        font-size: 20px;
        padding: 5px;
    }
`;