import { TiEyeOutline } from "react-icons/ti";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";
import MsignIn from "./MsignIn";
import MsignUp from "./MsignUp";

const M2 = () => {
  const [showMsignUp,setShowMsignUp]=useState(false) 
  const [modal,setModal]=useState(false)
  const handleClicked=()=>{
     setModal(!modal)
  }
  return (
    <div className='flex gap-28 mx-auto max-w-[1040px] md:my-4 md:px-4'>
        <div className='relative flex flex-col gap-4'>
          <div className='border rounded-sm border-gray-300 max-w-[692px]'>
            <img src='\images\Rectangle 5.png' className=''></img>
            <div className='p-4'>

                <h3 className='md:text-2xl font-bold'>✍️ Article</h3>
                <div>
                 <h4 className='md:text-2xl font-bold md:pt-2'>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                 <div>
                  <button></button>
                 </div>
                </div>
                <p className='pb-2'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div>
                       <img src='\images\Rectangle 3.png'></img>
                    </div>
                    <div className=" font-semibold">
                    Siddharth Goyal
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center gap-1'>
                     <TiEyeOutline />
                    <span>1.4k views</span>
                  </div>
                  <button>
                    <img src='\images\Vector.png'></img>
                  </button>
                </div>
                </div>
            </div>
        </div>
        <div className='border rounded-sm border-gray-300 max-w-[692px]'>
            <img src='\images\Rectangle 5 (1).png' className=''></img>
            <div className='p-4'>

                <h3 className='md:text-2xl font-bold'>🔬️ Education</h3>
                <div>
                 <h4 className='md:text-2xl font-bold pt-2'>Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                 <div>
                  <button></button>
                 </div>
                </div>
                <p className=' pb-2'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div>
                       <img src='\images\Rectangle 3 (1).png'></img>
                    </div>
                    <div className=" font-semibold">
                    Sarah West
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center gap-1'>
                     <TiEyeOutline />
                    <span>1.9k views</span>
                  </div>
                  <button>
                    <img src='\images\Vector.png'></img>
                  </button>
                </div>
                </div>
            </div>
        </div>
        <div className='border rounded-sm border-gray-300 max-w-[692px]'>
            <img src='\images\Rectangle 5 (2).png' className=''></img>
            <div className='p-4'>

                <h3 className='md:text-2xl font-bold'>🗓️ Meetup</h3>
                <div>
                 <h4 className='ms:text-2xl font-bold pt-2'>Finance & Investment Elite Social Mixer @Lujiazui</h4>
                 <div>
                  <button></button>
                 </div>
                </div>
                <ul className='flex items-center gap-5'>
                  <li className='flex items-center gap-2'>
                    <img src='\images\baseline-today-24px.png'></img>
                    Fri, 12 Oct, 2018
                  </li>
                  <li className='flex items-center gap-2'>
                  <img src='\images\Group.png'></img>
                  Ahmedabad, India
                  </li>
                </ul>
                <button className='border w-full p-2 my-2 rounded-2xl text-red-600'>Visit Website</button>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div>
                       <img src='\images\Rectangle 3 (2).png'></img>
                    </div>
                    <div className='font-semibold'>
                    Ronal Jones
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center gap-1'>
                     <TiEyeOutline />
                    <span>14.4k views</span>
                  </div>
                  <button>
                    <img src='\images\Vector.png'></img>
                  </button>
                </div>
                </div>
            </div>
        </div>
        <div className='border rounded-sm border-gray-300 max-w-[692px]'>
            <div className='p-4'>
                <h3 className='text-2xl font-bold'>💼️ Job</h3>
                <div>
                 <h4 className='md:text-2xl font-bold pt-2'>Software Developer</h4>
                 <div>
                  <button></button>
                 </div>
                </div>
                <ul className='flex items-center gap-5'>
                  <li className='flex items-center gap-2'>
                    <img src='\images\baseline-today-24px.png'></img>
                    Innovaccer Analytics Private Ltd.
                  </li>
                  <li className='flex items-center gap-2'>
                  <img src='\images\outline-work_outline-24px.png'></img>
                  Noida, India
                  </li>
                </ul>
                <button className='border w-full p-2 my-2 rounded-2xl text-green-600'>Apply on Time job</button>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div>
                       <img src='\images\Rectangle 3 (3).png'></img>
                    </div>
                    <div className='font-bold'>
                    Joseph Gray
                    </div>
                </div>
                <div className=' relative flex items-center gap-3'>
                  <div className='flex items-center gap-1'>
                     <TiEyeOutline />
                    <span>10.4k views</span>
                  </div>
                  <button>
                    <img src='\images\Vector.png'></img>
                  </button>
                </div>
                </div>
            </div>
        </div>
      <button 
      onClick={handleClicked}
      className='flex text-white bg-[#FF5C5C] self-end md:hidden mt-[370px] mr-4 p-3 text-lg fixed border rounded-full'><MdOutlineEdit />
      </button>
      {
          modal&&<MsignIn handleClicked={handleClicked} setShowMsignUp={setShowMsignUp}/>
      }
      {
        showMsignUp&&<MsignUp setShowMsignUp={setShowMsignUp} handleClicked={handleClicked}/>
      }
      </div>
      <div className='hidden md:flex flex-col items-center'>
        <div className='flex  justify-center'>
          <div className='flex gap-2 border-none'>
            <img src='\images\Group.png'/>
            <input placeholder='Enter Your Location'></input>
          </div>
          <button><img src='\images\Vector (1).png'/></button>
        </div>
        <hr className='mt-4'/>
        <div className='hidden md:flex-row items-center gap-2 text-[12px] opacity-35 mb-4'>
          <img src='\images\Vector (2).png'></img>
          <p>Your location will help us serve better.</p>
        </div>
        <div className='flex gap-2 mb-4 items-center'>
          <img src='\images\Vector (3).png'/>
          <p>RECOMMANDED GROUPS</p>
        </div>
        <div className='flex flex-col gap-4'>
        <div className='flex gap-10 justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-1'>
                <img src='\images\Rectangle 6 (3).png'/>
                <div>Leisure</div>
            </div>
            <button className='border rounded-2xl p-2'><a>Follow</a></button>
        </div>
        <div className='flex gap-10 justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-1'>
                <img src='\images\Rectangle 6.png'/>
                <div>Activism</div>
            </div>
            <button className='border rounded-2xl p-2'><a>Follow</a></button>
        </div>
        <div className='flex gap-10 justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-1'>
                <img src='\images\Rectangle 6 (2).png'/>
                <div>MBA</div>
            </div>
            <button className='border rounded-2xl p-2'><a>Follow</a></button>
        </div>
        <div className='flex gap-10 justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-1'>
                <img src='\images\Rectangle 6 (1).png'/>
                <div>Philosopy</div>
            </div>
            <button className='border rounded-2xl p-2'><a>Follow</a></button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default M2