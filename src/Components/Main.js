import React from "react";
import Section from "./compinMain/Section";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RiDropdownList } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Addtask from "./compinMain/Addtask";
export default function Main() {
  const state = ["Todo", "Doing", "Done"];
  const dispatch = useDispatch();
  const Remove = useSelector((state) => state.Close.close);
  const Add = useSelector((state) => state.Close.add);

  const create = () => {
    dispatch({ type: "CREATE" });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`w-full  ${Add ? "opacity-25 " : "opacity-100"} h-full  flex  bg-bgm `}>
        {Remove ? (
          <button
            onClick={create}
            className="flex absolute text-xl left-[1620px] mt-6 fon text-cc1"
          >
            <RiDropdownList />
          </button>
        ) : (
          <></>
        )}
        {state.map((stat, index) => (
          <Section key={index} status={stat} />
        ))}
      </div>
      {Add && <Addtask/>}
    </DndProvider>
  );
}
