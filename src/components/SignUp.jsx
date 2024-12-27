import React from 'react'

const SignUp = ({showSignUp,handleClick1,setShowSignUp}) => {
  
  const handle=(e)=>{
   
   if(e.target.id=='back')setShowSignUp(false)
  }
  return (
    <>
      {
        showSignUp && 
        <div 
        className="inset-0 fixed bg-black bg-opacity-30  backdrop-blur-sm z-50"
        id="back"
        onClick={handle}
        >
          <div className=' max-w-[1040px] mx-auto p-8 border rounded-xl shadow-lg text-xl
    fixed inset-0  backdrop-blur-sm bg-white mt-20 h-[550px]' >
        <div className='flex items-center justify-center bg-green-100 h-14 mb-4'>
           <h4 className=' text-green-600'>Let's learn, share & inspire each other with passion for Computer Engineering. Sign up now✌️</h4>
        </div>
        <div className='flex justify-between items-center mb-4'>
            <div className=' font-bold'>Create Account</div>
            <div
        
            >Aready have an account ? <button 
            onClick={()=>handleClick1()}
            className=' text-blue-600'>Sign In</button></div>
        </div>
        <div className='flex justify-between gap-5'>
            <div className='flex flex-col gap-3'>
               <div className='flex '>
                <input className='border p-2 rounded-sm' placeholder='First Name'></input>
                <input className='border p-2 rounded-sm' placeholder='Last Name'></input>
               </div>
               <div><input className='border p-2 rounded-sm' placeholder='Email'></input></div>
               <div><input className='border p-2 rounded-sm' placeholder='Password'></input></div>
               <div><input className='border p-2 rounded-sm' placeholder='Confirm Password'></input></div>
               <div><button
               id='back'
               onClick={handle}
                className='border p-2 rounded-2xl w-full bg-sky-400 text-white' >Create Account</button></div>
               <div><button className='border p-2 rounded-sm w-full flex justify-center items-center gap-2' ><img src='\images\f_logo_RGB-Blue_1024.png'/>Sign Up with Facebook</button></div>
               <div><button className='border p-2 rounded-sm w-full flex justify-center items-center gap-2' ><img src='\images\search.png'/>Sign Up with Google</button></div>
            </div> 
            <div className='mx-auto flex-col justify-center'>
                <img src='\images\atg_illustration.png' className='mx-auto'/>
                <h4 className=' opacity-30 text-sm'>By Signing up,you agree to our Terms & conditions,Privacy Policy</h4>
            </div>
        </div>
    </div>
        </div>
      }
    </>
  )
}

export default SignUp