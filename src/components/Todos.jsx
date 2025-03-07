import React from "react";
import { ACTIONS } from "../actions";
import "../App.css";

export default function Todos({ todo, dispatchTodos }) {
  return (
    <div className="todo">
      <div
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
        className="task"
      >
        {todo.name}
      </div>
      <button
        onClick={() => {
          dispatchTodos({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        {todo.completed ? "Undo🔁" : "done✅"}
      </button>
      <button
        onClick={() => {
          dispatchTodos({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        Delete 🗑️
      </button>
    </div>
  );
}
