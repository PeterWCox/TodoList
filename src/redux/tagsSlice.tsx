import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoTag } from "../models/Todo";

export interface TagState {
  tags: TodoTag[];
}

const initialState: TagState = {
  tags: [],
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (
      state,
      action: PayloadAction<{
        title: string;
        color: string;
      }>
    ) => {
      state = {
        ...state,
        tags: [
          ...state.tags,
          {
            id: state.tags.length > 0 ? state.tags.length + 1 : 1,
            title: action.payload.title,
            color: action.payload.color,
          },
        ],
      };
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
    updateSingleTag: (state, action: PayloadAction<TodoTag>) => {
      state.tags = state.tags.map((tag) => {
        if (tag.id === action.payload.id) {
          tag = action.payload;
        }
        return tag;
      });
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
    updateMultipleTags: (state, action: PayloadAction<TodoTag[]>) => {
      state.tags = action.payload;
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
    deleteTag: (state, action: PayloadAction<number>) => {
      state.tags = state.tags.filter((tag) => tag.id !== action.payload);
      localStorage.setItem("tags", JSON.stringify(state.tags));
    },
  },
});

export const { addTag, updateSingleTag, updateMultipleTags, deleteTag } =
  tagsSlice.actions;

//Thunks
export function thunk_addTag({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return async (dispatch: any) => {
    dispatch(
      addTag({
        title: title,
        color: color,
      })
    );
  };
}

export function thunk_updateSingleTag(tag: TodoTag) {
  return async (dispatch: any) => {
    dispatch(updateSingleTag(tag));
  };
}

export function thunk_updateMultipleTags(tags: TodoTag[]) {
  return async (dispatch: any) => {
    dispatch(updateMultipleTags(tags));
  };
}

export function thunk_deleteTag(id: number) {
  return async (dispatch: any) => {
    dispatch(deleteTag(id));
  };
}

export default tagsSlice.reducer;
