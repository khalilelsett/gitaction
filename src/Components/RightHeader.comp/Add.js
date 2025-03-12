import React from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
export default function Add() {

  const dispatch=useDispatch();
  const Add = () => {
  
    dispatch({ type: "ADD"});
  };

  return( <div>
    <button onClick={Add} ><RiAddCircleLine className="text-cc2 text-xl ml-2" /></button>
  </div>
  )
}
