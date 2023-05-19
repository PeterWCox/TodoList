import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "../TodoItem/TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { updateTodo_Multiple } from "../../redux/todosSlice";

export interface ITodosProps {
  showCompletedTodos: boolean;
}

export const Todos = (props: ITodosProps) => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEnd = (result) => {
    //If no destination, do nothing
    if (!result.destination) {
      return;
    }

    //Otherwise reorder the items
    const items = [...todos];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(updateTodo_Multiple(items));
  };

  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="to-dos">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {(props.showCompletedTodos
              ? todos
              : todos.filter((todo) => !todo.isCompleted)
            ).map((todo, index) => (
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
                      snapshot.isDragging ? "selected" : "not-selected"
                    }
                  >
                    <TodoItem key={todo.id} todo={todo} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};
