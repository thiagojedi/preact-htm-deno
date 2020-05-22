import { htm, h, useState } from "./deps.js";

const html = htm.bind(h);

export const App = ({ page }) => {
  /** @type {[string[], Function]} */
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos((todos) => todos.concat(`Item ${todos.length}`));
  };

  return html`
      <div class="app">
        <${Header} name="ToDo's (${page})" />
        <ul>
          ${
    todos.map(
      (todo) =>
        html`
              <li>${todo}</li>
            `,
    )
  }
        </ul>
        <button onClick=${() => addTodo()}>Add Todo</button>
        <${Footer}>footer content here<//>
      </div>
    `;
};

const Header = ({ name }) =>
  html`
    <h1>${name} List</h1>
  `;

const Footer = (props) =>
  html`
    <footer ...${props} />
  `;
