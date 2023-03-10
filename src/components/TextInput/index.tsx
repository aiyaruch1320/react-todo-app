import { useState } from "react";
import { useTodoContext } from "../../context/todo.context";

export const TextInput = () => {
  const { todos, addTodo } = useTodoContext();
  const [input, setInput] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) {
      return;
    }
    addTodo({
      content: input,
      completed: false,
      order: todos.length + 1,
    });
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
