import React, { useContext } from 'react';
import { MessageContext } from './MessageProvider';
import { UserContext } from './UserProvider';
import { Box, Text } from 'shadcn/ui';
import { PhosphorIcon } from 'phosphor-react';
import 'tailwindcss/tailwind.css';

const MessageUI = () => {
  const { messages } = useContext(MessageContext);
  const { user } = useContext(UserContext);

  return (
    <Box className="overflow-y-auto flex flex-col space-y-4 p-3">
      {messages.map((message, index) => (
        <Box
          key={index}
          className={`flex items-start space-x-2 ${
            message.user === user ? 'justify-end' : ''
          }`}
        >
          <PhosphorIcon name="chat" className="h-6 w-6 text-gray-500" />
          <Box className="bg-gray-200 rounded-lg p-2">
            <Text className="font-bold">{message.user}</Text>
            <Text>{message.text}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MessageUI;