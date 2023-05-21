// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { thunk_addTag } from "../../redux/tagsSlice";

// export const AddTag = () => {
//   const [title, setTitle] = useState<string>("");
//   const [color, setColor] = useState<string>("");
//   const dispatch: any = useDispatch();
//   const { tags } = useSelector((state) => state.tags);

//   //Handlers
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       thunk_addTag({
//         title: title,
//         color: color,
//       })
//     );
//     setTitle("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>{title}</div>
//       {/* Input */}
//       <TextField
//         id="outlined-basic"
//         variant="outlined"
//         placeholder="Add a tag"
//         onChange={(value) => {
//           setTitle(value.target.value);
//         }}
//         style={{
//           backgroundColor: "white",
//         }}
//         value={title}
//       />

//       <div>
//         {tags?.map((tag) => {
//           return (
//             <div
//               key={`tag${tag.id}`}
//               style={{
//                 backgroundColor: tag.color,
//                 width: "20px",
//                 height: "20px",
//               }}
//             ></div>
//           );
//         })}
//       </div>

//       {/* Submit Button */}
//       <Button
//         variant="contained"
//         type="submit"
//         disabled={title?.trim().length === 0}
//       >
//         Add Tag
//       </Button>
//     </form>
//   );
// };
