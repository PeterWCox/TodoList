import { ITodo } from "../models/Todo";

export class TodoUtils {
  public static getNextId(todos: ITodo[]): number {
    if (todos.length === 0) {
      return 1;
    }

    const Ids = todos.map((todo) => todo.id);
    const maxId = Math.max(...Ids);
    return maxId + 1;
  }
}
