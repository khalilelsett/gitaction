import React from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";


export default function Hsection({ status }) {
  const icon = () => {
    if (status === "Todo") {
      return (
        <RiTodoLine
          style={{ color: "violet", marginInline: "5px", fontSize: "20px" }}
        />
      );
    }
    if (status === "Doing") {
      return (
        <LuListTodo
          style={{ color: "orange", marginInline: "5px", fontSize: "20px" }}
        />
      );
    }
    if (status === "Done") {
      return (
        <MdFileDownloadDone
          style={{ color: "green", marginInline: "5px", fontSize: "20px" }}
        />
      );
    }
  };
  return (
    <div className="flex bg-bgtask p-1 text-white items-center rounded-md mb-3">
      {icon()}
      <h1>{status}</h1>
      
    </div>
  );
}
