import React from 'react';
import { Box, Text } from 'shadcn/ui';
import { useUser } from '../components/UserProvider';

const Message = ({ message }) => {
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
        p={2}
        borderRadius="md"
      >
        <Text fontWeight="bold">{message.userName}</Text>
        <Text>{message.text}</Text>
      </Box>
    </Box>
  );
};

export default Message;