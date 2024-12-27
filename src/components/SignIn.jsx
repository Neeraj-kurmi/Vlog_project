import React, { useState } from "react";
import SignUp from "./SignUp";
import App from "../App";

const SignIn = ({ show, handleClick }) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleClick1 = () => {
    handleClick();
    setShowSignUp(!showSignUp);
  };
  const handle=(e)=>{
    if(e.target.id=='back')handleClick()
  }
  return (
    <>
      {show && (
        <div className="inset-0 fixed bg-black bg-opacity-30  backdrop-blur-sm z-50"
        id="back"
        onClick={handle}
        >
        <div
            className=" max-w-[1040px] mx-auto p-8 border rounded-xl shadow-lg text-xl
    fixed inset-0  backdrop-blur-lg bg-white mt-20 h-[550px]"
          >
            <div className="flex items-center justify-center bg-green-100 h-14 mb-4">
              <h4 className=" text-green-600 ">
                Let's learn, share & inspire each other with passion for
                Computer Engineering. Sign up now✌️
              </h4>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className=" font-bold">Create Account</div>
              <div onClick={handleClick1}>
                Don't have an account yet?{" "}
                <button
                onClick={handleClick1}
                 className=" text-blue-600">Create new for free!</button>
              </div>
            </div>
            <div className="flex gap-20">
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
                <div>
                  <button
                  id="back"
                  onClick={handle} 
                  className="border p-2 rounded-2xl w-full bg-sky-400 text-white">
                    Sign In
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
              <div className="mx-auto flex-col justify-center">
                <img src="\images\atg_illustration.png" className="mx-auto" />
                <h4 className=" opacity-30 text-sm">
                  By Signing up,you agree to our Terms & conditions,Privacy
                  Policy
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
      <SignUp showSignUp={showSignUp} handleClick1={handleClick1} setShowSignUp={setShowSignUp}/>
    </>
  );
};

export default SignIn;
