import { Todo } from '../../models/Todo'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import DeleteIcon from '@mui/icons-material/Delete'
import './TodoItem.scss'
import { useState } from 'react'
import { Box } from '@mui/material'
import OutsideClickHandler from 'react-outside-click-handler'
import OpenWithIcon from '@mui/icons-material/OpenWith'
import {
    deleteTodo,
    toggleStatus,
    updateSingleTodo,
} from '../../redux/todoSlice'
import { useAppDispatch } from '../../redux/hooks'
import { Searchbar } from '../../lib/Searchbar/Searchbar'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

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
    const handleCheckbox = () => dispatch(toggleStatus(props.todo.id))
    const handleDelete = () => dispatch(deleteTodo(props.todo.id))
    const handleTextClick = () => setIsEditMode(true)

    const handleTextChange = (e) => {
        dispatch(
            updateSingleTodo({
                ...props.todo,
                title: title,
            })
        )
    }
    const handleStarredChange = () => {
        dispatch(
            updateSingleTodo({
                ...props.todo,
                isStarred: !props.todo.isStarred,
            })
        )
    }

    return (
        <Box className="todoItem" sx={{ boxShadow: 1 }}>
            <div
                className="start"
                style={{
                    width: '100%',
                }}
            >
                {/* Checkbox */}
                <div className="checkbox" onClick={handleCheckbox}>
                    {props.todo.isCompleted ? (
                        <CheckBoxIcon />
                    ) : (
                        <CheckBoxOutlineBlankIcon />
                    )}
                </div>

                {/* Text */}
                <div
                    style={{
                        minWidth: '100%',
                    }}
                >
                    {!isEditMode ? (
                        <h3 onClick={handleTextClick}>
                            <span
                                style={{
                                    textDecoration: props.todo.isCompleted
                                        ? 'line-through'
                                        : 'none',
                                    fontWeight: props.todo ? 'bold' : 'normal',
                                }}
                            >
                                {title}
                            </span>
                        </h3>
                    ) : (
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                if (isEditMode) {
                                    setIsEditMode(false)
                                }
                            }}
                        >
                            <Searchbar
                                value={title}
                                placeholder={''}
                                onChange={(value) => {
                                    setTitle(value)
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
                <div className="favoriteButton">
                    {props.todo.isStarred ? (
                        <StarIcon
                            aria-label="favourite"
                            onClick={handleStarredChange}
                            style={{
                                fill: 'gold',
                            }}
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
