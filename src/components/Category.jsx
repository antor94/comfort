import React from "react";
import CommonHead from "./common/CommonHead";
import fimg1 from '../assets/images/f-1.png'
import fimg2 from '../assets/images/f-2.png'
import fimg3 from '../assets/images/f-3.png'
import fimg4 from '../assets/images/f-4.png'
import fimg5 from '../assets/images/f-5.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";


const Category = () => {

  const settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
   nextArrow: <BsArrowRight className=" font-light"  />,
    prevArrow: <BsArrowLeft  />
  }



  return (
    <>
      <section id="category" className="pb-[80px]">
        <div className="container">  
          
          <CommonHead Head_text={"Top categories"} /> 
          </div>

<div className="pt-[40px]">

{/* ------------------ slider */}

      <Slider {...settings}>
        <div>
            <div style={{ background: `URL(${fimg1})`, backgroundRepeat: `no-repeat`, }} className="w-[424px] h-[424px] opacity-[50%] rounded-[10px] flex flex-col justify-end">

               <div className="w-full py-[20px] bg-[#000] rounded-[10px]  pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Wing Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">3,584 Products</p>
               </div>

            </div>
        </div>
        <div>
        <div style={{ background: `URL(${fimg2})`, backgroundRepeat: `no-repeat`,backgroundSize: `cover`, }} className="w-[424px] h-[424px] rounded-[10px] flex flex-col justify-end">

               <div className="w-full py-[20px] bg-[#000] rounded-[10px]  pl-[20px] opacity-[70%]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Wing Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">3,584 Products</p>
               </div>

            </div>
        </div>
        <div>
           <div style={{ background: `URL(${fimg3})`, backgroundRepeat: `no-repeat`,backgroundSize: `cover`, }} className="w-[424px] h-[424px]  rounded-[10px] flex flex-col justify-end">

               <div className="w-full py-[20px] bg-[#000] rounded-[10px] opacity-[70%]  pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Wooden Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">157 Products</p>
               </div>

            </div>
        </div>
        <div>
            <div style={{ background: `URL(${fimg4})`, backgroundRepeat: `no-repeat`,backgroundSize: `cover`, }} className="w-[424px] h-[424px] rounded-[10px]   flex flex-col justify-end">

               <div className="w-full py-[20px] rounded-[10px]  bg-[#000] opacity-[70%] pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Desk Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">154 Products</p>
               </div>

            </div>

        </div>
        <div>
           <div style={{ background: `URL(${fimg5})`, backgroundRepeat: `no-repeat`,backgroundSize: ``, }} className="w-[424px] h-[424px] rounded-[10px]  opacity-[50%] flex flex-col justify-end">

               <div className="w-full py-[20px] rounded-[10px]  bg-[#000] pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Park Bench</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">154 Products</p>
               </div>

            </div>
        </div>

      </Slider>
</div>



        <div className="flex pt-[40px] justify-between gap-[24px]">

            {/* <div style={{ background: `URL(${fimg1})`, backgroundRepeat: `no-repeat`, }} className="w-[424px] h-[424px] opacity-[50%] rounded-[10px] flex flex-col justify-end">

               <div className="w-full py-[20px] bg-[#000] rounded-[10px]  pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Wing Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">3,584 Products</p>
               </div>

            </div>

              <div style={{ background: `URL(${fimg2})`, backgroundRepeat: `no-repeat`,backgroundSize: `cover`, }} className="w-[424px] h-[424px] rounded-[10px] flex flex-col justify-end">

               <div className="w-full py-[20px] bg-[#000] rounded-[10px]  pl-[20px] opacity-[70%]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Wing Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">3,584 Products</p>
               </div>

            </div>

            <div style={{ background: `URL(${fimg3})`, backgroundRepeat: `no-repeat`,backgroundSize: `cover`, }} className="w-[424px] h-[424px]  rounded-[10px] flex flex-col justify-end">

               <div className="w-full py-[20px] bg-[#000] rounded-[10px] opacity-[70%]  pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Wooden Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">157 Products</p>
               </div>

            </div>

            <div style={{ background: `URL(${fimg4})`, backgroundRepeat: `no-repeat`,backgroundSize: `cover`, }} className="w-[424px] h-[424px] rounded-[10px]   flex flex-col justify-end">

               <div className="w-full py-[20px] rounded-[10px]  bg-[#000] opacity-[70%] pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Desk Chair</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">154 Products</p>
               </div>

            </div>

            <div style={{ background: `URL(${fimg5})`, backgroundRepeat: `no-repeat`,backgroundSize: ``, }} className="w-[424px] h-[424px] rounded-[10px]  opacity-[50%] flex flex-col justify-end">

               <div className="w-full py-[20px] rounded-[10px]  bg-[#000] pl-[20px]">
                <h2 className="text-[20px] font-semibold font-inter text-[#fff]">Park Bench</h2>
                <p className="text-[14px] font-normal font-inter text-[#fff]  ">154 Products</p>
               </div>

            </div> */}

        </div>
      </section>
    </>
  );
};

export default Category;
