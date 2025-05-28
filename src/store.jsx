import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const tasksReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
  },
});

const { addTask, deleteTask } = tasksReducer.actions;

export const store = configureStore({
  reducer: {
    tasksReducer,
  },
});
