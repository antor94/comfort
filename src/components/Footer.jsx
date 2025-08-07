import React from "react";
import footerLogo from "../assets/images/Logo.png";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section id="footer" className="border-t-2 border-red-30 ">
          <div className="border-b-2">
        <div className="container ">
          <div className="footer_row pt-[80px] ">
            <div className="flex justify-between items-center" >
{/*------------------------ 1st div img+ text+ icon  */}
              <div className="pb-[127px]">
                <img src={footerLogo} alt="footer-logo" />
                <p className="w-[336px]  py-[35px] text-[16px] font-normal font-inter text-[#272343] ">
                  Vivamus tristique odio sit amet velit semper, eu posuere
                  turpis interdum. Cras egestas purus{" "}
                </p>
                <div className="flex gap-[4px]">

                <Link className="w-[38px] h-[38px] hover:text-[green] hover:rounded-full hover:border-green-600 hover:border flex justify-center items-center"><FaFacebook /></Link>
                <Link className="w-[38px] h-[38px] hover:text-[green] hover:rounded-full hover:border-green-600 hover:border flex justify-center items-center"><FaTwitter /></Link>
                <Link className="w-[38px] h-[38px] hover:text-[green] hover:rounded-full hover:border-green-600 hover:border flex justify-center items-center"><FaInstagram /></Link>
                <Link className="w-[38px] h-[38px] hover:text-[green] hover:rounded-full hover:border-green-600 hover:border flex justify-center items-center"><FaPinterest /></Link>
                <Link className="w-[38px] h-[38px] hover:text-[green] hover:rounded-full hover:border-green-600 hover:border flex justify-center items-center"><FaYoutube /></Link>
                </div>
              </div>

{/* -------------------- catagory */}
              <div>
                <h2 className="text-[14px] font-medium font-inter text-[#9A9CAA]">Category</h2>
                <ul className="pt-[20px] flex flex-col gap-[12px] pb-[60px]">
                    <li><Link className=" text-[16px] font-normal font-inter hover:text-[#007580] hover:border-b hover:border-[#007580] hover:duration-[.3s]  text-[#272343]">Sofa</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter hover:text-[#007580] hover:border-b hover:border-[#007580] hover:duration-[.3s] text-[#272343]">Armchair</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter hover:text-[#007580] hover:border-b hover:border-[#007580] hover:duration-[.3s] text-[#272343]">Wing Chair</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter text-[#272343] hover:text-[#007580] hover:border-b hover:border-[#007580] ">Desk Chair</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter hover:text-[#007580] hover:border-b hover:border-[#007580] hover:duration-[.3s] text-[#272343]">wooden Chair</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter hover:text-[#007580] hover:border-b hover:border-[#007580] hover:duration-[.3s] text-[#272343]">Park Bench</Link></li>
                </ul>
              </div>
{/* ---------------------- support  */}
                 <div>
                <label className="text-[14px] font-medium font-inter text-[#9A9CAA]" htmlFor="">Support</label>
                <ul className="pt-[20px] flex flex-col gap-[12px] pb-[120px]">
                    <li><Link className="text-[16px] font-normal font-inter text-[#272343]">Help & Support</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter text-[#272343]">Tearms & Conditions</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter text-[#272343]">Privacy Policy</Link></li>
                    <li><Link className="text-[16px] font-normal font-inter text-[#272343]">Help</Link></li>
                </ul>
              </div>

{/* ----------------------- newsletter  */}
              <div className="pb-[128px]">
                <label className="text-[14px] font-medium font-inter text-[#9A9CAA]" htmlFor="">Newsletter</label>
                <div className=" ">
                <input className="w-[285px] text-[16px] font-normal font-inter text-[#9A9CAA] outline-none border border-[#E1E3E5] rounded-[8px] mt-[20px] mb-[15px] py-[15px] px-[20px]" type="text" placeholder="Your email" />
                <button className="w-[127px] bg-[#029FAE] text-[16px] font-semibold font-inter text-[#fff] py-[14px] px-[24px] rounded-[8px]  ml-[12px] ">Subscribe</button>

                </div>
                <p className="w-[424px] text-[15px] font-normal font-inter text-[#272343]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
              </div>
            </div>
          </div>
        </div>
          </div>
      </section>
    </>
  );
};

export default Footer;
