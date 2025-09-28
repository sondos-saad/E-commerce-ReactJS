import React, { useState } from 'react'

function Contact() {

    const [user, setUser] = useState(
        {
        Name:"",
        email: "",
        subject: "",
        message: "",
        })

    let values, names    
    const data = (e) => {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    const send = async (e) => {
        const {Name, email,subject, message} = user
        e.preventDefault()
        const option ={
            method: 'POST',
            headers: {
                'Contact-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                    Name, email,subject, message
                })
        }
        const send = await fetch('https://react-ecommerce16-default-rtdb.firebaseio.com/Message.json', option)

        if(send) {
            alert("Message Sent")
        }else{
            alert("Error Message Sent Failed")
        }
    }

  return (
    <section className='w-[95%] md:w-[80%] mx-auto py-4'>
      <div >
        <div className='form bg-amber-100  p-2 rounded-bl-2xl rounded-br-2xl md:w-[50%] mx-auto border-t-2' >
            <h2 className='font-bold text-3xl my-4 text-center'>#CONTACT US</h2>
            <form method='POST' className='w-[80%] mx-auto my-6'>
                <div className=' flex gap-4 items-center  mb-4'>
                    <div className='label w-[15%]'>
                        <h4 className='font-bold'>Name</h4>
                    </div>
                    <div className=' w-[70%]'>
                        <input type='text' placeholder='Name' value={user.Name} name='Name' onChange={data} className='border rounded-2xl p-2 w-[100%]'/>
                    </div>
                </div>
                <div className=' flex gap-4 items-center  mb-4'>
                    <div className=' w-[15%]'>
                        <h4 className='font-bold'>E-mail</h4>
                    </div>
                    <div className=' w-[70%]'>
                        <input type='email' placeholder='Email' value={user.email} name='email' onChange={data} className='border rounded-2xl p-2 w-[100%]'/>
                    </div>
                </div>
                <div className=' flex gap-4 items-center mb-4'>
                    <div className=' w-[15%]'>
                        <h4 className='font-bold'>Subject</h4>
                    </div>
                    <div className=' w-[70%]'>
                        <input type='text' placeholder='Subject' value={user.subject} name='subject' onChange={data} className='border rounded-2xl p-2 w-[100%]' />
                    </div>
                </div>
                <div className='flex gap-4 items-center  mb-4'>
                    <div className=' w-[15%]'>
                        <h4 className='font-bold'>Message</h4>
                    </div>
                    <div className=' w-[70%]'>
                       <textarea placeholder='Message !' value={user.message} name='message' onChange={data} className='border rounded-2xl p-2 w-[100%]' ></textarea>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' onClick={send} className='w-[50%] bg-black text-white font-bold text-xl p-2 rounded-2xl cursor-pointer'>Send</button>
                </div>
                
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
