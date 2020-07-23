import React from 'react';
import "./style.css";

const Button = ({buttonContent, onClick})=>(
    <button 
    className="calculatorForm__calculateButton" 
    type="button"
    onClick = {onClick}>
    {buttonContent}
  </button>
);

export default Button;