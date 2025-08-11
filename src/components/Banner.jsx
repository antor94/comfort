import React from "react";
import banner from "../assets/images/Header.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TfiPackage } from "react-icons/tfi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import  service  from "../assets/images/24-hours.png"
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";


const Banner = () => {

  // ------- slider
 var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
      nextArrow: <GoArrowRight />,
    prevArrow: <GoArrowLeft />
  };



  return (
    <>
      <section>
        <div className="container relative">
          {/* ------------ banner-bg */}

    <Slider {...settings}>
      <div>
           <div
            style={{
              background: `URL(${banner})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
            className="banner_row py-[264px] pl-[210px] rounded-b-[48px]"
          >
            <div>
              <p className="text-[14px] font-normal font-inter text-[#272343]  uppercase">Welcome to chairy</p>
              <h2 className="w-[631px] leading-[110%] mt-[8px] mb-[24px] text-[68px] font-bold font-inter text-[#272343]">Best Furniture Collection for your interior.</h2>
              <button className="w-[171px] bg-[#029FAE] flex justify-around  items-center py-[17px] px-[24px] rounded-[8px] text-[16px] font-inter font-semibold text-[#fff]">Shop Now
                <IoIosArrowRoundForward className="text-[24px]" />


              </button>
            </div>
          </div>

      </div>
      <div>
           <div
            style={{
              background: `URL(${banner})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
            className="banner_row py-[264px] pl-[210px] rounded-b-[48px]"
          >
            <div>
              <p className="text-[14px] font-normal font-inter text-[#272343]  uppercase">Welcome to chairy</p>
              <h2 className="w-[631px] leading-[110%] mt-[8px] mb-[24px] text-[68px] font-bold font-inter text-[#272343]">Best Furniture Collection for your interior.</h2>
              <button className="w-[171px] bg-[#029FAE] flex justify-around  items-center py-[17px] px-[24px] rounded-[8px] text-[16px] font-inter font-semibold text-[#fff]">Shop Now
                <IoIosArrowRoundForward className="text-[24px]" />


              </button>
            </div>
          </div>

      </div>
      <div>
         <div
            style={{
              background: `URL(${banner})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
            className="banner_row py-[264px] pl-[210px] rounded-b-[48px]"
          >
            <div>
              <p className="text-[14px] font-normal font-inter text-[#272343]  uppercase">Welcome to chairy</p>
              <h2 className="w-[631px] leading-[110%] mt-[8px] mb-[24px] text-[68px] font-bold font-inter text-[#272343]">Best Furniture Collection for your interior.</h2>
              <button className="w-[171px] bg-[#029FAE] flex justify-around  items-center py-[17px] px-[24px] rounded-[8px] text-[16px] font-inter font-semibold text-[#fff]">Shop Now
                <IoIosArrowRoundForward className="text-[24px]" />


              </button>
            </div>
          </div>

      </div>

    </Slider>

          {/* <div
            style={{
              background: `URL(${banner})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
            className="banner_row py-[264px] pl-[210px] rounded-b-[48px]"
          >
            <div>
              <p className="text-[14px] font-normal font-inter text-[#272343]  uppercase">Welcome to chairy</p>
              <h2 className="w-[631px] leading-[110%] mt-[8px] mb-[24px] text-[68px] font-bold font-inter text-[#272343]">Best Furniture Collection for your interior.</h2>
              <button className="w-[171px] bg-[#029FAE] flex justify-around  items-center py-[17px] px-[24px] rounded-[8px] text-[16px] font-inter font-semibold text-[#fff]">Shop Now
                <IoIosArrowRoundForward className="text-[24px]" />


              </button>
            </div>
          </div> */}

          {/* --------------------- product cart  */}
          <div className="w-[1320px] flex justify-between items-center py-[50px] px-[70px] bg-[#fff] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[12px] absolute top-[783px] right-[100px]">
            <div className="flex items-center gap-[16px]">
                <TfiPackage className="text-[50px]" />
              <div>
                <h2 className="text-[18px] font-medium font-inter text-[#272343]">Discount</h2>
                <p className="text-[15px] font-normal font-inter text-[#9A9CAA]">Every week new sales</p>
              </div>

            </div>
                        <div className="flex items-center gap-[16px]">
                          < MdOutlineLocalShipping  className="text-[50px]"/>
              <div>
                <h2 className="text-[18px] font-medium font-inter text-[#272343]">Free Delivery</h2>
                <p className="text-[15px] font-normal font-inter text-[#9A9CAA]">100% Free for all orders</p>
              </div>

            </div>
                        <div className="flex items-center gap-[16px]">
            <img src={service} alt="logo" />
              <div>
                <h2 className="text-[18px] font-medium font-inter text-[#272343]">Great Support 24/7</h2>
                <p className="text-[15px] font-normal font-inter text-[#9A9CAA]">We care your experiences</p>
              </div>

            </div>
                        <div className="flex items-center gap-[16px]">
            <MdOutlineSecurity className="text-[50px]" />
              <div>
                <h2 className="text-[18px] font-medium font-inter text-[#272343]">secure Payment</h2>
                <p className="text-[15px] font-normal font-inter text-[#9A9CAA]">100% Secure Payment Method</p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
