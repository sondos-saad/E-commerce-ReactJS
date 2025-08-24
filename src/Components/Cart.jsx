import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';


function Cart({cart, setCart}) {
    // increase quantity 
    const incqty = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curEle)=>{
            return curEle.id === product.id ? {...exist, qty: exist.qty + 1} : curEle
        }))
    }

        // decrease quantity 
    const decqty = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curEle)=>{
            return curEle.id === product.id ? {...exist, qty: exist.qty - 1} : curEle
        }))
    }

    // removeProduct
    const removeProduct = (product) => {
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        if(exist.qty > 0){
            setCart(cart.filter((curEle)=>{
               return curEle.id !== product.id
            }))
        }
    }

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
                        <div className='box flex items-center gap-[2rem]  my-[2rem] bg-gray-200 p-2 rounded-xl'>
                            <div className='img_box w-[20%]'>
                                <img src={curElm.img} alt='photo' className='rounded-2xl'/>
                            </div>
                            <div className='details flex justify-between items-center gap-[2rem] w-[75%]'>
                                <div className='info'>
                                    <h4 className='text-amber-500 font-bold text-lg'>{curElm.cat}</h4>
                                    <h3 className='text-2xl font-bold tracking-wide'>{curElm.name}</h3>
                                    <p className='my-2'>Price: ${curElm.price}</p>
                                    <p className='my-2 pt-2 border-t-[1px] text-xl'>Total: ${curElm.price * curElm.qty}</p>
                                </div>
                                <div className='quantity flex gap-[1rem] items-center mb-4 bg-amber-500'>
                                    <button onClick={() => incqty (curElm)} className='font-bold p-3 cursor-pointer'>+</button>
                                    <input type='number' value={curElm.qty} className='p-1 w-[80px] text-center bg-white'></input>
                                    <button onClick={() => decqty (curElm)} className='font-bold p-3 cursor-pointer'>-</button>
                                </div>
                                
                                <div onClick={()=> removeProduct(curElm)} className='icon'>
                                        <AiOutlineClose className='font-bold text-xl cursor-pointer'/>
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
