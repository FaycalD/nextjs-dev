```javascript
import { VercelAI } from '@vercel/ai';
import { OpenAI, Anthropic, HuggingFace, LangChain } from 'ai-models';

const DEFAULT_MODEL = 'openai';

const models = {
  openai: OpenAI,
  anthropic: Anthropic,
  huggingface: HuggingFace,
  langchain: LangChain,
};

export function getModel(name = DEFAULT_MODEL) {
  const Model = models[name.toLowerCase()];

  if (!Model) {
    throw new Error(`Unsupported AI model: ${name}`);
  }

  return new Model();
}

export function getVercelAI() {
  return new VercelAI();
}
```