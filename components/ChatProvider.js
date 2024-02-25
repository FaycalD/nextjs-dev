import React, { createContext, useState, useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { getChatHistory } from '../lib/chat';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { user } = useAuth();
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    if (user) {
      getChatHistory(user.id).then(setChatHistory);
    }
  }, [user]);

  return (
    <ChatContext.Provider value={{ chatHistory, setChatHistory }}>
      {children}
    </ChatContext.Provider>
  );
}