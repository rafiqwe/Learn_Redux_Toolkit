import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const tasksReducer = createSlice({
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
  },
});
console.log(tasksReducer);

export const { addTask, deleteTask } = tasksReducer.actions;
export const store = configureStore({
  reducer: {
    tasksReducer: tasksReducer.reducer,
  },
});
// add some data
console.log(store.dispatch(addTask("I am a developer")));
console.log(store.dispatch(addTask("I Know react ")));
console.log(store.dispatch(deleteTask(1)));

// Log all data
console.log(store.getState());
