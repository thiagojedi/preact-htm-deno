import { htm, h, hydrate } from "./deps.js";

const html = htm.bind(h);

import { App } from "./app.js";

hydrate(html`<${App} page="Client" />`, document.body);
