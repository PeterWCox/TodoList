import { Todo } from '../../models/Todo'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import './TodoItem.scss'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/material'
import OutsideClickHandler from 'react-outside-click-handler'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import OpenWithIcon from '@mui/icons-material/OpenWith'
import { deleteTodo, updateSingleTodo } from '../../redux/todoSlice'
import { useAppDispatch } from '../../redux/hooks'

export interface ITodoItemProps {
    todo: Todo
}

export const TodoItem = (props: ITodoItemProps) => {
    //States
    const [title, setTitle] = useState<string>(props.todo.title)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    //Redux
    const dispatch = useAppDispatch()

    //Handlers
    const handleCheckbox = (e) => {
        e.preventDefault()
        dispatch(
            updateSingleTodo({
                ...props.todo,
                isCompleted: !props.todo.isCompleted,
            })
        )
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteTodo(props.todo.id))
    }

    const handleTextClick = (e) => {
        e.preventDefault()
        setIsEditMode(true)
    }

    const handleTextChange = (e) => {
        e.preventDefault()
        dispatch(
            updateSingleTodo({
                ...props.todo,
                title: title,
            })
        )
    }

    const handleStarredChange = (e) => {
        e.preventDefault()
        dispatch(
            updateSingleTodo({
                ...props.todo,
                title: title,
            })
        )
    }

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
                        <Typography
                            variant="body1"
                            gutterBottom
                            onClick={handleTextClick}
                        >
                            <span
                                style={{
                                    textDecoration: props.todo.isCompleted
                                        ? 'line-through'
                                        : 'none',
                                    fontWeight: props.todo.isCompleted
                                        ? 'bold'
                                        : 'normal',
                                }}
                            >
                                {title}
                            </span>
                        </Typography>
                    ) : (
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                if (isEditMode) {
                                    setIsEditMode(false)
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
                                    setTitle(value.target.value)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleTextChange(e)
                                        setIsEditMode(false)
                                    }
                                }}
                            />
                        </OutsideClickHandler>
                    )}
                </div>
            </div>

            <div
                className="end"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                }}
            >
                {/* Star Button */}
                <div className="deleteButton">
                    {props.todo.isStarred ? (
                        <StarIcon
                            aria-label="favourite"
                            onClick={handleStarredChange}
                        />
                    ) : (
                        <StarBorderIcon
                            aria-label="unfavorute"
                            onClick={handleStarredChange}
                        />
                    )}
                </div>

                {/* Move Button */}
                <div className="deleteButton">
                    <OpenWithIcon aria-label="move" />
                </div>

                {/* Delete Button */}
                <div className="deleteButton">
                    <DeleteIcon aria-label="delete" onClick={handleDelete} />
                </div>
            </div>
        </Box>
    )
}
