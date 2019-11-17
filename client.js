import htm from 'https://unpkg.com/htm@2.2.1/dist/htm.module.js';
import { h, hydrate } from 'https://unpkg.com/preact@10.0.5/dist/preact.module.js';
import { App } from './app.js';

const html = htm.bind(h);

hydrate(html`<${App} page="All" />`, document.body);