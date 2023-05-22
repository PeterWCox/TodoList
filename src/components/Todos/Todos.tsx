import { TodoItem } from '../TodoItem/TodoItem'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Todo } from '../../models/Todo'
import { updateCompletedTodos, updateTodos } from '../../redux/todoSlice'

export type TodoListType = 'todos' | 'completedTodos'
export interface ITodosProps {
    todos: Todo[]
    type: TodoListType
}

export const Todos = (props: ITodosProps) => {
    if (!props.todos) {
        return null
    }

    const dispatch = useAppDispatch()

    const handleEnd = (result) => {
        //If no destination, do nothing
        if (!result.destination) {
            return
        }

        //Otherwise reorder the items
        const items = [...props.todos]
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        if (props.type === 'todos') {
            dispatch(updateTodos(items))
        } else {
            dispatch(updateCompletedTodos(items))
        }
    }

    return (
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="to-dos">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                        }}
                    >
                        {props.todos.map((todo, index) => (
                            <Draggable
                                key={todo.id}
                                draggableId={todo.id.toString()}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <li
                                        {...provided.draggableProps}
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        key={todo.id}
                                        className={
                                            snapshot.isDragging
                                                ? 'selected'
                                                : 'not-selected'
                                        }
                                    >
                                        <TodoItem
                                            key={`todo_${todo.id}`}
                                            todo={todo}
                                        />
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}
