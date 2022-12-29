import { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./components/ItemList";
import { TextInput } from "./components/TextInput";
import { ITodo } from "./interface/todo";
import { getTodoList } from "./service/todo.service";

function App() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  useEffect(() => {
    getTodoList().then((res) => setTodo(res));
  }, []);
  return (
    <div className="App">
      <h1>Drag and Drop</h1>
      <TextInput todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
