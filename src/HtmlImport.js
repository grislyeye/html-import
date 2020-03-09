import { LitElement } from 'lit-element';

export class HtmlImport extends LitElement {
  static get properties() {
    return {
      src: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    window
      .fetch(this.src, { mode: 'cors' })
      .then(response => response.text())
      .then(document => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(document, 'text/html');
        const url = new URL(this.src);
        const selector = url.hash ? url.hash : 'body';
        const fragment = dom.querySelector(selector);
        this.shadowRoot.innerHTML = url.hash ? fragment.outerHTML : fragment.innerHTML;
        this.dispatchEvent(new CustomEvent('fetched-html'));
      })
      .catch(error => console.log(error));
  }
}
