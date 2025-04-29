import React, { useState } from 'react'
import videoLap from '../assets/videoLaptop.mp4'
import { Link } from 'react-router-dom'
import HomeProduct from './HomeProducts'

function Home() {
    const [trendingProduct, setTrendingProduct]=useState(HomeProduct)
  return (
    <section className=' relative'>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='w-[80%] mx-auto py-[5rem]'>
                <h3 className='  text-xl font-bold mb-2 text-amber-400'>silver aluminum</h3>
                <h2 className=' text-white text-7xl  font-bold mb-5'>Apple Watch</h2>
                <p className=' text-white text-sm  font-bold mb-5'>30% off at your first order</p>
                <Link to='/shop' className='bg-amber-400 p-2 font-bold rounded-xl'>Shop Now</Link>
            </div>
        </div>
        <div className='mt-5'>
            <div className='w-[80%] mx-auto bg-gray-100 rounded-xl p-4'>
                <div className='right-box'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className='font-bold text-3xl'>TRENDING PRODUCT</h2>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-semibold text-lg hover:text-purple-500 duration-300'>New</h3>
                            <h3 className='font-semibold text-lg hover:text-purple-500 duration-300'>Featured</h3>
                            <h3 className='font-semibold text-lg hover:text-purple-500 duration-300'>Top selling</h3>
                        </div>
                    </div>
                    <div className='products'>
                        <div>
                            <div>
                                {
                                    trendingProduct.map((curElm) => {
                                        return(
                                            <>
                                                <div>
                                                    <div>
                                                        <img src={curElm.img} alt={curElm.name}/>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-box'>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
