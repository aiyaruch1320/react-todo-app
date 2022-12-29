import { ITodo } from "../interface/todo";
import { ITodoRequest } from "./../interface/todo";

export const getTodoList = async () => {
  const listItems: ITodo[] = [
    {
      id: "1",
      content: "Study Spanish",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      order: 1,
    },
    {
      id: "2",
      content: "Workout",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      order: 2,
    },
  ];
  return listItems;
};

export const createTodo = async (todo: ITodoRequest) => {
  return {
    ...todo,
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const sortTodoList = async (todoList: ITodo[]) => {
  // return todoList.sort((a, b) => a.order - b.order);
};

export const deleteTodo = async (id: string) => {
  return id;
};
