import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoApp } from "./components/TodoApp";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootSlice";

const store = configureStore({ reducer: rootReducer });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <main>
      <TodoApp />
    </main>
  </Provider>
);
