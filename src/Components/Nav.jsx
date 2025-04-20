import React from 'react'
import { MdLocalShipping ,MdLogin } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
    const { loginWithRedirect } = useAuth0();
  return (
    <div className='w-full'>
        <div className=' flex p-[10px] bg-amber-400'>
            <div className=' ml-[20px] text-xl'>
                <MdLocalShipping />
            </div>
            <div>
                <p className='text-sm ml-[10px]'>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
        <div className='w-[80%] mx-auto flex items-center justify-between py-4'>
            <h1 className='text-5xl font-bold text-amber-900'>LoGo</h1>
            <div className='flex items-center gap-1'>
                <input type='text' value='' placeholder='Search' className='border-[1px] rounded-xl p-2'/>
                <button className='bg-amber-900 p-2 rounded-xl text-white w-[50px] flex items-center justify-center h-[40px]'><FaSearch /></button>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div className='font-bold text-xl'>
                    <MdLogin />
                </div>
                <div className='font-bold text-lg bg-amber-900 p-2 rounded-xl text-white'>
                   <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav
