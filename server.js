import * as Middleware from '~/common/middleware';

import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import compression from 'compression';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 1337;
const app = next({ dev, quiet: false });
const nextRequestHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  server.use(Middleware.CORS);
  server.use('/public', express.static('public'));
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  server.get('/health', async (req, res) => {
    res.send('ok');
  });

  server.get('*', async (req, res) => {
    return nextRequestHandler(req, res, req.url);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }

    console.log(`[ prototype ] http://localhost:${port}`);
  });
});
