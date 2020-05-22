import { htm, h } from "./deps.js";
import { renderToString } from "https://cdn.pika.dev/preact-render-to-string";
import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak/mod.ts";

import { App } from "./app.js";

const html = htm.bind(h);

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

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = body;
  });

const app = new Application();
app.use(router.routes());
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: Deno.cwd(),
  });
});

await app.listen("127.0.0.1:8000");
