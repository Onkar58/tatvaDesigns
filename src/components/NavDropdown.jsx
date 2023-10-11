import { useState } from "react";
import { ImCross } from "react-icons/im"
import { Link } from "react-scroll";
import Logo from "../assets/images/LOGO.png";

const NavDropdown = ({scrolled}) => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!IsOpen)}
        className=" flex flex-col gap-[0.3rem]"
      >
        <div className={`${scrolled ? "bg-black": "bg-white"} w-6 rounded h-[0.15rem]`}></div>
        <div className={`${scrolled ? "bg-black": "bg-white"} w-6 rounded h-[0.15rem]`}></div>
        <div className={`${scrolled ? "bg-black": "bg-white"} w-6 rounded h-[0.15rem]`}></div>
      </button>

      {IsOpen &&
        <div className="absolute top-0 left-0 w-[100vw] h-[100vh] flex flex-col gap-10 bg-white z-10">
          <div className="flex items-center gap-2 mx-2 my-5 cursor-pointer" onClick={() => setIsOpen(!IsOpen)}>
            <ImCross />
            <img className="z-10 rounded-full" src={Logo} alt="Logo" width={70} />
          </div>

          <div className="w-[90vw] mx-auto p-2 border-b-2 border-black text-xl cursor-pointer" >
            <Link to="home" smooth="true" onClick={()=>setIsOpen(false)}>
              Home
            </Link>
          </div>

          <div className="w-[90vw] mx-auto p-2 border-b-2 border-black text-xl cursor-pointer" >
            <Link to="about" smooth="true" onClick={()=>setIsOpen(false)}>
              About Us
            </Link>
          </div>

          <div className="w-[90vw] mx-auto p-2 border-b-2 border-black text-xl cursor-pointer" >
            <Link to="services" smooth="true" onClick={()=>setIsOpen(false)}>
              Services
            </Link>
          </div>

          <div className="w-[90vw] mx-auto p-2 border-b-2 border-black text-xl cursor-pointer">
            <Link to="projects" smooth="true" onClick={()=>setIsOpen(false)}>
              Projects
            </Link>
          </div>

          <div className="w-[90vw] mx-auto p-2 border-b-2 border-black text-xl cursor-pointer" >
            <Link to="contact" smooth="true" onClick={()=>setIsOpen(false)}>
              Contact
            </Link>
          </div>

        </div>}
    </>
  );
};

export default NavDropdown;
