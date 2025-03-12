import React from "react";
import Header from "../Components/Header";
import Quote from "../Components/Quote";
import Main from "../Components/Main";
import { Toaster } from "react-hot-toast";
export default function TodoList() {
  return (
    <div className="flex flex-col h-screen overflow-auto  bg-bgm ">
      <Toaster/>
      <Header/>
      <Quote/>
      <Main className="flex-1"/>
      
    </div>
  );
}
