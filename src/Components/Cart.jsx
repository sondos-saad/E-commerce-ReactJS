import React from 'react'

function Cart({cart}) {
  return (
    <section className='cart w-[80%] mx-auto py-2'>
        <h3 className='text-3xl font-bold uppercase tracking-wide'>#cart</h3>
        {
            cart.length === 0 && 
            <>
            <div className='empty_cart'>
                <h2>Your Shopping Cart Is Empty</h2>
                <button>Shop Now</button>
            </div>
            </>
        }
        <div className='container'>
            
        </div>
    </section>
  )
}

export default Cart
