import React from 'react'
import { FaHeadphones, FaPiggyBank, FaShippingFast } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa6'


function Footer() {
  return (
    <footer className=' bg-black mt-9'>
      <div className='w-[90%] mx-auto text-white py-[2rem] flex gap-[2rem] flex-wrap'>
        <div className=' md:border-r-[1px] md:w-[35%] pr-2'>
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
        <div className=' pl-5 md:w-[60%]'>
            <div >
                <h1 className='text-xl md:text-5xl font-bold text-white text-center'>LoGo</h1>
                <p className='mt-2 text-sm text-gray-300 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eveniet hic cum. Laudantium, et. </p>
            </div>
            <div className=' flex justify-between gap-[1rem] flex-wrap md:flex-nowrap mt-9 '>
                <div className=' md:w-[32%] mx-auto'>
                    <h3 className='font-bold text-xl mb-2'>Your Account</h3>
                    <ul className='text-gray-300 text-sm'>
                        <li>About us</li>
                        <li>Account</li>
                        <li>Payment</li>
                        <li>Sales</li>
                    </ul>
                </div>
                <div className=' md:w-[32%] mx-auto'>
                    <h3 className='font-bold text-xl mb-2'>Products</h3>
                    <ul className='text-gray-300 text-sm'>
                        <li>Delivery</li>
                        <li>Track Order</li>
                        <li>New product</li>
                        <li>Old product</li>
                    </ul>
                </div>
                <div className=' md:w-[32%] mx-auto'>
                    <h3 className='font-bold text-xl mb-2'>Contact Us</h3>
                    <ul className='text-gray-300 text-sm'>
                        <li>Adress: Lorem ipsum dolor sit amet .</li>
                        <li>tel: +(012)0000000</li>
                        <li>Email: info@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
