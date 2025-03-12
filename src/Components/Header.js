import React from "react";
import { Link } from "react-router-dom";
import Add from "./RightHeader.comp/Add";
import Search from "./RightHeader.comp/Search";
import Avatar from "./RightHeader.comp/Avatar";

export default function Header() {
  return (
    <div className="bg-ctd h-14 flex  justify-between">
      <Link to="../">
        <img
          className="w-20 h-12 ml-5 "
          src={require("../images/Screenshot 2023-11-07 172323.jpg")}
        />
      </Link>
      <div className="flex mr-10  items-center">
        <Search />
        <Add />
        <Avatar />
      </div>
    </div>
  );
}
