import { Todo } from '../models/Todo'

export class TodoUtils {
    public static getTodosFilteredBySearchterm(
        todos: Todo[],
        searchTerm: string
    ): Todo[] {
        if (!searchTerm) return todos

        return todos.filter((todo: Todo) => {
            return todo.title?.toLowerCase()?.includes(searchTerm.toLowerCase())
        })
    }
}
