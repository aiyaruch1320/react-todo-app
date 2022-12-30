export interface ITodo extends Omit<ITodoRequest, "id"> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoRequest {
  content: string;
  completed: boolean;
  order: number;
}
