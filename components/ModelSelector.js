import React, { useContext } from 'react';
import { DropdownMenu, DropdownItem } from '@radix-ui/react-dropdown-menu';
import { ChatContext } from './ChatProvider';

const ModelSelector = () => {
  const { model, setModel } = useContext(ChatContext);

  const handleModelChange = (newModel) => {
    setModel(newModel);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">AI Model:</span>
      <DropdownMenu>
        <DropdownItem onSelect={() => handleModelChange('openai')}>
          OpenAI
        </DropdownItem>
        <DropdownItem onSelect={() => handleModelChange('anthropic')}>
          Anthropic
        </DropdownItem>
        <DropdownItem onSelect={() => handleModelChange('huggingface')}>
          Hugging Face
        </DropdownItem>
        <DropdownItem onSelect={() => handleModelChange('langchain')}>
          LangChain
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
};

export default ModelSelector;