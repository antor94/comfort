import React from 'react'
import logo from '../assets/images/Logo.png'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router';
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
    


    <section className='py-[20px] bg-[#F0F2F3]'>
        <div className="container" >
            <div className="navbar_row flex justify-between items-center">
                <Link to={'/'}>
                    <img src={logo} alt="brand logo" />
                </Link>
                <div className='w-[413px] bg-[#fff] rounded-[5px] py-[13px] px-[16px] flex justify-between items-center '>
                    <input className='w-[90%] border-none outline-none text-[16px] font-normal font-inter text-[#9A9CAA]' type="text" placeholder='Search here...' />
                    <Link to={'/'}><FiSearch /> </Link>

                </div>
                <div className='flex justify-between items-center gap-[12px]'>
                    <div className='w-[120px] bg-[#fff] rounded-[8px] py-[11px] px-[16px]  flex justify-between items-center'>
                        <LiaShoppingCartSolid />
                        <p className='text-[12px] font-medium font-inter text-[#272343]'>Cart</p>
                        <div className='w-[20px] h-[20px] bg-[#007580] rounded-full flex justify-center items-center'><p className='text-[10px] font-medium font-dm text-[#fff] '>2</p></div>

                    </div>
                    <div className='w-[44px] h-[44px] bg-[#fff] rounded-[8px] flex justify-center items-center'>
                        <FaRegHeart  className='text-[22px]'/>

                    </div>
                    <div className='w-[44px] h-[44px] bg-[#fff] rounded-[8px] flex justify-center items-center'>
                        <CiUser  className='text-[22px]'/>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='border-b-1'>
        <div className="container">
            <div className="nav-Row flex justify-between items-center py-[14px] ">
                <div className='w-[176px] py-[16px] px-[24px] border border-[#E1E3E5] rounded-[6px] flex justify-between items-center'>
                    <MdMenu />
                    <h2 className='text-[14px] font-medium font-inter text-[#272343]'>All Categories</h2>

                </div>
                <div>
                    <ul className='flex justify-between items-center gap-[32px]'>
                        <li ><Link className='text-[14px] font-medium font-inter text-[#636270] hover:text-[#007580]' to={'/'}>Home</Link></li>
                        <li ><Link className='text-[14px] font-medium font-inter text-[#636270] hover:text-[#007580]' to={'/'}>Shop</Link></li>
                        <li ><Link className='text-[14px] font-medium font-inter text-[#636270] hover:text-[#007580]' to={'/'}>Product</Link></li>
                        <li ><Link className='text-[14px] font-medium font-inter text-[#636270] hover:text-[#007580]' to={'/'}>Pages</Link></li>
                        <li ><Link className='text-[14px] font-medium font-inter text-[#636270] hover:text-[#007580]' to={'/'}>About</Link></li>
                    </ul>
                </div>
                <div className='flex justify-between items-center gap-[8px]'>
                    <p className='text-[14px] font-normal font-inter text-[#636270]'>Contact:</p>
                    <h2 className='text-[14px] font-normal font-inter text-[#272343]'>(808) 555-0111</h2>
                </div>
            </div>
        </div>
    {/* <span className='w-full inline-block border border-[#E5E5E5]'></span> */}
    </section>
    
    
    
    </>
  )
}

export default Navbar