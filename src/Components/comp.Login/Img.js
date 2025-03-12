import React from "react";
import image from "../../images/Screenshot 2023-11-07 132225.jpg";
export default function img() {
  return (
    <div className="bg-cbg w-full">
      <img className="w-full h-full object-contain" src={image} alt="photo" />
    </div>
  );
}
