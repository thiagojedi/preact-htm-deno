import htm from 'https://unpkg.com/htm@2.2.1/dist/htm.module.js';
import { h } from 'https://unpkg.com/preact@10.0.5/dist/preact.module.js';
const html = htm.bind(h);

import { App } from './app.js';
import { renderToString } from "https://unpkg.com/preact-render-to-string?module";
const body = renderToString(html`
  <html>
    <head>
      <script src="/client.js" type="module"></script>
    </head>
    <body>
      <${App} page="All" />
    </body>
  </html>
`);

import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

const router = new Router();
router
  .get("/", context => {
    context.response.body = body;
  });

app.use(router.routes());
app.use(async context => {
  await send(context, context.request.path, {
    root: Deno.cwd()
  });
});

await app.listen("127.0.0.1:8000");
