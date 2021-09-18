import React from "react";

const TodoList = ({ todo, removeTodo }) => {
  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div>
      <li>
        <button onClick={handleRemoveTodo}>x</button>
        <div>{todo.text}</div>
      </li>
    </div>
  );
};

export default TodoList;
