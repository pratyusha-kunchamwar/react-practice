import { useState } from "react";
import "./App.css";

function App() {
  const [item, SetItem] = useState("");
  const [todos, SetTodo] = useState([]);
  const [edit, SetEdit] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (edit) {
      SetTodo((prev) => {
        return prev.map((todo) => {
          if (todo.id === edit) {
            return { ...todo, value: item };
          } else {
            return todo;
          }
        });
      });
      SetEdit(null);
    } else {
      SetTodo((prev) => [
        ...prev,
        { id: Date.now(), value: item, complete: false },
      ]);
    }
    SetItem("");
  }
  function handleDelete(id) {
    SetTodo((prev) => prev.filter((todo) => todo.id !== id));
  }
  function handleEdit(value, id) {
    SetItem(value);
    SetEdit(id);
  }
  function handleDoubleClick(id) {
    SetTodo((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    });
  }
  function handleCancle() {
    SetItem(" ");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>ToDo List</h1>
        <input
          type="text"
          value={item}
          onChange={(e) => SetItem(e.target.value)}
        />
        <button>{!edit ? " submit " : "Update"}</button>
        <button onClick={handleCancle} type="reset">
          {" "}     
          cancel
        </button>
      </form>
      <h2>TodoList</h2>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onDoubleClick={() => handleDoubleClick(todo.id)}
            style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          >
            {todo.value}
            <button onClick={() => handleEdit(todo.value, todo.id)}>
              Edit
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
