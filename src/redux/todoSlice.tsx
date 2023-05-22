import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../models/Todo'

export interface TodoState {
    todos: Todo[]
    completedTodos: Todo[]
}

const initialState: TodoState = {
    todos: [],
    completedTodos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos.length > 0 ? state.todos.length + 1 : 1,
                    title: 'Example text',
                    isCompleted: false,
                },
            ]
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateSingleTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo = action.payload
                }
                return todo
            })
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateMultipleTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
    },
})

export const { addTodo, updateSingleTodo, updateMultipleTodos, deleteTodo } =
    todoSlice.actions

export default todoSlice.reducer
