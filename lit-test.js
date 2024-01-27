import {LitElement, html} from 'lit';

export class LitTest extends LitElement {
  static properties = {
    message: {},
  };

  constructor() {
    super();
    this.message = 'Hello again';
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.message} code.</p>
    `;
  }
}
customElements.define('lit-test', LitTest);
