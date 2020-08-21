import React from 'react';
import { StyledButton } from "./styled";

const Button = ({ buttonContent, onClick }) => (
  <StyledButton
    type="button"
    onClick={onClick}>
    {buttonContent}
  </StyledButton>
);

export default Button;