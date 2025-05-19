import React from 'react'
import { FaHeadphones, FaPiggyBank, FaShippingFast } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className=' bg-black mt-9'>
      <div className='container w-[90%] mx-auto text-white py-[2rem]'>
        <div className='left-box border-r-[1px] w-[300px] pr-2'>
            <div className='box flex items-center gap-5 mb-5'>
                <div className='icon_box text-2xl text-amber-400'>
                    <FaPiggyBank/>
                </div>
                <div className='detail'>
                    <h3 className='text-amber-400 font-bold text-xl'>Great saving</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, et.</p>
                </div>
            </div>
            <div className='box flex items-center gap-5 mb-5'>
                <div className='icon_box text-2xl text-amber-400'>
                    <FaShippingFast/>
                </div>
                <div className='detail'>
                    <h3 className='text-amber-400 font-bold text-xl'>Free delivery</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, et.</p>
                </div>
            </div>
            <div className='box flex items-center gap-5 mb-5'>
                <div className='icon_box text-2xl text-amber-400'>
                    <FaHeadphones/>
                </div>
                <div className='detail'>
                    <h3 className='text-amber-400 font-bold text-xl'>24 Support</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, et.</p>
                </div>
            </div>
            <div className='box  flex items-center gap-5 mb-5'>
                <div className='icon_box text-2xl text-amber-400'>
                    <FaWallet/>
                </div>
                <div className='detail'>
                    <h3 className='text-amber-400 font-bold text-xl'>Money back</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, et.</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
