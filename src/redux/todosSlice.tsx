import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../models/Todo";

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length > 0 ? state.todos.length + 1 : 1,
            title: action.payload,
            isCompleted: false,
          },
        ],
      };
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateSingleTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateMultipleTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, updateSingleTodo, updateMultipleTodos, deleteTodo } =
  todoSlice.actions;

//Thunks
export function thunk_addTodo(title: string) {
  return async (dispatch: any) => {
    dispatch(addTodo(title));
  };
}

export function thunk_updateTodoSingle(todo: Todo) {
  return async (dispatch: any) => {
    dispatch(updateSingleTodo(todo));
  };
}

export function thunk_updateTodoMultiple(todos: Todo[]) {
  return async (dispatch: any) => {
    dispatch(updateMultipleTodos(todos));
  };
}

export function thunk_deleteTodo(id: number) {
  return async (dispatch: any) => {
    dispatch(deleteTodo(id));
  };
}

export default todoSlice.reducer;
