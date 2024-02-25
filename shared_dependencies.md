Shared Dependencies:

1. Next.js: Used in all pages and server components for routing and server-side rendering.
2. React: Used in all components for creating UI.
3. React Server Components (RSCs), Suspense, and Server Actions: Used in server components and pages for server-side rendering and data fetching.
4. Vercel AI SDK: Used in chat-related components and lib/ai.js for streaming chat UI.
5. AI Models (OpenAI, Anthropic, Hugging Face, LangChain): Used in lib/ai.js and ModelSelector component for AI chat functionality.
6. Edge Runtime: Used in lib/edge.js and potentially in other server components for edge computing.
7. shadcn/ui: Used in all components for UI design.
8. Tailwind CSS: Used in all components and global styles for styling.
9. Radix UI: Used in all components for headless component primitives.
10. Phosphor Icons: Used in all components for icons.
11. Supabase Postgres DB: Used in lib/db.js and chat-related components for chat history.
12. Supabase Auth: Used in lib/auth.js, Login, Logout, and UserProvider components for authentication.
13. Exported Variables: UserProvider, MessageProvider, and ChatProvider provide shared state across components.
14. Data Schemas: Used in lib/db.js for defining chat history schema.
15. DOM Element IDs: Used in components for referencing DOM elements.
16. Message Names: Used in chat-related components and lib/chat.js for handling chat messages.
17. Function Names: Used across all components and lib files for defining functionality.