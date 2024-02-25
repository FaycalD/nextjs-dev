```javascript
import { OpenAI, Anthropic, HuggingFace, LangChain } from 'ai-models';

export const DEFAULT_MODEL = 'openai';

export const models = {
  openai: new OpenAI(),
  anthropic: new Anthropic(),
  huggingface: new HuggingFace(),
  langchain: new LangChain(),
};

export function getModel(name = DEFAULT_MODEL) {
  return models[name] || models[DEFAULT_MODEL];
}
```