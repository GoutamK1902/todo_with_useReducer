import React, { useReducer, useState } from "react";
import Todos from "./components/Todos";
import { ACTIONS } from "./actions";
import "./App.css";

export default function App() {
  const [todos, dispatchTodos] = useReducer(todosReducer, [
    { id: "001", name: "ADD CSS", completed: false },
  ]);
  const [name, setName] = useState("");

  function todosReducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:
        console.log(action.payload.id);
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        console.log(action.payload.id);
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, completed: false };
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatchTodos({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);

  return (
    <div className="main">
      <h1>To Do's</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <Todos key={todo.id} todo={todo} dispatchTodos={dispatchTodos} />
        ))}
      </ul>
    </div>
  );
}
