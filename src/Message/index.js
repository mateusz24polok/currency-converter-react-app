import React from 'react';
import "./style.css";

const Message = ({content, extraClass})=>(
    <p className={`calculatorForm__Message ${extraClass}`}>
        {content}
    </p>
);

export default Message;