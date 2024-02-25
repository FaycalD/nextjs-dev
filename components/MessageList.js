import React, { useContext } from 'react';
import { MessageContext } from './MessageProvider';
import Message from './Message';
import { List } from '@radix-ui/react-dropdown-menu';
import 'tailwindcss/tailwind.css';

const MessageList = () => {
  const { messages } = useContext(MessageContext);

  return (
    <List className="overflow-y-auto h-full">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </List>
  );
};

export default MessageList;