import React from 'react';
import { Spinner } from '@radix-ui/react-spinner';
import 'tailwindcss/tailwind.css';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner className="text-blue-500" />
    </div>
  );
};

export default Loading;