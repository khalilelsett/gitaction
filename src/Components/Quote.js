import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import "./Quote.css";

export default function Quote() {
  const dispatch=useDispatch();
  const [X, setX] = useState(false);
  const Remove=useSelector((state)=>state.Close.close)
  
  const Remove1 = () => {
    
    dispatch({ type: "CLOSED"});
  };

  const handleMouseEnter = () => {
    setX(true);
  };

  const handleMouseLeave = () => {
    setX(false);
  };

  const closeButtonStyle = {
    opacity: X ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <>
      {!Remove ? (
        <div
          className={`bg-gradient-to-b from-cc2 to-cc1 h-14 flex justify-between `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className="text-lg italic text-white mt-3 ml-8">
            "Anything that can go wrong will go wrong!"
          </h1>
          <button
            onClick={Remove1}
            style={{ marginRight: "50px", fontSize: "30px", color: "white", ...closeButtonStyle }}
          >
            ×
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
