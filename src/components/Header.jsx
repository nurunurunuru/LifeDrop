import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Navbar from './Navbar'
import { FaBarsStaggered, FaRegCircleUser } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { GiHeartDrop } from 'react-icons/gi'
import { GiBeachBag } from 'react-icons/gi'
import { TbArrowNarrowRight } from 'react-icons/tb'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import logo from '../assets/Logo.png'

const Header = () => {

  const {setShowSearch, getCartCount, navigate, token, setToken} = useContext(ShopContext)
  const [menuOpened, setMenuOpened] = useState(false)
  // const [token,setToken] = useState(false)
  // const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpened((prev)=> !prev)
  }

  const logout = () =>{
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
    navigate('/login')
  }
  return (
       <header className='py-5 w-full bg-white'>
        <div className='max-padd-container flexBetween'>
         {/* Logo */}
          <Link to={'/'} className=' text-2xl font-bold flex-1  xl:hidden'>
             <img
            src={logo}
            alt="LifeDrop Logo"
            className="h-28 w-28 object-contain absolute -top-2 transition-all duration-300 hover:scale-105"
           />
          </Link>

         {/* navbar */}

        <div className='flex-1'>
        <Navbar 
  menuOpened={menuOpened} 
  toggleMenu={toggleMenu} // Correct prop name
  containerStyles={`${menuOpened ? 'flex flex-col gap-y-6 h-screen w-3/4 max-w-xs bg-white shadow-lg fixed top-0 left-0 px-6  py-8 z-40' :'hidden xl:flex gap-x-8 items-center'}`}
/>

        </div>

        {/* Logo */}
        <Link to={'/'} className='text-2xl font-bold flex-1 hidden  xl:flex'>
            <img
            src={logo}
            alt="LifeDrop Logo"
            className="h-28 w-28 object-contain absolute -top-2 transition-all duration-300 hover:scale-105"
           />
          </Link>

          {/* right-side */}
          <div className='flexBetween gap-x-6 xs:gap-x-8'>
            {!menuOpened && (
              <FaBarsStaggered onClick={toggleMenu} className='xl:hidden cursor-pointer text-2xl'/>
            )}
            <div>
              <FaSearch onClick={()=>setShowSearch((prev)=> !prev)} className='text-xl cursor-pointer'/>
            </div>
            {/* <Link to={'/cart'} className='flex relative'>
            <GiBeachBag className='text-[25px]'/>
            <span className='bg-cyan-300 text-white medium-14 absolute right-0.5 -top-3 flexCenter w-5 h-5 rounded-full shadow-inner'>{getCartCount()}</span>
            </Link> */}

            <div className='group relative'>
              <div onClick={() => !token && navigate('/login')}>
                <FaRegCircleUser className='text-2xl cursor-pointer'/>
              </div>
              {token && <>
              <ul className='bg-white shadow-sm p-3 w-32 ring-1 ring-slate-900/15 rounded absolute right-0 hidden group-hover:flex flex-col '>
                {/* <li onClick={() => navigate('/orders')} className='flexBetween cursor-pointer'>
                  <p>Orders</p>
                  <TbArrowNarrowRight className='text-[19px] opacity-50'/>
                </li> */}
                <hr className='my-2'/>
                <li onClick={logout} className='flexBetween cursor-pointer'>
                  <p>Logout</p>
                  <TbArrowNarrowRight className='text-[19px] opacity-50'/>
                </li>
              </ul>
              </>}
            </div>
          </div>

    </div>
    </header>
  )
}

export default Header