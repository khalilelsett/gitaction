import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
export default function Task({ task }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useDispatch();
  const [style, setStyle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState({
    id: task.id,
    prefix: task.prefix,
    content: {
      Title: task.content.Title,
      DueDate: task.content.DueDate,
      Category: task.content.Category,
      Estimate: task.content.Estimate,
      EstimateUnit: task.content.EstimateUnit,
      Importance: task.content.Importance,
    },
  });

  useEffect(() => {
    if (!isEditing) {
      if (task.content.Importance === "Low") {
        setStyle("bg-green-500");
      } else if (task.content.Importance === "High") {
        setStyle("bg-red-700");
      } else if (task.content.Importance === "Medium") {
        setStyle("bg-orange-500");
      }
    } else {
      setStyle("bgtask");
    }
  }, );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Add logic to save edited content to your data source or state
    dispatch({ type: "EDIT_TASK", payload: { editedContent } });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedContent((prevTask) => ({
      ...prevTask,
      content: {
        ...prevTask.content,
        [name]: value,
      },
    }));
  };
  const handleImportanceChange=(e)=>{
setEditedContent((prevTask) => ({
  ...prevTask,
  content: {
    ...prevTask.content,
    Importance: e.target.value,
  },
}));
  }
  return (
    <div
      ref={drag}
      className={`${
        isDragging ? "opacity-25" : "opacity-100"
      } mb-5 text-white p-3 rounded-md bg-bgtask`}
    >
      <div className="flex justify-between">
        <h1>
          {isEditing ? (
            <input
              type="text"
              name="Title"
              value={editedContent.content.Title}
              onChange={handleInputChange}
              class="w-1/2  bg-cbg rounded-lg border
              border-slate-200 px-2 py-[1px] hover:border-blue-500
               focus:outline-none focus:ring focus:ring-blue-500/40 active:ring
                active:ring-blue-500/40"
            />
          ) : (
            task.content.Title
          )}
        </h1>
        {isEditing ? (
          <button onClick={handleSaveClick}>
            <MdModeEdit className="text-cc2" />
          </button>
        ) : (
          <button onClick={handleEditClick}>
            <MdModeEdit className="text-cc2" />
          </button>
        )}
      </div>
      <div>
        <div className="flex flex-row mt-4">
          <p className="w-1/2 opacity-50 ">Category</p>
          <p>
            {isEditing ? (
              <input
                type="text"
                name="Category"
                class="w-2/3 max-w-lg rounded-lg border border-slate-200 px-2 py-[1px] bg-cbg
                hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40
                active:ring active:ring-blue-500/40"
                value={editedContent.content.Category}
                onChange={handleInputChange}
              />
            ) : (
              task.content.Category
            )}
          </p>
        </div>
        <div className="flex flex-row mt-4">
          <p className="w-1/2 opacity-50 ">Due Date</p>
          <p>
            {isEditing ? (
              <input
                type="date"
                name="DueDate"
                class="w-full rounded-lg border bg-cbg border-slate-200 px-2 py-[1px] pl-2
                hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40
                 active:ring active:ring-blue-500/40"
                value={editedContent.content.DueDate}
                onChange={handleInputChange}
              />
            ) : (
              task.content.DueDate
            )}
          </p>
        </div>
        <div className="flex flex-row mt-4">
          <p className="w-1/2 opacity-50 ">Estimate</p>
          <p>
            {isEditing ? (
              <>
                <input
                  type="number"
                  name="Estimate"
                  value={editedContent.content.Estimate}
                  onChange={handleInputChange}
                  class="w-1/5 max-w-[200px] bg-cbg rounded-lg border
                  border-slate-200 px-2 py-[1px] mr-5 hover:border-blue-500
                   focus:outline-none focus:ring focus:ring-blue-500/40 active:ring
                    active:ring-blue-500/40"
                />
                <input
                  type="text"
                  name="EstimateUnit"
                  value={editedContent.content.EstimateUnit}
                  onChange={handleInputChange}
                  class="w-1/2 max-w-[200px] bg-cbg rounded-lg border
                  border-slate-200 px-2 py-[1px] hover:border-blue-500
                   focus:outline-none focus:ring focus:ring-blue-500/40 active:ring
                    active:ring-blue-500/40"
                />
              </>
            ) : (
              `${task.content.Estimate} ${task.content.EstimateUnit}`
            )}
          </p>
        </div>
        <div className="flex flex-row mt-4">
          <p className="w-1/2 opacity-50 ">Importance</p>
          <p className={`px-3 py-1 rounded-md ${style}`}>
            {isEditing ? (
              <select
                name="Importance"
                value={editedContent.content.Importance}
                onChange={handleImportanceChange}
                class="w-full rounded-lg border bg-cbg border-slate-200 px-2 py-[1px] pl-2
                hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40
                 active:ring active:ring-blue-500/40 "
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            ) : (
              task.content.Importance
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
