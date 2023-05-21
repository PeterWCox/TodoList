import { combineReducers } from 'redux'
import todosReducer from './todoSlice'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    todos: todosReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
