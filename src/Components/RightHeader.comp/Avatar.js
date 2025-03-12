import React, { useState } from "react";
import {  BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Avatar() {
  const [Avatar, setAvatar] = useState(false);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const click = () => {
    setAvatar(!Avatar);
  };
  const logout = () => {
    localStorage.removeItem("email");
    navigate("/")
  };
  return (
    <div className="relative">
      <button onClick={click}>
        <img
          className="w-8 h-8 rounded-full ml-5"
          src={require("../../images/avatar-generations_prsz.jpg")}
          alt="avatar"
        />
      </button>
      {Avatar ? (
        <div className="absolute top-10 left-[-200px] z-10">
          <div className=" pr-16 pl-4 mx-auto bg-ctd shadow shadow-white py-4 flex   space-x-6">
            <img
              className="block  h-12 rounded-[20px] shrink-0"
              src={require("../../images/avatar-generations_prsz.jpg")}
              alt="Logout"
            />
            <div className=" space-y-2 items-center text-left">
              <div className="space-y-0.5">
                <p className="text-violet-300 ">{email}</p>
              </div>
              <button
                onClick={logout}
                className="text-white ml-5 text-sm flex items-center"
              >
                Log Out
                <BiLogOut className="text-lg ml-1 scale-x-[-1]" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
