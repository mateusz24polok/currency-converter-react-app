import React from 'react';
import "./style.css";

const Button = ({buttonContent})=>(
    <button 
    className="calculatorForm__calculateButton" 
    type="button">
    {buttonContent}
  </button>
);

export default Button;