import React from 'react'
import { MdLocalShipping } from "react-icons/md";

function Nav() {
  return (
    <div className='w-full'>
        <div className='topHeader flex p-[10px] bg-amber-400'>
            <div className='icon ml-[20px] text-xl'>
                <MdLocalShipping />
            </div>
            <div className='info'>
                <p className='text-sm ml-[10px]'>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
        <div className='mid-Header'>
            
        </div>
    </div>
  )
}

export default Nav
