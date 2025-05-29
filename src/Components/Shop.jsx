import React from 'react'

function Shop() {
  return (
    <section className='shop'>
        
        <div className='container w-[90%] mx-auto'>
            <h2 className='text-4xl font-bold '># shop</h2>
            <p className='text-gray-500'>Home . Shop</p>
            <div className='left-box w-[25%]'>
                <div className='category mt-5 border  rounded-xl w-[250px]'>
                    <div className='header'>
                        <h2 className='text-xl font-bold mb-2 bg-gray-200 rounded-tl-xl rounded-tr-xl text-center py-2 uppercase'>all categories</h2>
                    </div>
                    <div className='box p-2'>
                        <ul>
                            <li className='text-lg uppercase cursor-pointer font-semibold mb-2'># tv</li>
                            <li className='text-lg uppercase cursor-pointer font-semibold mb-2'># mobile</li>
                            <li className='text-lg uppercase cursor-pointer font-semibold mb-2'># laptop</li>
                            <li className='text-lg uppercase cursor-pointer font-semibold mb-2'># headphone</li>
                            <li className='text-lg uppercase cursor-pointer font-semibold mb-2'># watch</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      
    </section>
  )
}

export default Shop
