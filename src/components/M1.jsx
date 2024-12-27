import React, { useState } from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoSignIn,GoSignOut } from "react-icons/go";

const M1 = () => {
  const [show,setShow]=useState(false);
  const handleClick=()=>{
    setShow(!show)
  }
  return (
    <div className='h-fit relative overflow-hidden text-white bg-no-repeat bg-content '
    >
    <img src='/images/Rectangle 2.png'
    className=' absolute top-0 left-0 -z-10 w-full aspect-auto h-full'
    ></img>
    {
      !show&&<div className='pt-8 text-2xl px-8 text-nowrap font-bold flex md:hidden w-screen justify-between'>
            <button><GoArrowLeft /></button>
            <button
            onClick={handleClick}
             className='flex items-center p-2 border border-white rounded-lg text-sm'><GoSignOut/> Join group</button>
    </div>
    }
    {
      show&&<div className='pt-8 text-2xl px-8 text-nowrap font-bold flex md:hidden w-screen justify-between'>
            <button><GoArrowLeft /></button>
            <button
            onClick={handleClick}
             className='flex items-center p-2 border border-white rounded-lg text-sm'><GoSignIn /> Leave group</button>
    </div>
    }
        <div className='pt-6 md:pt-56 md:text-2xl md:px-40 px-8 font-bold opacity-90'>
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
        </div>
    </div>
  )
}

export default M1