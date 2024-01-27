import {LitElement, html} from 'lit';

export class ToDoList extends LitElement {
  static properties = {
    _listItems: {state: true},
  };

  constructor() {
    super();
    this._listItems = [
      {text: 'Start Lit tutorial', completed: true},
      {text: 'Make to-do list', completed: false},
    ];
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
         ${this._listItems.map((item) =>
          html`<li>${item.text}</li>`
          )}
      </ul>
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
    `;
  }
  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }
  // TODO: Add click handler.
  addToDo() {
    this._listItems = [...this._listItems,
      {text: this.input.value, completed: false}];
    this.input.value = '';
  }
}
customElements.define('to-do-list', ToDoList);
