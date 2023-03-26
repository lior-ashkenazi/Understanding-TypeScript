import React, { useState } from "react";
import { Todo } from "./todo.model";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) =>
      // new and BETTER way for updating
      // states thanks to Maximilian!
      [...prevTodos, { id: Math.random().toLocaleString(), text }]
    );
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
