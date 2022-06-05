import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoId: "",
  title: "",
  description: "",
  forUpdate: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setForUpdate: (state, action) => {
      state.forUpdate = action.payload;
    },
    setTodoId: (state, action) => {
      state.todoId = action.payload;
    },
  },
});

export const { setTitle, setDescription, setForUpdate, setTodoId } =
  todoSlice.actions;

export default todoSlice.reducer;
