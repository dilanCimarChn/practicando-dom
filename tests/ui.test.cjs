const { test } = require('node:test');
const assert = require('node:assert/strict');
const render = require('./render.cjs');
for (const [url, expected] of [['/about','About'],['/dashboard','Dashboard Component'],['/unknown','Página no encontrada']]) {
  test('route '+url, async () => {
    const html = await render("import { AppRoutes } from './src/App.jsx';", `<MemoryRouter initialEntries={['${url}']}><AppRoutes /></MemoryRouter>`);
    assert.ok(html.includes(expected));
  });
}
