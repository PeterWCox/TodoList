import { ITodo } from "../models/Todo";
import { ApiResponse } from "./BaseServices/ApiBaseService";
import { LocalBaseStorageBaseService } from "./BaseServices/LocalStorageBaseService";

export interface ITodoService {
  get(): Promise<ApiResponse<ITodo[]>>;
  add(todo: ITodo): Promise<ApiResponse<ITodo[]>>;
  updateSingle(todo: ITodo): Promise<ApiResponse<ITodo[]>>;
  updateMultiple(todo: ITodo[]): Promise<ApiResponse<ITodo[]>>;
  remove(id: number): Promise<ApiResponse<ITodo[]>>;
}

export class TodoService_LocalStorage
  extends LocalBaseStorageBaseService<ITodo[]>
  implements ITodoService
{
  constructor() {
    super("todos");
  }

  public add = (todo: ITodo): Promise<ApiResponse<ITodo[]>> => {
    const todos = this.getFromLocalStorage();
    const updatedTodos = todos.results ? [...todos.results, todo] : [todo];
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };

  public get = (): Promise<ApiResponse<ITodo[]>> => {
    const todos = this.getFromLocalStorage();
    return Promise.resolve(todos);
  };

  public updateSingle = (todo: ITodo): Promise<ApiResponse<ITodo[]>> => {
    const todos = this.getFromLocalStorage();
    const updatedTodos = todos.results
      ? todos.results.map((t) => (t.id === todo.id ? todo : t))
      : [todo];
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };

  public updateMultiple = (todos: ITodo[]): Promise<ApiResponse<ITodo[]>> => {
    const updatedTodos = todos;
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };

  public remove = (id: number): Promise<ApiResponse<ITodo[]>> => {
    const todos = this.getFromLocalStorage();
    const updatedTodos = todos.results
      ? todos.results.filter((t) => t.id !== id)
      : [];
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };
}
