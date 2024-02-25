import { useState, useEffect } from 'react';
import { useChat } from '../lib/chat';
import { useAI } from '../lib/ai';
import { useTenant } from '../lib/tenant';
import { useAuth } from '../lib/auth';
import { useEdge } from '../lib/edge';
import { useUI } from '../lib/ui';
import { useModel } from '../lib/model';
import { useServerAction } from './ServerAction';
import { useSuspense } from './Suspense';

export default function ServerComponent() {
  const { user } = useAuth();
  const { tenant } = useTenant();
  const { edge } = useEdge();
  const { ui } = useUI();
  const { model } = useModel();
  const { chat, sendChat } = useChat();
  const { ai, sendAI } = useAI();
  const { serverAction, sendServerAction } = useServerAction();
  const { suspense, sendSuspense } = useSuspense();

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user && tenant && edge && ui && model && chat && ai && serverAction && suspense) {
      sendChat(message);
      sendAI(message);
      sendServerAction(message);
      sendSuspense(message);
    }
  }, [user, tenant, edge, ui, model, chat, ai, serverAction, suspense, message]);

  const handleSend = () => {
    setMessage('');
  };

  return (
    <div className="server-component">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}