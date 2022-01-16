// Litelement is imported
import { html, css, LitElement } from 'lit';

//I think this creates a new class called helloworld from litelement
export class HelloWorld extends LitElement { 
  static get styles() {
    //creates the css style
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      } //created the css style
    `;
  }
//I think this is creating the title and defining the type of objects they are
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }
// Not too sure but I think this is what actually creates the component. I know the 5 is the base number before it is incremented,
  //so I think it is establishing the base, or iteration 0
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }
// Creating the iterations each time the increment button is clicked
  __increment() {
    this.counter += 1;
  }
// creates the title and the button on the page, not entirely sure what render means
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
