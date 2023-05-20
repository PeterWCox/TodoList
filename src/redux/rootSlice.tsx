import { combineReducers } from "redux";
import todosReducer from "./todosSlice";
import tagsReducer from "./tagsSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  tags: tagsReducer,
});

export default rootReducer;
