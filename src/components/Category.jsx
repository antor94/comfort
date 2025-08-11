import React from "react";
import CommonHead from "./common/CommonHead";
import fimg1 from '../assets/images/f-1.png'
import fimg2 from '../assets/images/f-2.png'
import fimg3 from '../assets/images/f-3.png'
import fimg4 from '../assets/images/f-4.png'
import fimg5 from '../assets/images/f-5.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Category = () => {

  const settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    nextArrow: <BsArrowRight className=" font-light" />,
    prevArrow: <BsArrowLeft />
  }

  //-------------- Reusable card component
  const CategoryCard = ({ img, title, products }) => (
    <div style={{ background: `url(${img}) center center / cover no-repeat`, }} className="w-[424px] h-[424px] rounded-[10px] flex gap-[5000px] flex-col justify-end relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text */}
      <div className="relative w-full bg-[#00000095] py-[20px] pl-[20px]">
        <h2 className="text-[20px] font-semibold font-inter text-white">{title}</h2>
        <p className="text-[14px] font-normal font-inter text-white">{products} Products</p>
      </div>
    </div>
  );

  return (
    <>
      <section id="category" className="pb-[80px]">
        <div className="container">
          <CommonHead Head_text={"Top categories"} />
        </div>

        <div className="pt-[40px]">
          {/* Slider */}
          <Slider {...settings}>
            <div>
              <CategoryCard img={fimg1} title="Wing Chair" products="3,584" />
            </div>
            <div>
              <CategoryCard img={fimg2} title="Wing Chair" products="3,584" />
            </div>
            <div>
              <CategoryCard img={fimg3} title="Wooden Chair" products="157" />
            </div>
            <div>
              <CategoryCard img={fimg4} title="Desk Chair" products="154" />
            </div>
            <div>
              <CategoryCard img={fimg5} title="Park Bench" products="154" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Category;
