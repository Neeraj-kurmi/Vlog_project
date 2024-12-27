import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { RiAccountBox2Fill } from "react-icons/ri";


const Catogaries = () => {
  return (
    <>
    <div className='hidden md:flex justify-between items-center mx-auto max-w-[1040px] h-[68px] px-4'>
        <div className=''>
            <ul className='flex gap-4'>
                <li className='font-bold'><a>All Posts (32)</a></li>
                <li><a>Article</a></li>
                <li><a>Event</a></li>
                <li><a>Education</a></li>
                <li><a>Job</a></li>
            </ul>
        </div>
        <div className='flex gap-2 '>
            <button className='border p-2 rounded-lg bg-slate-200 flex items-center'>Write Post<IoMdArrowDropdown /></button>
            <button className='border p-2 rounded-lg bg-cyan-300 flex items-center gap-1'><RiAccountBox2Fill />Join Group</button>
        </div>
    </div>
    <div className='flex md:hidden justify-between items-center mx-auto max-w-[1040px] h-[68px] px-6'>
        <div className=''>
            <ul className='flex gap-4'>
                <li className='font-bold'><a>All Posts (32)</a></li>
            </ul>
        </div>
        <div className='flex gap-2 font-semibold'>
            <button className='border p-2 rounded-lg bg-slate-200 flex items-center'>Filter: All<IoMdArrowDropdown /></button>
        </div>
    </div>
    <hr className='max-w-[1040px] mx-auto'/>
    </>
  )
}

export default Catogaries