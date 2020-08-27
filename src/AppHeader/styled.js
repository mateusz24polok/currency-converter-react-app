import styled from "styled-components";

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.apple};
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