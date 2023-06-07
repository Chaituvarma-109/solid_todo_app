import { createSignal, For } from "solid-js";

function App() {
  const [todo, setTodo] = createSignal([]);

  const getTodo = (e) => {
    e.preventDefault();

    const todoitem = document.querySelector("#userinput");
    setTodo([todoitem.value, ...todo()]);
  };

  return (
    <>
      <form onSubmit={(e) => getTodo(e)}>
        <input type="text" placeholder="enter a todo" id="userinput" required />
        <button>add</button>
        <p>todo items</p>
      </form>
      <For each={todo()}>
        {(todo) => (
          <ul>
            <li>{todo}</li>
          </ul>
        )}
      </For>
    </>
  );
}

export default App;
