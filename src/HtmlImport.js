export class HtmlImport extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src');

    if (src) {
      window
        .fetch(src, { mode: 'cors' })
        .then(response => response.text())
        .then(document => {
          const parser = new DOMParser();
          const dom = parser.parseFromString(document, 'text/html');
          const url = new URL(src);
          const selector = url.hash ? url.hash : 'body';
          const fragment = dom.querySelector(selector);
          this.innerHTML = fragment.innerHTML;
        });
    }
  }
}
