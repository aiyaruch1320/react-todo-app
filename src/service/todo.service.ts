import httpClient from "../client/client";
import { ITodo } from "../interface/todo";
import { ITodoRequest } from "./../interface/todo";

export const getTodoLists = async () => {
  return httpClient.get<ITodo[]>("/api/todos").then((res) => res.data);
};

export const createTodo = async (todo: ITodoRequest) => {
  return httpClient.post<ITodo>("/api/todos", todo).then((res) => res.data);
};

export const sortTodoLists = async (todoList: ITodo[]) => {
  return httpClient
    .put<ITodo[]>("/api/todos/sort", todoList)
    .then((res) => res.data);
};

export const deleteTodo = async (id: string) => {
  return httpClient.delete<void>(`/api/todos/${id}`);
};
