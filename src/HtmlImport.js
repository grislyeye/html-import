export class HtmlImport extends HTMLElement {
  connectedCallback() {
    const importUrl = this.getAttribute('src');

    if (importUrl) {
      window
        .fetch(importUrl, { mode: 'cors' })
        .then(response => response.text())
        .then(document => {
          const parser = new DOMParser();
          const dom = parser.parseFromString(document, 'text/html');

          Array.from(dom.querySelectorAll('*[src]')).forEach(el => {
            const src = el.getAttribute('src');
            const rewrittenSrc = new URL(src, importUrl);
            el.setAttribute('src', rewrittenSrc);
          });

          const url = new URL(importUrl);
          const selector = url.hash ? url.hash : 'body';
          const fragment = dom.querySelector(selector);
          this.innerHTML = fragment.innerHTML;
        });
    }
  }
}
