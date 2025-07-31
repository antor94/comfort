import React from 'react'
import { CiCircleAlert } from 'react-icons/ci'
import { IoCheckmark } from 'react-icons/io5'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Header = () => {
  return (
    <>

    <section className='w-full bg-[#272343]'>
        <div className="container">
            <div className="head-row py-[15px] flex justify-between items-center">
                <div className='flex justify-between items-center gap-[8px]'>
                    <IoCheckmark className='text-[#fff]' />

                <h2 className='text-[13px] font-normal font-inter text-[#fff]'>Free shipping on all orders over $50</h2>
                </div>
                <div  className='flex justify-between items-center gap-[24px]'>
                    <div className='flex justify-between items-center'>
                    <p className='text-[13px] font-normal font-inter text-[#fff]'>Eng</p>
                        <MdKeyboardArrowDown  className='text-[#fff]'/>

                    </div>
                    <p className='text-[13px] font-normal font-inter text-[#fff]'>Faqs</p>
                    <div className='flex justify-between items-center gap-[6px]'>
                        <CiCircleAlert className='text-[#fff]' />
                        <p className='text-[13px] font-normal font-inter text-[#fff]'>Need Help</p>
                    </div>
                </div>
            </div>
        </div>

    </section>

    
    
    
    </>
  )
}

export default Header