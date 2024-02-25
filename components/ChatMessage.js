import React from 'react';
import { Box, Text } from 'shadcn/ui';
import { useUser } from '../components/UserProvider';

const ChatMessage = ({ message }) => {
  const { user } = useUser();
  const isOwnMessage = user && user.id === message.userId;

  return (
    <Box
      display="flex"
      flexDirection={isOwnMessage ? 'row-reverse' : 'row'}
      mb={2}
    >
      <Box
        bg={isOwnMessage ? 'blue.500' : 'gray.300'}
        color={isOwnMessage ? 'white' : 'black'}
        borderRadius="md"
        p={2}
        maxWidth="80%"
      >
        <Text fontWeight="bold">{message.userName}</Text>
        <Text>{message.text}</Text>
      </Box>
    </Box>
  );
};

export default ChatMessage;