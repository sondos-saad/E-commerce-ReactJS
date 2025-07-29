import React from 'react'
import { MdLocalShipping ,MdLogin ,MdLogout} from "react-icons/md";
import { FaSearch ,FaUserAlt} from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

function Nav({search, setSearch , searchProduct}) {
    const { loginWithRedirect } = useAuth0();
    const { logout , user, isAuthenticated} = useAuth0();

  return (
    <div className='w-full'>
        <div className=' flex p-[10px] bg-amber-400'>
            <div className=' ml-[20px] text-xl'>
                <MdLocalShipping />
            </div>
            <div>
                <p className='text-sm ml-[10px]'>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
        <div className='w-[80%] mx-auto flex items-center justify-between py-4'>
            <h1 className='text-xl md:text-5xl font-bold text-black'>LoGo</h1>
            <div className='flex items-center gap-1'>
                <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value) } className='border-[1px] rounded-xl p-2'/>
                <button onClick={searchProduct} className='bg-amber-400 p-2 rounded-xl text-black md:w-[50px] flex items-center justify-center md:h-[40px]'><FaSearch /></button>
            </div>
            {
                isAuthenticated ?   
                // logout button
                    <div className='flex items-center justify-center gap-2'>
                        <div className='font-bold md:text-xl'>
                            <MdLogout />
                        </div>
                        <div className='font-bold md:text-lg bg-amber-400 p-2 rounded-xl text-black'>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                        </div>
                    </div>
                    :
                    // login button
                    <div className='flex items-center justify-center gap-2'>
                        <div className='font-bold md:text-xl'>
                            <MdLogin />
                        </div>
                        <div className='font-bold md:text-lg bg-amber-400 p-2 rounded-xl text-black'>
                            <button onClick={() => loginWithRedirect()}>Login</button>
                        </div>
                    </div>
            }
        </div>
        <div className=' bg-black text-white py-2'>
           <div className='w-[80%] mx-auto md:flex items-center justify-between'>
            <div className='flex items-center gap-[.5rem]'>
                        {
                            isAuthenticated ? <>
                                <div className=' text-amber-400 p-2 rounded-xl'>
                                    <FaUserAlt />
                                </div>
                                <div>
                                    <h2 className='text-xs'>{user.name}</h2>
                                    <p className='text-xs'>{user.email}</p>
                                </div>
                            </>
                            :
                            <>
                                <div className='text-amber-400 p-2 rounded-xl'>
                                    <FaUserAlt />
                                </div>
                                <div>
                                    <p className='text-xs'>Please Login</p>
                                </div>
                            </>
                        }
                </div>
                <div >
                    <ul className='flex items-center gap-[1rem] font-bold'>
                        <li><Link to='/' className='hover:text-amber-400'>Home</Link></li>
                        <li><Link to='/shop' className='hover:text-amber-400'>Shop</Link></li>
                        <li><Link to='/cart' className='hover:text-amber-400'>Card</Link></li>
                        <li><Link to='/about' className='hover:text-amber-400'>About</Link></li>
                        <li><Link to='/contact' className='hover:text-amber-400'>Contact</Link></li>
                    </ul>
                </div>
                <div className='bg-amber-400 p-2 rounded-xl text-black font-bold text-center'>
                    <p>flat 10% over all iphone</p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Nav
