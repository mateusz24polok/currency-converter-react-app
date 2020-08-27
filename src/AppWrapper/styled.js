import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 600px;
    background: ${({theme})=>theme.color.eden};
    padding: 5px 40px;
    box-shadow: 3px -4px 5px 2px ${({theme})=>theme.color.mineShaft};
    margin: 20px;
    border-radius: 20px;

    @media (max-width: 500px) {
        padding: 0 10px;
        margin: 10px;
    }
`;