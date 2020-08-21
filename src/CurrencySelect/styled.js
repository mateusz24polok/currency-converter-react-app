import styled from "styled-components";

export const StyledSelect = styled.select`
    font-size: 24px;
    box-shadow: 3px -4px 5px 2px rgba(50, 50, 50, 0.75);
    padding: 10px;
    background-color: rgba(199, 194, 194, 0.801);
    flex: 0 3 150px;
    margin: 10px;
    border-radius: 10px;

    &:focus{
        background-color: white;
    }

    @media (max-width: 500px) {
        font-size: 20px;
        padding: 5px;
    }
`;