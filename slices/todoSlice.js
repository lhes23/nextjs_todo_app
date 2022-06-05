import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoId: "",
  title: "",
  description: "",
  forUpdate: false,
  todoApiUrl: "http://localhost:3000/api/todo",
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
