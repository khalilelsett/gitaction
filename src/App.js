import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginP from "./Pages/LoginP";
import TodoList from "./Pages/TodoList";
import NotFound from "./Pages/NotFound";
export default function App() {
  const email = localStorage.getItem("email");

  return (
    <Routes>
      <Route path="/" element={<LoginP />} />
      <Route path="Todo" element={<TodoList />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
