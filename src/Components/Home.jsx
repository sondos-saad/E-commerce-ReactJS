import React from 'react'
import videoLap from '../assets/videoLaptop.mp4'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className='h-full relative'>
        <video className='w-full'  src={videoLap} muted>
        </video>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 bg-gray-900/60 '>
            <div className='w-[80%] mx-auto pt-[5rem]'>
                <h3 className='  text-xl font-bold mb-2 text-amber-400'>silver aluminum</h3>
                <h2 className=' text-white text-7xl  font-bold mb-5'>Apple Watch</h2>
                <p className=' text-white text-sm  font-bold mb-5'>30% off at your first order</p>
                <Link to='/shop' className='bg-amber-400 p-2 font-bold rounded-xl'>Shop Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Home
