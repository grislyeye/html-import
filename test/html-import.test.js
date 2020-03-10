import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../html-import.js';

stub(window, 'fetch');

const response = `
  <html>
    <body>
      <h2>Title</h2>
      <div id="content">
        <p>Content</p>
      </div>
    </body>
  </html>`;

function mockApiResponse() {
  return new window.Response(response, {
    status: 200,
    headers: { 'Content-type': 'text/html' },
  });
}

describe('HtmlImport', () => {
  it('should return empty element when src not specified', async () => {
    window.fetch.resolves(mockApiResponse());
    const el = await fixture(html`
      <html-import></html-import>
    `);

    expect(el).lightDom.to.equalSnapshot();
  });

  it('should import document body', async () => {
    window.fetch.resolves(mockApiResponse());
    const el = await fixture(html`
      <html-import src="http://localhost/test"></html-import>
    `);

    expect(el).lightDom.to.equalSnapshot();
  });

  it('should import document body fragment', async () => {
    window.fetch.resolves(mockApiResponse());

    const el = await fixture(html`
      <html-import src="http://localhost/test#content"></html-import>
    `);

    expect(el).lightDom.to.equalSnapshot();
  });
});
