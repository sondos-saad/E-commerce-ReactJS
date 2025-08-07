import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../assets/laptop1.jpg';

function Cart({cart}) {
  return (
    <section className='cart w-[80%] mx-auto py-2'>
        <h3 className='text-3xl font-bold uppercase tracking-wide'># cart</h3>
        {
            cart.length === 0 && 
            <>
            <div className='empty_cart'>
                <h2 className='text-center uppercase text-xl tracking-wide'>Your Shopping Cart Is Empty</h2>
                <Link to={'/shop'}>
                    <div className='flex justify-center mt-[2rem]'>
                    <button className='bg-amber-500 p-4 rounded-xl font-bold border-amber-500 border-[1px] hover:bg-transparent hover:border-amber-500 duration-300 cursor-pointer'>Shop Now</button>
                </div>
                </Link>
            </div>
            </>
        }
        <div className='container'>
            {
                cart.map((curElm) => {
                    return(
                        <>
                        <div className='box'>
                            <div className='img_box'>
                                <img src={curElm.img} alt='photo' className='rounded-2xl'/>
                            </div>
                            <div className='details'>
                                <h4>{curElm.cat}</h4>
                                <h3>{curElm.name}</h3>
                                <p>Price: ${curElm.price}</p>
                                <div className='quantity'>
                                    <button>+</button>
                                    <input type='number' value={curElm.qty}></input>
                                    <button>-</button>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Cart
