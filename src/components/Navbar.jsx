import "./Navbar.css";
import NavDropdown from "./NavDropdown";
import { Link } from "react-scroll";
import Logo from "../assets/images/LOGO.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    console.log(scrolled);
  }, [scrolled])

  return (
    <div className={`fixed z-10 w-full flex justify-between items-center p-[10px] lg:px-[150px] border-b-[1px] border-[#333232] ${scrolled? "bg-white" : ""}`} id="navbar">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <NavDropdown scrolled={scrolled}/>
        </div>
        <img
          className="rounded-full cursor-pointer"
          src={Logo}
          alt="Logo"
          width={70}
        />
      </div>
      <div className="hidden md:flex gap-4  ">
        <Link to="home" smooth="true">
          <div className={`btn-pink ${scrolled ? "text-black": "text-white"}`}>Home</div>
        </Link>
        <Link to="about" smooth="true">
          <div className={`btn-pink ${scrolled ? "text-black": "text-white"}`}>About Us</div>
        </Link>
        <Link to="services" smooth="true">
          <div className={`btn-pink ${scrolled ? "text-black": "text-white"}`}>Services</div>
        </Link>
        <Link to="projects" smooth="true">
          <div className={`btn-pink ${scrolled ? "text-black": "text-white"}`}>Projects</div>
        </Link>
        <Link to="contact" smooth="true">
          <div className={`btn-pink ${scrolled ? "text-black": "text-white"}`}>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
