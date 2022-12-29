export interface ITodo extends Omit<ITodoRequest, "id"> {
  id: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodoRequest {
  id?: string;
  content: string;
  order: number;
}
