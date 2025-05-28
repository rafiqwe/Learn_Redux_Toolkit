import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

 export const tasksReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (curElem, index) => index !== action.payload
      );
    },
    clearAll(state) {
      state.task = [];
    },
  },
});
export const { addTask, deleteTask, clearAll } = tasksReducer.actions;
