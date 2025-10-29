import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full bg-white shadow-md">
      {/* 🌟 Centered navbar content */}
      <div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-6 font-medium min-h-[80px] rounded-xl">

        {/* ✅ Logo shifted 1 inch to the right */}
        <Link to='/' className='relative '>
          <img src={assets.logo} className='w-32' alt='logo' />
        </Link>

        {/* Navigation links */}
        <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1px] bg-gray-700 hidden' />
          </NavLink>
        </ul>

        {/* Icons */}
        <div className='flex items-center gap-5'>
          <img src={assets.search_icon} className='w-5 cursor-pointer' alt='' />
          <div className='group relative'>
            <img className='w-5 cursor-pointer' src={assets.profile_icon} alt='' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Order</p>
                <p className='cursor-pointer hover:text-black'>Log Out</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className='w-5 cursor-pointer sm:hidden'
            alt=''
          />
        </div>
      </div>

      {/* Sidebar overlay */}
      {visible && <div className="fixed inset-0 bg-black/40 z-40"></div>}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-500 ${
          visible ? 'w-full' : 'w-0'
        }`}
      >
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
