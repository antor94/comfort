import React from 'react'
import Common from '../components/common/CommonHead'
import images1 from '../assets/images/Image (2).png'
import images2 from '../assets/images/c-2.png'
import images3 from '../assets/images/c-3.png'
import images4 from '../assets/images/c-4.png'
import { LuShoppingCart } from "react-icons/lu";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Added = () => {


  const settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
       nextArrow: <BsArrowRight className=" font-light"  />,
        prevArrow: <BsArrowLeft  />
  };


  return (
    <>

    <section id='featured' className=' pb-[80px]'>
        <div className="container">
                <div><h2><Common Head_text={'recently Added'} /></h2></div>
            <div className="fea_row pt-[40px]">

{/* ------------------- slider */}
      <Slider {...settings}>
        <div>
        <div className='w-[312px] h-[377px] overflow-hidden '>
                    <div className='h-[312px]'>  <img src={images1} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

                    </div>
                    </div>
         

                </div>
        </div>
        <div>
                 <div className='w-[312px] h-[377px] overflow-hidden '>


                    <div className='h-[312px]'>  <img src={images2} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

                    </div>
                    </div>
         

                </div>
        </div>
        <div>
            <div className='w-[312px] h-[377px] overflow-hidden '>
                    <div className='h-[312px]'>  <img src={images3} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

                    </div>
                    </div>
         

                </div>
        </div>
        <div>
        <div className='w-[312px] h-[377px] overflow-hidden '>


                    <div className='h-[312px]'>  <img src={images4} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

                    </div>
                    </div>
         

                </div>
        </div>
     
      </Slider>


{/* ------------------- cart */}

{/* <div className='pt-[40px] flex justify-between items-center'>

                <div className='w-[312px] h-[377px] overflow-hidden '>
                    <div className='h-[312px]'>  <img src={images1} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

                    </div>
                    </div>
         

                </div>

                <div className='w-[312px] h-[377px] overflow-hidden '>


                    <div className='h-[312px]'>  <img src={images2} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

                    </div>
                    </div>
         

                </div>

                <div className='w-[312px] h-[377px] overflow-hidden '>
                    <div className='h-[312px]'>  <img src={images3} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

                    </div>
                    </div>
         

                </div>

                <div className='w-[312px] h-[377px] overflow-hidden '>


                    <div className='h-[312px]'>  <img src={images4} alt="images" />  </div>

                    <div className='flex justify-around mt-[14px]'>

                    <div>
                        <p className='text-[16px] font-normal font-inter text-[#272343] hover:text-[#029FAE]'>Library Stool Chair</p>
                        <h2 className='text-[18px] font-semibold font-inter text-[#272343] '>$20</h2>
                    </div>
                    <div className='w-[44px] h-[44px] bg-[#F0F2F3] flex hover:text-[#fff]  justify-center items-center hover:bg-[#029FAE] rounded-[8px]'>
                        <LuShoppingCart  />

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

export default Added