import { MoveRight } from 'lucide-react';
import React from 'react'
import { FaRegEye } from "react-icons/fa6";
import { Link } from 'react-router';

const Login = () => {
  return (
    <>
    
    
    <section id='login' className=''>
        <div className="container">
            <div className="login_row py-[50px] bg-[#F0F2F3] rounded-b-[20px] ">
            </div>
                <div className='w-[648px] h-[450px] my-[100px] ml-[500px] pt-[32px] text-center px-[32px] bg-white shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]  '>
                    <div><h2 className='text-[32px] font-semibold font-inter text-[#272343]'>Sign In</h2></div>
                    <div className='w-[587px] bg-[#F0F2F3] rounded-[8px] mt-[24px] mb-[16px] '
                    ><input className='w-[90%] py-[17px]  text-[16px] font-normal font-inter text-[#9A9CAA]   border-none outline-none ' type="email" placeholder='Email' /></div>
                    <div className='w-[587px] bg-[#F0F2F3] px-[20px] rounded-[8px] flex justify-between items-center'>
                        
                        <input className='w-[90%] py-[17px]  text-[16px] font-normal font-inter text-[#9A9CAA] border-none outline-none ' type="password" placeholder='Password' />
                    <FaRegEye />
                    </div>
                    <div>
                        <div className='mt-[16px] mb-[24px] flex justify-between items-center'>
                            <div className='flex items-center gap-[10px]'>

                            <input id='log' className='w-[20px] h-[20px] rounded-1' type="checkbox" />
                            <label htmlFor="log" className='text-[14px] font-normal font-dm text-[#636270]'>Remember me</label>
                      
                            </div>
                            <Link className='text-[14px] font-medium font-dm text-[#007580]'>Forget Password</Link>
                        </div>
                    </div>
                    <button className='w-[584px] py-[17px] flex justify-center hover:bg-[#007580] items-center gap-[20px] rounded-[8px] text-[16px] font-semibold font-inter text-[#fff]  bg-[#029FAE]'>
                        
                        <p>Sign In</p>
                        <MoveRight />
                        </button>
                        <div className='flex justify-center items-center gap-1 py-[24px]'>
                            <p className='text-[14px] font-normal font-inter text-[#272343]'>Don’t have account?</p>
                            <Link className='text-[14px] font-medium font-inter text-[#007580]'> Sign Up</Link>
                        </div>
                
                </div>
        </div>

    </section>
    
    
    
    
    
    
    </>
  )
}

export default Login