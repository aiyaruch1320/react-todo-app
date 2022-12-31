import React, { useContext, useEffect, useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { ITodo, ITodoRequest } from "../interface/todo";
import {
  createTodo,
  deleteTodo,
  getTodoLists,
  sortTodoLists,
} from "../service/todo.service";

interface ITodoContext {
  todos: ITodo[];
  addTodo: (todo: ITodoRequest) => void;
  sortTodos: (result: DropResult) => void;
  removeTodo: (id: string) => void;
}

const TodoContext = React.createContext<ITodoContext>({} as ITodoContext);

export const TodoWrapper = ({ children }: { children: JSX.Element }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const todoList = await getTodoLists();
      setTodos(todoList.sort((a, b) => a.order - b.order));
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (todo: ITodoRequest) => {
    try {
      const createdTodo = await createTodo(todo);
      const newTodos = [...todos, createdTodo];
      newTodos.map((todo, index) => (todo.order = index + 1));
      await sortTodoLists(newTodos);
      setTodos([...todos, createdTodo]);
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
      await sortTodoLists(newTodos);
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
    <>
      <TodoContext.Provider value={{ todos, addTodo, sortTodos, removeTodo }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};

export function useTodoContext() {
  return useContext(TodoContext);
}
