import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import HomeImg from "../assets/HomeImg.jpg";

const Landing = () => {
  return (
    <div className="absolute h-[500px]  flex gap-10 justify-between items-center top-[14%] left-[8%] right-[8%]">
      <div className="hidden sm:flex flex-col gap-2 cursor-pointer ">
        <div className="w-fit p-3 rounded-full bg-white opacity-40  ">
          <FaFacebookF fill="black" />
        </div>
        <div className="w-fit p-3 rounded-full bg-[#ffffff] opacity-40">
          <RiTwitterXFill fill="black" />
        </div>
        <div className="w-fit p-3 rounded-full bg-[#ffffff] opacity-40">
          <BiLogoInstagram fill="black" />
        </div>
      </div>
      <div>
        <img
          src={HomeImg}
          alt="Home"
          className=" w-[600px] sm:w-[300px] sm:h-[200px] md:w-[500px] md:h-[300px]  bg-center bg-no-repeat bg-cover"
        />
        <div className="flex flex-col w-[70vw] mt-5 sm:hidden ">
          <p className="text-white mb-5 font-bold text-[24px] leading-[24px] md:text-[40px] md:leading-[40px] lg:text-[74px] lg:leading-[74px] tracking-normal ">
            Architecture is our passion, design is our art
          </p>
          <p className="text-[#999999] text-[16px] leading-[27.2px] tracking-normal">
            Architects offer design and planning services for buildings,
            landscapes, and interiors.{" "}
          </p>
        </div>
      </div>
      <div className=" hidden sm:flex flex-col gap-3 w-[200px]  md:w-[400px] bg-black">
        <p className="text-white font-bold text-[24px] leading-[24px] md:text-[40px] md:leading-[40px] lg:text-[74px] lg:leading-[74px] tracking-normal ">
          Architecture is our passion, design is our art
        </p>
        <p className="text-[#999999] text-[16px] leading-[27.2px] tracking-normal">
          Architects offer design and planning services for buildings,
          landscapes, and interiors.{" "}
        </p>
      </div>
    </div>
  );
};

export default Landing;
