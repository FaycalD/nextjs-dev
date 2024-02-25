import { useState } from 'react';
import { useChat } from '../lib/chat';
import { Button, Input } from 'shadcn/ui';
import { ArrowRight } from 'phosphor-react';

export default function ChatInput() {
  const [message, setMessage] = useState('');
  const { sendMessage } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    sendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="flex-grow"
      />
      <Button type="submit" className="flex items-center space-x-1">
        <ArrowRight size={24} />
        <span>Send</span>
      </Button>
    </form>
  );
}