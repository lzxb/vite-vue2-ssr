import fs from 'fs';
import path from 'path';
import express from 'express';
import { render } from './dist/server/entry-server.js';


async function createServer() {
  const app = express()

  app.use(
    '/assets/',
    express.static('./dist/client/assets', {
        immutable: true,
        maxAge: '31536000000'
    })
);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
  
    try {
      let template = fs.readFileSync(
        path.resolve('./dist/client/index.html'),
        'utf-8'
      )

      const appHtml = await render(url)

      const html = template.replace(`<!--ssr-outlet-->`, appHtml)
  
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {

      next(e)
    }
  })

  app.listen(3000)
  console.log('http://localhost:3000')
}

createServer()