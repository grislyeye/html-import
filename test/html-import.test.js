import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';

import '../html-import.js';

stub(window, 'fetch');

function mockApiResponse(response) {
  return new window.Response(response, {
    status: 200,
    headers: { 'Content-type': 'text/html' },
  });
}

describe('HtmlImport', () => {
  const simpleDocument = `
    <html>
      <body>
        <h2>Title</h2>
        <div id="content">
          <p>Content</p>
        </div>
      </body>
    </html>`;

  it('should return empty element when src not specified', async () => {
    window.fetch.resolves(mockApiResponse(simpleDocument));
    const el = await fixture(html`
      <html-import></html-import>
    `);

    expect(el).lightDom.to.equalSnapshot();
  });

  it('should import document body', async () => {
    window.fetch.resolves(mockApiResponse(simpleDocument));
    const el = await fixture(html`
      <html-import src="http://localhost/test"></html-import>
    `);

    expect(el).lightDom.to.equalSnapshot();
  });

  it('should import document body fragment', async () => {
    window.fetch.resolves(mockApiResponse(simpleDocument));

    const el = await fixture(html`
      <html-import src="http://localhost/test#content"></html-import>
    `);

    expect(el).lightDom.to.equalSnapshot();
  });

  const documentWithImage = `
    <html>
      <body>
        <img src="image.png"/>
      </body>
    </html>`;

  it('should re-write image URLs', async () => {
    window.fetch.resolves(mockApiResponse(documentWithImage));

    const el = await fixture(html`
      <html-import src="http://localhost/test/"></html-import>
    `);

    expect(el).lightDom.to.equalSnapshot();
  });
});
