import React, { useEffect } from "react";
import Hsection from "./Hsection";
import Task from "./Task";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
export default function Section({ status}) {
  const todoTasks = useSelector((state) => state.tasks.todoTasks);
  const doingTasks = useSelector((state) => state.tasks.doingTasks);
  const doneTasks = useSelector((state) => state.tasks.doneTasks);
  const tasks = useSelector((state)=>state.tasks.tasks)
 
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  let taskstomap;
  if (status === "Todo") {
    taskstomap = todoTasks;
  }
  if (status === "Doing") {
    taskstomap = doingTasks;
  }
  if (status === "Done") {
    taskstomap = doneTasks;
  }
  useEffect(() => {
    dispatch({ type: "FILTER_TASKS_BY_STATUS", payload: { status } });
  
  }, [dispatch, status,tasks]);

  const addItemToSection = (id) => {
   dispatch({
    type: "UPDATE_TASK_PREFIX",
    payload: { id, status },
  });
  };
  return (
    <div
      ref={drop}
      className={`w-1/5 mt-7 ml-7 ${isOver ? "bg-slate-200" : ""}`}
    >
      <Hsection status={status} />

      {taskstomap &&
        taskstomap.length > 0 &&
        taskstomap
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <Task key={task.id}   task={task} />
          ))}
    </div>
  );
}
