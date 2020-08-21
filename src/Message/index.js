import React from 'react';
import { MessageContent } from "./styled";

const Message = ({ content, info, warning }) => (
    <MessageContent info={info} warning={warning}>
        {content}
    </MessageContent>
);

export default Message;