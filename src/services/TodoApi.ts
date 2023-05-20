import { Todo } from "../models/Todo";
import { ApiResponse } from "./BaseServices/ApiBaseService";
import { LocalBaseStorageBaseService } from "./BaseServices/LocalStorageBaseService";

export interface ITodoService {
  get(): Promise<ApiResponse<Todo[]>>;
  add(todo: Todo): Promise<ApiResponse<Todo[]>>;
  updateSingle(todo: Todo): Promise<ApiResponse<Todo[]>>;
  updateMultiple(todo: Todo[]): Promise<ApiResponse<Todo[]>>;
  remove(id: number): Promise<ApiResponse<Todo[]>>;
}

export class TodoService_LocalStorage
  extends LocalBaseStorageBaseService<Todo[]>
  implements ITodoService
{
  constructor() {
    super("todos");
  }

  public add = (todo: Todo): Promise<ApiResponse<Todo[]>> => {
    const todos = this.getFromLocalStorage();
    const updatedTodos = todos.results ? [...todos.results, todo] : [todo];
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };

  public get = (): Promise<ApiResponse<Todo[]>> => {
    const todos = this.getFromLocalStorage();
    return Promise.resolve(todos);
  };

  public updateSingle = (todo: Todo): Promise<ApiResponse<Todo[]>> => {
    const todos = this.getFromLocalStorage();
    const updatedTodos = todos.results
      ? todos.results.map((t) => (t.id === todo.id ? todo : t))
      : [todo];
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };

  public updateMultiple = (todos: Todo[]): Promise<ApiResponse<Todo[]>> => {
    const updatedTodos = todos;
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };

  public remove = (id: number): Promise<ApiResponse<Todo[]>> => {
    const todos = this.getFromLocalStorage();
    const updatedTodos = todos.results
      ? todos.results.filter((t) => t.id !== id)
      : [];
    const returnedTodos = this.setLocalStorage(updatedTodos);
    return Promise.resolve(returnedTodos);
  };
}
