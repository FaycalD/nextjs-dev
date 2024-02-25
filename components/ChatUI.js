import React, { useContext } from 'react';
import { ChatContext } from './ChatProvider';
import { UserContext } from './UserProvider';
import { ModelContext } from './ModelSelector';
import ChatInput from './ChatInput';
import ChatHistory from './ChatHistory';
import ModelSelector from './ModelSelector';
import TenantSelector from './TenantSelector';
import { Box } from 'shadcn/ui';
import 'tailwindcss/tailwind.css';

const ChatUI = () => {
  const { user } = useContext(UserContext);
  const { model } = useContext(ModelContext);
  const { messages } = useContext(ChatContext);

  return (
    <Box className="flex flex-col h-full p-4 bg-gray-100">
      <Box className="flex justify-between items-center mb-4">
        <TenantSelector />
        <ModelSelector />
      </Box>
      <ChatHistory messages={messages} />
      <ChatInput user={user} model={model} />
    </Box>
  );
};

export default ChatUI;