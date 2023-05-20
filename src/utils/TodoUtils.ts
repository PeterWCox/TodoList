import { Todo, TodoTag } from "../models/Todo";

export class TodoUtils {
  public static getNextTodoId(todos: Todo[]): number {
    if (todos.length === 0) {
      return 1;
    }

    const Ids = todos.map((todo) => todo.id);
    const maxId = Math.max(...Ids);
    return maxId + 1;
  }

  public static getNextTodoTagId(todoTags: TodoTag[]): number {
    if (todoTags.length === 0) {
      return 1;
    }

    const Ids = todoTags.map((todoTag) => todoTag.id);
    const maxId = Math.max(...Ids);
    return maxId + 1;
  }
}
