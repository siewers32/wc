import {LitElement, html} from 'lit';

export class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Your name here';
  }

  changeName(event) {
    const bla = event.target;
    this.name = bla.value;
  }

  render() {
    // TODO: Add declarative event listener to input.
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter your name">
    `;
  }
}
customElements.define('name-tag', NameTag);
