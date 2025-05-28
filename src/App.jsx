import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {addTask, clearAll, deleteTask} from "./features/tasks/taskSlice";

function App() {
  const [task, setTask] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const state = useSelector((state) => state.tasksReducer.task);
  const dispatch = useDispatch();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setTask("");
    if(!task){
      return dispatch();
    }
    return dispatch(addTask(task));
  };
  const handleDeleteTask = (index) => {
    return dispatch(deleteTask(index));
  };
  const handleClearAllTask = () => {
    return dispatch(clearAll([]));
  };
  return (
    <>
      <div className="mt-20 mb-20">
        <div className="w-[400px] sm:w-[500px] mx-auto  rounded-xl bg-slate-400 p-8 ">
          <div className="title flex justify-center items-center mb-3">
            <h1 className="text-4xl font-bold text-black">To-do List :-</h1>
          </div>
          <div className="from mt-7 mb-7 ">
            <form
              action=""
              className="flex justify-around items-center"
              onSubmit={handleSubmitForm}
            >
              <div className="input w-[70%]">
                <input
                  type="text"
                  placeholder="Set your task"
                  className="w-full py-3 rounded-full px-6 outline-none bg-slate-200 text-black"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>
              <div className="button ">
                <button
                  type="submit"
                  className="bg-blue-900 p-3 rounded-xl font-bold cursor-pointer"
                  disabled={isDisable}
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
          <ul>
            {state.map((task, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-between items-center   bg-white p-3 mb-2 rounded-lg"
                >
                  <div className="text flex  justify-center items-start gap-1 sm:gap-2">
                    <p className="text-black font-bold">{index + 1}:</p>
                    <h1 className="text-md font-bold text-black">{task}</h1>
                  </div>
                  <div className="delete_icon">
                    <button
                      className="bg-red-600 p-2 rounded-full text-white font-bold cursor-pointer"
                      onClick={() => handleDeleteTask(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
            <button
              className="w-full h-12 cursor-pointer text-white bg-blue-800 rounded-2xl mx-auto font-bold "
              onClick={handleClearAllTask}
            >
              Clear All
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
