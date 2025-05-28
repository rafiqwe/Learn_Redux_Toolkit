import { store } from "../../store";
import { addTask } from "./taskSlice";

// add some data
console.log(store.dispatch(addTask("I am a developer")));
console.log(store.dispatch(addTask("I Know react ")));

// console.log(store.dispatch(deleteTask(1)));

// Log all data
console.log(store.getState());