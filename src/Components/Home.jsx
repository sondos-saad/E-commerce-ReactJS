import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeProduct from './HomeProducts'
import { IoMdEye } from "react-icons/io";
import { FaHeart , FaFacebookF ,FaTwitter, FaInstagram ,FaYoutube, FaCartArrowDown} from "react-icons/fa";
import image from '../assets/iphone-6s.jpg'

function Home() {
    const [trendingProduct, setTrendingProduct]=useState(HomeProduct);
    const [newProduct, setNewProduct]=useState(HomeProduct);
    // filter of trending product
    const filterCate = (x)=>{
        const filterProduct = HomeProduct.filter((curElm)=>{
            return curElm.type === x
        })
        setTrendingProduct(filterProduct)
    }

    // all trending product
    const allTrendingProduct=()=>{
        setTrendingProduct(HomeProduct)
    }

    // Product type
    useEffect(()=>{
        productCategory();
    },[])
    const productCategory = () => {
        const newCategory = HomeProduct.filter((x)=>{
            return x.type === 'new'
        })
        setNewProduct(newCategory)
    }

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
            <div className='p-4 md:flex gap-2'>
                <div className='right-box bg-gray-100 rounded-xl p-4 md:w-[60%]'>
                    <div className='md:flex justify-between items-center'>
                        <div>
                            <h2 className='font-bold text-3xl cursor-pointer' onClick={()=> allTrendingProduct()}>TRENDING PRODUCT</h2>
                        </div>
                        <div className='flex gap-5'>
                            <h3 className='font-semibold text-lg hover:text-purple-500 duration-300' onClick={()=> filterCate('new')}>New</h3>
                            <h3 className='font-semibold text-lg hover:text-purple-500 duration-300' onClick={()=> filterCate('Featured')}>Featured</h3>
                            <h3 className='font-semibold text-lg hover:text-purple-500 duration-300' onClick={()=> filterCate('Top selling')}>Top selling</h3>
                        </div>
                    </div>
                    <div className='products'>
                        <div>
                            <div className='flex flex-wrap gap-[1rem] items-center justify-center mt-5'>
                                {
                                    trendingProduct.map((curElm) => {
                                        return(
                                            <>
                                                <div className='w-[200px]  p-2 rounded-xl bg-white' key={curElm.id}>
                                                    <div className='flex justify-between relative'>
                                                        {curElm.img && (
                                                                <img
                                                                    src={curElm.img}
                                                                    alt={curElm.name}
                                                                    className='h-[150px] object-cover rounded-xl'
                                                                />
                                                            )}
                                                        <div className='flex flex-col items-end gap-[1rem] absolute right-0'>
                                                            <div className='bg-amber-400 p-2 text-lg hover:bg-red-700 hover:text-white duration-300'><IoMdEye /></div>
                                                            <div className='bg-amber-400 p-2 text-lg hover:bg-red-700 hover:text-white duration-300'><FaHeart /></div>
                                                        </div>
                                                    </div>
                                                    <div className='info pt-[1rem]'>
                                                        <h3 className='font-bold text-xl'>{curElm.name}</h3>
                                                        <p className='text-red-700 font-bold'>{curElm.price}$</p>
                                                        <button className='bg-amber-400 font-bold p-2 rounded-xl w-full mt-5 mb-2'>Add to card</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <button className='bg-black text-white p-2 rounded-xl block mx-auto mt-[2rem] cursor-pointer border-[1px] hover:bg-transparent hover:text-black duration-300'>Show More</button>
                        </div>
                    </div>
                </div>
                <div className='right-box '>
                    <div className='container '>
                        <div className='testimonial bg-gray-100 rounded-xl p-4'>
                            <div className='head'>
                                <h3 className='text-3xl font-bold text-center pb-4'>OUR TESTIMONIAL</h3>
                            </div>
                            <div className='detail bg-white p-5 rounded-xl'>
                                <div className='imagebox'>
                                    <img src={image} alt='testimonial' className='w-[80px] h-[80px] mx-auto rounded-full object-cover'/>
                                </div>
                                <div className='info mt-5'>
                                    <h3 className='text-center font-bold '>Stephan robot</h3>
                                    <h4 className='text-center text-sm text-amber-500'>Web designer</h4>
                                    <p className='text-center text-sm text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, commodi!</p>
                                </div>
                            </div>
                        </div>
                        <div className='newsletter mt-[3rem] bg-gray-100 rounded-xl p-4'>
                            <div className='head'>
                                <h3 className='text-3xl font-bold text-center pb-4 tracking-widest'>NEWSLETTER</h3>
                            </div>
                            <div className='form flex flex-col justify-center items-center'>
                                <p className='text-center text-gray-500 mb-2'>Join our malling list</p>
                                <input type='email' placeholder='Email' autoComplete='off' className='w-full border-[1px] p-2 border-gray-300 rounded-xl mb-2 '/>
                                <button className='bg-amber-400 p-2 mb-2 rounded-xl'>Subscribe</button>
                                <div className='icon flex gap-[1rem] my-2'>
                                    <div className='border-black border-[1px] rounded-full text-lg p-2' >
                                        <FaFacebookF />
                                    </div>
                                    <div className='border-black border-[1px] rounded-full text-lg p-2' >
                                        <FaTwitter />
                                    </div>
                                    <div className='border-black border-[1px] rounded-full text-lg p-2' >
                                        <FaInstagram />
                                    </div>
                                    <div className='border-black border-[1px] rounded-full text-lg p-2' >
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='banners w-[90%] mx-auto'>
            <div className='container flex gap-[1rem]'>
                <div className='left_box w-[24%] rounded-xl'>
                    <div className='box'>
                        <img src={image} alt='image' className='w-[100%] object-cover  rounded-xl mb-2'/>
                    </div>
                    <div className='box'>
                        <img src={image} alt='image' className='w-[100%] object-cover rounded-xl mb-2'/>
                    </div>
                </div>
                <div className='right-box w-[75%]'>
                    <div className='top flex gap-[3rem] mb-2'>
                        <img src={image} alt='image' className='w-[60%] h-[200px] object-cover rounded-xl'/>
                        <img src={image} alt='image' className='w-[30%]  h-[200px] object-cover rounded-xl'/>
                    </div>
                    <div className='bottom'>
                        <img src={image} alt='image' className='w-[100%] h-[210px] object-cover rounded-xl'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='product_type'>
            <div className='container w-[90%] mx-auto'>
                <div className='box'>
                    <div className='header'>
                        <h2>New Product</h2>
                    </div>
                </div>
                {
                    newProduct.map((curElm)=>{
                        return (
                            <>
                                <div className='productBox'>
                                    <div className='imag_box'>
                                        <img src={curElm.img} alt='image' className='w-[100%] h-[210px] object-cover rounded-xl'/>
                                    </div>
                                    <div className='details'>
                                        <h3>{curElm.name}</h3>
                                        <p>$ {curElm.price}</p>
                                        <div className='icon'>
                                            <button><IoMdEye/></button>
                                            <button><FaHeart/></button>
                                            <button><FaCartArrowDown/></button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Home
