import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  forUpdate: false,
  todoApiUrl: "http://localhost:3000/api/todo",
  todoId: "",
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
    setForUpdate: (state) => state.forUpdate(!state.forUpdate),
    setTodoId: (state) => (state.todoId = action.payload),
  },
});

export const { setTitle, setDescription, setForUpdate, setTodoId } =
  todoSlice.actions;

export default todoSlice.reducer;
