import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
export default function Search() {
  const [Hover, setHover] = useState(false);
  const dispatch=useDispatch()
  const handleMouseEnter = () => {
    setHover(true);
  };
  const closeButtonStyle = {
    opacity: Hover ? 1 : 0,
    transition: "opacity 0.6s ease",
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
 const Search = (e) => {
  dispatch({ type: "SEARCH", value: e.target.value });
};
  return (
    <div className="flex relative" onMouseLeave={handleMouseLeave}>
      <div
        className=" pl-4  pr-3 py-1 border border-violet-100 flex rounded-2xl"
        style={closeButtonStyle}
      >
        <input
          type="text"
          className="bg-ctd focus:outline-none focus:ring-0 text-sm rounded-ful w-80 border-none  text-white "
          placeholder="what are you looking for?"
          onChange={Search}
        />
        <IoSearch className="text-cc2 mb-[5px] text-xl ml-5" />
      </div>

      <IoSearch
        className="text-cc2 mb-[5px] text-xl mr-[13px] absolute left-[357px] top-[4px]"
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
}
