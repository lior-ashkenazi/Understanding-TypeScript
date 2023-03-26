import React, { useRef } from "react";

import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

const NewTodo = ({ onAddTodo }: NewTodoProps): JSX.Element => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // we know for certain that when we
    // access textInputRef.current, it
    // will be defined (not undefined)
    // therefore the code below is valid
    // although TypeScript (correctly)
    // would warn us if we wouldn't put
    // an exclamation mark after "current"
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
