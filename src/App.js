import React, { useState } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const removeTodo = (removeTodo) => {
    setTodos((removeTodos) =>
      removeTodos.filter((removeTodo2) => removeTodo2.id !== removeTodo)
    );
  };

  return (
    <div>
      <Todo addTodo={addTodo} />
      <ul>
        {todos.map((todo2) => (
          <TodoList key={todo2.id} todo={todo2} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
