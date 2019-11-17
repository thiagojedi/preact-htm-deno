import htm from "https://unpkg.com/htm@2.2.1/dist/htm.module.js";
import {
  h as preact,
  Component
} from "https://unpkg.com/preact@10.0.5/dist/preact.module.js";

const h = htm.bind(preact);

export class App extends Component {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ page }, { todos = [] }) {
    return h`
      <div class="app">
        <${Header} name="ToDo's (${page})" />
        <ul>
          ${todos.map(
            todo => h`
              <li>${todo}</li>
            `
          )}
        </ul>
        <button onClick=${() => this.addTodo()}>Add Todo</button>
        <${Footer}>footer content here<//>
      </div>
    `;
  }
}
const Header = ({ name }) =>
  h`
    <h1>${name} List</h1>
  `;

const Footer = props =>
  h`
    <footer ...${props} />
  `;
