import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoUtils } from "../utils/TodoUtils";
import { ITodo } from "../models/Todo";

export interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newId = TodoUtils.getNextId(state.todos);

      state = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: newId,
            title: action.payload,
            isCompleted: false,
          },
        ],
      };
      localStorage.setItem("todos", JSON.stringify(state.todos));

      return state;
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodos: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { add, remove, updateTodo, updateTodos } = todoSlice.actions;

//Thunks
export function addTodo(title: string) {
  return async (dispatch: any) => {
    dispatch(add(title));
  };
}

export function updateTodo_Single(id: number) {
  return async (dispatch: any) => {
    dispatch(updateTodo(id));
  };
}

export function updateTodo_Multiple(todos: ITodo[]) {
  return async (dispatch: any) => {
    dispatch(updateTodos(todos));
  };
}

export function deleteTodo(id: number) {
  return async (dispatch: any) => {
    dispatch(remove(id));
  };
}

export default todoSlice.reducer;
