import { useState } from "react";
import { ITodo } from "../../interface/todo";

export const TextInput = ({
  todos,
  addTodo,
}: {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
}) => {
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
      id: String(todos.length + 1),
      content: input,
      completed: false,
      order: todos.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
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
