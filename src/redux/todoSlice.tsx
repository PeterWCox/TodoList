import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../models/Todo'
import { faker } from '@faker-js/faker'

export interface TodoState {
    todos: Todo[]
    completedTodos: Todo[]
}

const initialState: TodoState = {
    todos: [],
    completedTodos: [],
}

const updateLocalStorage = (state: TodoState) => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
    localStorage.setItem('completedTodos', JSON.stringify(state.completedTodos))
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state) => {
            state.todos = [
                ...state.todos,
                {
                    id: state.todos?.length > 0 ? state.todos?.length + 1 : 1,
                    title: 'Example text',
                    isCompleted: false,
                },
            ]
            updateLocalStorage(state)
        },
        addExampleTodos: (state) => {
            const todos = []
            for (let i = 0; i < 10; i++) {
                todos.push({
                    id: i,
                    title: faker.lorem.sentence(),
                    isCompleted: false,
                })
            }
            state.todos = todos
            localStorage.setItem('todos', JSON.stringify(state.todos))
            localStorage.setItem(
                'completedTodos',
                JSON.stringify(state.completedTodos)
            )
        },
        updateSingleTodo: (state, action: PayloadAction<Todo>) => {
            let todo = state.todos.find((todo) => todo.id === action.payload.id)
            if (todo) {
                //Remove from todos
                state.todos = state.todos.map((todo) =>
                    todo.id === action.payload.id ? action.payload : todo
                )
            }
            localStorage.setItem('todos', JSON.stringify(state.todos))
            localStorage.setItem(
                'completedTodos',
                JSON.stringify(state.completedTodos)
            )
        },
        loadTodos: (state) => {
            const todos = localStorage.getItem('todos')
            const completedTodos = localStorage.getItem('completedTodos')
            if (todos) {
                state.todos = JSON.parse(todos)
            }
            if (completedTodos) {
                state.completedTodos = JSON.parse(completedTodos)
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            console.log(action.payload)
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
            state.completedTodos = state.completedTodos.filter(
                (todo) => todo.id !== action.payload
            )

            localStorage.setItem('todos', JSON.stringify(state.todos))
            localStorage.setItem(
                'completedTodos',
                JSON.stringify(state.completedTodos)
            )
        },
        toggleStatus: (state, action: PayloadAction<number>) => {
            console.log(action.payload)
            //Check if todo exists
            const todo = state.todos.find((todo) => todo.id === action.payload)
            const completedTodo = state.completedTodos.find(
                (todo) => todo.id === action.payload
            )
            if (todo) {
                console.log(todo)
                todo.isCompleted = true

                //Add to completed todos
                state.completedTodos = [...state.completedTodos, todo]
                // //Remove from todos
                state.todos = state.todos.filter(
                    (todo) => todo.id !== action.payload
                )
            } else if (completedTodo) {
                completedTodo.isCompleted = false

                //Remove from completed todos
                state.completedTodos = state.completedTodos.filter(
                    (todo) => todo.id !== action.payload
                )
                //Add to todos
                state.todos = [...state.todos, completedTodo]
            } else {
            }

            localStorage.setItem('todos', JSON.stringify(state.todos))
            localStorage.setItem(
                'completedTodos',
                JSON.stringify(state.completedTodos)
            )
        },
        updateTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload
            localStorage.setItem('todos', JSON.stringify(state.todos))
            localStorage.setItem(
                'completedTodos',
                JSON.stringify(state.completedTodos)
            )
        },
        updateCompletedTodos: (state, action: PayloadAction<Todo[]>) => {
            state.completedTodos = action.payload
            localStorage.setItem('todos', JSON.stringify(state.todos))
            localStorage.setItem(
                'completedTodos',
                JSON.stringify(state.completedTodos)
            )
        },
        sortAlphabetically: (state) => {
            state.todos.sort((a, b) => a.title.localeCompare(b.title))
            localStorage.setItem('todos', JSON.stringify(state.todos))
            localStorage.setItem(
                'completedTodos',
                JSON.stringify(state.completedTodos)
            )
        },
    },
})

export const {
    addTodo,
    addExampleTodos,
    updateSingleTodo,
    loadTodos,
    deleteTodo,
    toggleStatus,
    updateTodos,
    updateCompletedTodos,
    sortAlphabetically,
} = todoSlice.actions

export default todoSlice.reducer
