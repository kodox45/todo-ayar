import React, { useState } from "react";
import { generateId } from "./generateId";

const Todo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isi = {
      id: generateId(),
      text: todo,
    };
    if (todo.length > 0) {
      addTodo(isi);
      setTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} />
        <input type="submit" />
      </form>
      <h1>{Todo}</h1>
    </div>
  );
};

export default Todo;
