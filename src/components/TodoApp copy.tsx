// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { thunk_updateTodoMultiple } from "../redux/todosSlice";
// import { thunk_updateMultipleTags } from "../redux/tagsSlice";
// import "./TodoApp.scss";
// import { Todos } from "./Todos/Todos";
// import Typography from "@mui/material/Typography";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { AddTodo } from "./AddTodo/AddTodo";
// import { AddTag } from "./AddTag/AddTag";
// import { TasksRemaining } from "./TasksRemaining";

// export const TodoApp = () => {
//   //States
//   const [showCompletedTodos, setShowCompletedTodos] = useState<boolean>(true);

//   //Redux
//   const dispatch: any = useDispatch();
//   const { todos } = useSelector((state) => state.todos);

//   //Effects
//   useEffect(() => {
//     //On init, try and get todos from local storage
//     const todos = localStorage.getItem("todos");

//     if (todos) {
//       dispatch(thunk_updateTodoMultiple(JSON.parse(todos)));
//     }

//     const tags = localStorage.getItem("tags");
//     if (tags) {
//       dispatch(thunk_updateMultipleTags(JSON.parse(tags)));
//     }
//   }, []);

//   return (
//     <div className="container">
//       {/* Header */}
//       <section className="header">
//         <h1>Todos</h1>
//         <TasksRemaining count={todos?.length} />

//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={showCompletedTodos}
//               onClick={() => {
//                 setShowCompletedTodos(!showCompletedTodos);
//               }}
//             />
//           }
//           label="Show completed todos"
//         />

//         <AddTodo />
//         <AddTag />
//       </section>

//       <section className="todos">
//         {/* Todos */}
//         <Todos showCompletedTodos={showCompletedTodos} />
//       </section>

//       {/* Tasks */}
//       <div></div>
//     </div>
//   );
// };
