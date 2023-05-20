import ReactDOM from "react-dom/client";
import "./css/global.css";
import { TodoApp } from "./components/TodoApp";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootSlice";
import { Header } from "./layouts/header/header";

const store = configureStore({ reducer: rootReducer });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Header />
    <TodoApp />
  </Provider>
);
