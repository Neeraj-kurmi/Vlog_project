import  { useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import SignIn from './SignIn';
const Navbar = () => {
  const [show,setShow]=useState(false);
  const handleClick=()=>{
     setShow(!show)
  }
  return (
    <div className='hidden md:flex items-center justify-between mx-auto py-4 px-20 '>
        <div className='font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 ml-10 items-center border rounded-full text-white'>
        Vl📷g
        </div>
        <div className='flex border rounded-3xl p-2 w-80 items-center gap-2 text-gray-500'>
        <MdOutlineSearch />
          <input placeholder='Search for your favorite groups'
           className='w-72 outline-none'
          />
        </div>
        <div className='flex items-center'>
          <p>Create account.<button
          onClick={handleClick}
           className=' text-blue-800 cursor-pointer'>It's free</button></p>
          <IoMdArrowDropdown />
        </div>
        
        <SignIn show={show} handleClick={handleClick}/>
        
    </div>
  )
}

export default Navbar