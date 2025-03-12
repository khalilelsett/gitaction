import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Addtask() {
    const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [newTask, setNewTask] = useState({
    id: tasks.length+1,
    prefix: "Todo",
    content: {
      Title: "",
      DueDate: "",
      Category: "",
      Estimate: "",
      EstimateUnit: "",
      Importance: "Low",
    },
  });
  const AddNewtask = () => {
    
    dispatch({ type: "ADD_TASK", payload: { newTask } });
    dispatch({ type: "CLOSE_ADD"});
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      content: {
        ...prevTask.content,
        [name]: value,
      },
    }));
  };

  const closeadd = () => {
    dispatch({ type: "CLOSE_ADD" });
  };
  return (
    <div class="w-1/3  rounded-xl bg-gradient-to-b from-cc2 to-cc1 text-white p-4 shadow-2xl absolute left-[400px] top-[200px] shadow-white/40">
      <button
        onClick={closeadd}
        className="text-3xl absolute left-[420px] botton-[60px]"
      >
        ×
      </button>

      <h1 class="text-3xl font-bold mb-4 text-center text-white-500">
        Add Task
      </h1>

      <div class="mb-4 grid grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label for="text" class="mb-2 font-semibold">
            Title
          </label>
          <input
            name="Title"
            value={newTask.content.Title}
            type="text"
            onChange={handleChange}
            class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1
             hover:border-blue-500 focus:outline-none bg-cbg focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
          />
        </div>
        <div class="flex flex-col">
          <label for="text2" class="mb-2 font-semibold">
            Category
          </label>
          <input
            name="Category"
            value={newTask.content.Category}
            onChange={handleChange}
            type="text"
            class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 bg-cbg
             hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
          />
        </div>
      </div>

      <div class="mb-4 flex flex-col">
        <label for="email" class="mb-2 font-semibold">
          Due Date
        </label>
        <div class="relative">
          <input
            onChange={handleChange}
            type="date"
            name="DueDate"
            value={newTask.content.DueDate}
            class="w-1/3 rounded-lg border bg-cbg border-slate-200 px-2 py-1 pl-2
             hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
          />
        </div>
      </div>
      <label class=" font-semibold">Estimate</label>

      <div className="mb-4 mt-2 grid grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label class="mb-2 ">Count</label>

          <input
            type="number"
            onChange={handleChange}
            name="Estimate"
            value={newTask.content.Estimate}
            class="w-full max-w-[200px] bg-cbg rounded-lg border
           border-slate-200 px-2 py-1 hover:border-blue-500
            focus:outline-none focus:ring focus:ring-blue-500/40 active:ring
             active:ring-blue-500/40"
          />
        </div>
        <div class="flex flex-col">
          <label for="age" class="mb-2 ">
            Unit
          </label>
          <input
            type="text"
            name="EstimateUnit"
            value={newTask.content.EstimateUnit}
            onChange={handleChange}
            class="w-full max-w-[200px] bg-cbg rounded-lg border
      border-slate-200 px-2 py-1 hover:border-blue-500
       focus:outline-none focus:ring focus:ring-blue-500/40 active:ring
        active:ring-blue-500/40"
          />
        </div>
      </div>

      <label class=" font-semibold">Importance</label>
      <div class="relative">
        <select
          name="Importance"
          value={newTask.content.Importance}
          onChange={handleChange}
          class="w-1/3 rounded-lg border bg-cbg border-slate-200 px-2 py-1 pl-2
             hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40
              active:ring active:ring-blue-500/40 mt-3"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div class="flex justify-end">
        <button onClick={AddNewtask} class="bg-gradient-to-b from-black to-cc2  text-white rounded-lg px-4 py-2 hover:opacity-80 ">
          Add Task
        </button>
      </div>
    </div>
  );
}
