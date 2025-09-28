import React from 'react'

function Contact() {
  return (
    <section className='w-[80%] mx-auto py-4'>
      <div className='container '>
        <div className='form bg-amber-100  p-2 rounded-bl-2xl rounded-br-2xl w-[50%] mx-auto border-t-2' >
            <h2 className='font-bold text-3xl my-4 text-center'>#CONTACT US</h2>
            <form method='POST' className='w-[80%] mx-auto my-6'>
                <div className='box flex gap-4 items-center  mb-4'>
                    <div className='label w-[15%]'>
                        <h4 className='font-bold'>Name</h4>
                    </div>
                    <div className='input w-[70%]'>
                        <input type='text' placeholder='Name' value='' name='' className='border rounded-2xl p-2 w-[100%]'/>
                    </div>
                </div>
                <div className='box flex gap-4 items-center  mb-4'>
                    <div className='label w-[15%]'>
                        <h4 className='font-bold'>E-mail</h4>
                    </div>
                    <div className='input w-[70%]'>
                        <input type='email' placeholder='Email' value='' name='' className='border rounded-2xl p-2 w-[100%]'/>
                    </div>
                </div>
                <div className='box flex gap-4 items-center mb-4'>
                    <div className='label w-[15%]'>
                        <h4 className='font-bold'>Subject</h4>
                    </div>
                    <div className='input w-[70%]'>
                        <input type='text' placeholder='Subject' value='' name='' className='border rounded-2xl p-2 w-[100%]' />
                    </div>
                </div>
                <div className='box flex gap-4 items-center  mb-4'>
                    <div className='label w-[15%]'>
                        <h4 className='font-bold'>Message</h4>
                    </div>
                    <div className='input w-[70%]'>
                       <textarea placeholder='Message !' value='' name='' className='border rounded-2xl p-2 w-[100%]' ></textarea>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='w-[50%] bg-black text-white font-bold text-xl p-2 rounded-2xl cursor-pointer'>Send</button>
                </div>
                
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
