import React from 'react'
import CommonHead from './common/CommonHead'

import aboutpic1 from '../assets/images/aboutpic1.png'
import aboutpic2 from '../assets/images/aboutpic2.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
      var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
    
    <section id='about' className='bg-[#F0F2F3] mb-[80px]'>
        <div className="container">
            <div className='pt-[84px]'> <CommonHead Head_text={'What client says about us'} /></div>

   <Slider {...settings}>
      <div>
               <div  className='w-[648px] bg-[#ffff] mt-[40px] mb-[80px]'>
                    <div className='py-[40px] px-[40px]'>
                        
                        <p className='w-[557px] border-l-2 pl-[20px] text-[20px] font-inter font-normal text-[#636270] border-[#059EBF] '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“</p>
                    
                    <div className=' flex items-center gap-[20px] pt-[25px]'>
                        <div><img src={aboutpic1} alt="about-pic" /></div>
                        <div>
                            <h2 className='text-[20px] font-medium font-inter text-[#272343]'>Kristin Watson</h2>
                            <p className='text-[16px] font-normal font-inter text-[#9A9CAA]'>Fashion Designer</p>
                            </div>
                    </div>
                    
                    </div>

                </div>
      </div>
      <div>
       <div  className='w-[648px] bg-[#ffff] mt-[40px] mb-[80px]'>
                    <div className='py-[40px] px-[40px]'>
                        
                        <p className='w-[557px] border-l-2 pl-[20px] text-[20px] font-inter font-normal text-[#636270] border-[#059EBF] '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“</p>
                    
                    <div className=' flex items-center gap-[20px] pt-[25px]'>
                        <div><img src={aboutpic2} alt="about-pic" /></div>
                        <div>
                            <h2 className='text-[20px] font-medium font-inter text-[#272343]'>Esther Howard</h2>
                            <p className='text-[16px] font-normal font-inter text-[#9A9CAA]'>Fashion Designer</p>
                            </div>
                    </div>
                    
                    </div>

                </div>
      </div>

    </Slider>

            <div className='flex  justify-around items-center'>


                {/* <div  className='w-[648px] bg-[#ffff] mt-[40px] mb-[80px]'>
                    <div className='py-[40px] px-[40px]'>
                        
                        <p className='w-[557px] border-l-2 pl-[20px] text-[20px] font-inter font-normal text-[#636270] border-[#059EBF] '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“</p>
                    
                    <div className=' flex items-center gap-[20px] pt-[25px]'>
                        <div><img src={aboutpic1} alt="about-pic" /></div>
                        <div>
                            <h2 className='text-[20px] font-medium font-inter text-[#272343]'>Kristin Watson</h2>
                            <p className='text-[16px] font-normal font-inter text-[#9A9CAA]'>Fashion Designer</p>
                            </div>
                    </div>
                    
                    </div>

                </div>

                  <div  className='w-[648px] bg-[#ffff] mt-[40px] mb-[80px]'>
                    <div className='py-[40px] px-[40px]'>
                        
                        <p className='w-[557px] border-l-2 pl-[20px] text-[20px] font-inter font-normal text-[#636270] border-[#059EBF] '>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“</p>
                    
                    <div className=' flex items-center gap-[20px] pt-[25px]'>
                        <div><img src={aboutpic2} alt="about-pic" /></div>
                        <div>
                            <h2 className='text-[20px] font-medium font-inter text-[#272343]'>Esther Howard</h2>
                            <p className='text-[16px] font-normal font-inter text-[#9A9CAA]'>Fashion Designer</p>
                            </div>
                    </div>
                    
                    </div>

                </div> */}

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default About