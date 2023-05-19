import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo_Multiple } from "../redux/todosSlice";
import "./TodoApp.scss";
import { Todos } from "./Todos/Todos";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const TodoApp = () => {
  //States
  const [title, setTitle] = useState<string>("");

  //Redux
  const dispatch: any = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  //Effects
  useEffect(() => {
    //On init, try and get todos from local storage
    const todos = localStorage.getItem("todos");

    if (todos) {
      dispatch(updateTodo_Multiple(JSON.parse(todos)));
    }
  }, []);

  //Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div className="container">
      {/* Header */}
      <section className="header">
        <Typography variant="h2" gutterBottom>
          Todos
        </Typography>
      </section>

      {/* Add todo */}
      <section className="addTodo">
        <form onSubmit={handleSubmit}>
          {/* Input */}
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Add a todo"
            onChange={(value) => {
              setTitle(value.target.value);
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            type="submit"
            disabled={title?.trim().length === 0}
          >
            Add
          </Button>
        </form>
      </section>

      <section className="todos">
        {/* Todos */}
        <Todos />
      </section>

      {/* Tasks */}
      <div></div>
    </div>
  );
};
