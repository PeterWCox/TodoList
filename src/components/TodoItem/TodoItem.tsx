import { useDispatch } from "react-redux";
import { ITodo } from "../../models/Todo";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import "./TodoItem.scss";
import { deleteTodo, updateTodo_Single } from "../../redux/todosSlice";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import OutsideClickHandler from "react-outside-click-handler";

export interface ITodoItemProps {
  todo: ITodo;
}

export const TodoItem = (props: ITodoItemProps) => {
  //States
  const [title, setTitle] = useState<string>(props.todo.title);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  //Redux
  const dispatch: any = useDispatch();

  //Handlers
  const handleCheckbox = (e) => {
    e.preventDefault();
    dispatch(updateTodo_Single(props.todo.id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(props.todo.id));
  };

  const handleTextClick = (e) => {
    e.preventDefault();
    setIsEditMode(true);
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    dispatch(updateTodo_Single(props.todo.id));
  };

  return (
    <Box className="todoItem" sx={{ boxShadow: 1 }}>
      <div className="start">
        {/* Checkbox */}
        <div className="checkbox" onClick={handleCheckbox}>
          {props.todo.isCompleted ? (
            <CheckBoxIcon />
          ) : (
            <CheckBoxOutlineBlankIcon />
          )}
        </div>

        {/* Text */}
        <div>
          {!isEditMode ? (
            <Typography variant="body1" gutterBottom onClick={handleTextClick}>
              <span
                style={{
                  textDecoration: props.todo.isCompleted
                    ? "line-through"
                    : "none",
                }}
              >
                {props.todo.title}
              </span>
            </Typography>
          ) : (
            <OutsideClickHandler
              onOutsideClick={() => {
                if (isEditMode) {
                  setIsEditMode(false);
                }
              }}
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Add a todo"
                value={title}
                fullWidth
                onChange={(value) => {
                  setTitle(value.target.value);
                }}
              />
            </OutsideClickHandler>
          )}
        </div>
      </div>

      <div className="end">
        {/* Delete Button */}
        <div className="deleteButton">
          <DeleteIcon aria-label="delete" onClick={handleDelete} />
        </div>
      </div>
    </Box>
  );
};
