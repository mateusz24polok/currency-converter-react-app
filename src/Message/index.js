import React from 'react';
import "./style.css";

const Message = ({content})=>(
    <p className="calculatorForm__Message">
        {content}
    </p>
);

export default Message;