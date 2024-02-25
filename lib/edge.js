// lib/edge.js

import { EdgeFunctions } from '@vercel/edge-functions';

const edge = new EdgeFunctions({
  cache: {
    maxAgeSeconds: 60 * 60 * 24, // 24 hours
    staleWhileRevalidateSeconds: 60 * 60, // 1 hour
  },
});

export default edge;