import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon';

import '../html-import.js';

stub(window, 'fetch');

const response = `
  <html>
    <body>
      <h2>Title</h2>
      <p id="content">Content</p>
    </body>
  </html>`;

function mockApiResponse() {
  return new window.Response(response, {
    status: 200,
    headers: { 'Content-type': 'text/html' },
  });
}

describe('HtmlImport', () => {
  window.fetch.resolves(mockApiResponse());

  it('should import document body', async () => {
    const el = await fixture(html`
      <html-import src="http://localhost/test"></html-import>
    `);

    await oneEvent(el, 'fetched-html');

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('should import document body fragment', async () => {
    window.fetch.resolves(mockApiResponse());

    const el = await fixture(html`
      <html-import src="http://localhost/test#content"></html-import>
    `);

    await oneEvent(el, 'fetched-html');

    expect(el).shadowDom.to.equalSnapshot();
  });
});
