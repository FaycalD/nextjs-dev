import { VercelRequest, VercelResponse } from '@vercel/node';
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

export default async (req: VercelRequest, res: VercelResponse) => {
  const { pathname, query } = parse(req.url || '', true);
  const server = createServer((req, res) => handle(req, res, parse(req.url || '', true)));
  await app.prepare();
  server.listen();
  handle(req, res, { pathname, query });
};