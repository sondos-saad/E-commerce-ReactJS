import React from 'react'
import photo2 from '../assets/laptop1.jpg';
import { FaEye, FaHeart } from 'react-icons/fa';

function Shop({shop, Filter ,allCateFilter}) {
  return (
    <section className='shop'>
        
        <div className='container w-[90%] mx-auto'>
            <h2 className='text-4xl font-bold '># shop</h2>
            <p className='text-gray-500'>Home . Shop</p>
            <div className='md:flex gap-[1rem]'>
                <div className='left-box md:w-[25%] '>
                    <div className='category mt-5 border  rounded-xl w-full'>
                        <div className='header'>
                            <h2 className='text-xl font-bold mb-2 bg-gray-200 rounded-tl-xl rounded-tr-xl text-center py-2 uppercase'>all categories</h2>
                        </div>
                        <div className='box p-2'>
                            <ul >
                                <li onClick={() => allCateFilter ()} className='text-lg uppercase cursor-pointer font-semibold mb-2 text-gray-500 hover:text-black'># All Product</li>
                                <li className='text-lg uppercase cursor-pointer font-semibold mb-2 text-gray-500 hover:text-black' onClick={() => Filter ("mobile")}># mobile</li>
                                <li className='text-lg uppercase cursor-pointer font-semibold mb-2 text-gray-500 hover:text-black' onClick={() => Filter ("tv")}># tv</li>
                                <li className='text-lg uppercase cursor-pointer font-semibold mb-2 text-gray-500 hover:text-black' onClick={() => Filter ("laptop")}># laptop</li>
                                <li className='text-lg uppercase cursor-pointer font-semibold mb-2 text-gray-500 hover:text-black' onClick={() => Filter ("headphone")}># headphone</li>
                                <li className='text-lg uppercase cursor-pointer font-semibold mb-2 text-gray-500 hover:text-black' onClick={() => Filter ("watch")}># watch</li>
                            </ul>
                        </div>
                    </div>
                    <div className='banner mt-2 w-full'>
                        <div className='img_box'>
                            <img src={photo2} alt='photo' className='rounded-2xl'/>
                        </div>
                    </div>
                </div>
                <div className='right_box md:w-[70%] mx-auto'>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src={photo2} alt='photo' className='rounded-2xl w-full h-[300px]'/>
                        </div>
                    </div>
                    <div className='product_box'>
                        <h2 className='text-4xl font-bold my-8 border-b-amber-400 border-b-2 w-fit'>Shop Product</h2>
                        <div className='product_container flex flex-wrap gap-[1rem] mt-2'>
                            {
                                shop.map((curEle)=>{
                                    return(
                                        <div className='box w-[250px] p-2 border-gray-200 border rounded-2xl relative'>
                                            <div className='img'>
                                                <img src={curEle.img} alt='photo' className='rounded-2xl w-[80%] mx-auto mt-2'/>
                                                <div className='icon absolute top-5 left-0'>
                                                    <ul>
                                                        <li className='bg-amber-400 shadow-2xl w-fit p-2 mb-2'>
                                                            <FaHeart className=''/>
                                                        </li>
                                                        <li className='bg-amber-400 shadow-2xl w-fit p-2 mb-2'><FaEye/></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='details'>
                                                <h3 className='mt-3 text-center font-bold text-xl'>{curEle.name}</h3>
                                                <p className='text-amber-500 text-center mt-2'>$ {curEle.price}</p>
                                                <button className='bg-amber-400 p-2 rounded-xl mt-5 ml-20'>Add To Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Shop
