import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { thunk_addTodo } from "../../redux/todosSlice";
import { useDispatch } from "react-redux";

export const AddTodo = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch: any = useDispatch();

  //Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(thunk_addTodo(title));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input */}
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Add a todo"
        onChange={(value) => {
          setTitle(value.target.value);
        }}
        style={{
          backgroundColor: "white",
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
  );
};
