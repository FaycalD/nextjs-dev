import React, { useContext, useEffect, useState } from 'react';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import { ChatHistory } from './ChatHistory';
import { UserContext } from './UserProvider';
import { MessageContext } from './MessageProvider';
import { ChatContext } from './ChatProvider';
import { ModelSelector } from './ModelSelector';
import { TenantSelector } from './TenantSelector';
import { Loading } from './Loading';
import { Logout } from './Logout';
import { useAuth } from '../lib/auth';
import { useChat } from '../lib/chat';
import { useAI } from '../lib/ai';
import { useTenant } from '../lib/tenant';
import { useUI } from '../lib/ui';
import { Box } from 'shadcn/ui';

export const Chat = () => {
  const { user, loading } = useAuth();
  const { messages, addMessage } = useContext(MessageContext);
  const { chat, sendChat } = useContext(ChatContext);
  const { model, setModel } = useAI();
  const { tenant, setTenant } = useTenant();
  const { ui, setUI } = useUI();

  useEffect(() => {
    if (user) {
      addMessage({ user: 'system', text: `Welcome back, ${user.name}` });
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Logout />;
  }

  return (
    <Box className="chat">
      <TenantSelector tenant={tenant} setTenant={setTenant} />
      <ModelSelector model={model} setModel={setModel} />
      <ChatHistory messages={messages} />
      <ChatInput onSend={sendChat} />
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </Box>
  );
};