import { useEffect, useState } from 'react';
import { useSupabase } from '../lib/db';
import { useUser } from '../components/UserProvider';
import ChatMessage from './ChatMessage';

export default function ChatHistory() {
  const supabase = useSupabase();
  const { user } = useUser();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (user) {
      fetchChatHistory();
    }
  }, [user]);

  async function fetchChatHistory() {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Error fetching chat history:', error);
    } else {
      setMessages(data);
    }
  }

  return (
    <div className="overflow-y-auto h-full">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}