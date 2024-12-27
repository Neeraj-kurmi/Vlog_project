import React, { useState } from "react";
import M2 from "./M2";

function MsignIn({handleClicked,setShowMsignUp}) {
    
  const handle1=()=>{
    handleClicked()
    setShowMsignUp(true)
  }
  return (
    <div className="md:hidden backdrop-blur-sm inset-0  fixed">
      <div className="flex-col md:hidden px-4 py-2 inset-0 h-full mt-80 bg-white fixed z-50">
        <div className="flex justify-between mb-2">
          <h1 className="font-bold">Welcome back!</h1>
          <button
          onClick={()=>{handleClicked()}}
          >
            <img src="/images/Group 3.png"></img>
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div>
            <input
              className="border p-2 rounded-sm w-full"
              placeholder="Email"
            ></input>
          </div>
          <div>
            <input
              className="border p-2 rounded-sm w-full"
              placeholder="Password"
            ></input>
          </div>
          <div className="flex justify-between">
            <button
            onClick={()=>{handleClicked()}}
              id="back"
              className="border px-8 py-1 rounded-2xl bg-sky-400 text-white"
            >
              Sign In
            </button>
            <button 
            onClick={handle1}
            className=" text-blue-900 underline">
              or,Create Account
            </button>
          </div>
          <div>
            <button className="border p-2 rounded-sm w-full flex justify-center items-center gap-2">
              <img src="\images\f_logo_RGB-Blue_1024.png" />
              Sign Up with Facebook
            </button>
          </div>
          <div>
            <button className="border p-2 rounded-sm w-full flex justify-center items-center gap-2">
              <img src="\images\search.png" />
              Sign Up with Google
            </button>
          </div>
          <div>
            <button className="w-full flex justify-center items-center">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MsignIn;
