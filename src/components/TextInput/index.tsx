import { useState } from "react";
import { ITodo } from "../../interface/todo";

export const TextInput = ({
  todo,
  setTodo,
}: {
  todo: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
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

    setTodo([
      ...todo,
      {
        id: String(todo.length + 1),
        content: input,
        completed: false,
        order: todo.length + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
