import styled from "styled-components";

export const StyledSelect = styled.select`
    font-size: 24px;
    box-shadow: 3px -4px 5px 2px ${({ theme }) => theme.color.mineShaft};
    padding: 10px;
    background-color: ${({ theme }) => theme.color.silver};
    flex: 0 3 150px;
    margin: 10px;
    border-radius: 10px;

    &:focus{
        background-color: ${({ theme }) => theme.color.white};
    }

    @media (max-width: 500px) {
        font-size: 20px;
        padding: 5px;
    }
`;