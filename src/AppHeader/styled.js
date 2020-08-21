import styled from "styled-components";

export const Title = styled.h1`
    color: rgba(157, 233, 145, 0.76);
    text-align: center;
    margin: 50px 0;
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Itim", cursive;

    @media (max-width: 500px) {
          margin: 40px auto;
          font-size: 24px;
          letter-spacing: 1px;
  }
`;