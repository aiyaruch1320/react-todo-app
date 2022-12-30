import { useEffect, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import "./App.css";
import { TodoList } from "./components/ItemList";
import { TextInput } from "./components/TextInput";
import { ITodo } from "./interface/todo";
import {
  createTodo,
  deleteTodo,
  getTodoList,
  sortTodoList,
} from "./service/todo.service";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const todoList = await getTodoList();
      setTodos(todoList);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (todo: ITodo) => {
    try {
      await createTodo(todo);
      setTodos([...todos, todo]);
    } catch (error) {
      console.error(error);
    }
  };

  const sortTodos = async (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    const newTodos = [...todos];
    const [movedTodo] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, movedTodo);
    newTodos.map((todo, index) => (todo.order = index + 1));
    try {
      await sortTodoList(newTodos);
      setTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const removeTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Drag and Drop</h1>
      <TextInput todos={todos} addTodo={addTodo} />
      <TodoList sortTodos={sortTodos} todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
