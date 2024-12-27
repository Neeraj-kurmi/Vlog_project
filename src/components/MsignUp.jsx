import React from 'react'

const MsignUp = ({setShowMsignUp,handleClicked}) => {
  const h=()=>{
    setShowMsignUp(false)
  }
  const h1=()=>{
    handleClicked()
    h()
  }
  return (
    <div className='backdrop-blur-sm inset-0  fixed'>
        <div className='flex-col md:hidden px-4 py-2 inset-0 h-full mt-40 bg-white fixed z-50'>
       <div className='flex justify-between mb-2 '>
        <h1 className='font-bold'>Create Account</h1>
        <button
        onClick={h}
        ><img src='/images/Group 3.png'></img></button>
       </div>
       <div className="flex flex-col gap-4 w-full">
                <div className='flex'>
                  <input
                    className="border p-2 rounded-sm w-full"
                    placeholder="FirstName"
                  ></input>
                  <input
                    className="border p-2 rounded-sm w-full"
                    placeholder="LastName"
                  ></input> 
                </div>
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
                  <input
                    className="border p-2 rounded-sm w-full"
                    placeholder="Confirm Password"
                  ></input>
                </div>
                <div className='flex justify-between'>
                  <button
                  onClick={h}
                  id="back"
                  className="border px-6 py-1 rounded-2xl bg-sky-400 text-white">
                    Create Account
                  </button>
                  <button 
                   onClick={h1}
                   
                  className=' text-blue-900 underline'>or,SignIn</button>
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
                <div className='text-center opacity-50 text-sm'>
                By Signing up,you agree to our Terms & conditions,Privacy
                Policy
                </div>
       </div>
    </div>
    </div>
  )
}

export default MsignUp