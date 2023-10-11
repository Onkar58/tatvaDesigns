import "./Navbar.css";
import NavDropdown from "./NavDropdown";
import { Link } from "react-scroll";
import Logo from "../assets/images/LOGO.png";

const Navbar = () => {
  return (
    <div className="absolute flex justify-between items-center top-[3%] left-[8%] right-[8%] p-[10px] border-b-[1px] border-[#333232]">
      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <NavDropdown />
        </div>
        <img
          className="rounded-full cursor-pointer"
          src={Logo}
          alt="Logo"
          width={70}
        />
      </div>
      <div className="hidden md:flex text-white gap-4  ">
        <Link to="home" smooth="true">
          <div className="btn-pink">Home</div>
        </Link>
        <Link to="about" smooth="true">
          <div className="btn-pink">About Us</div>
        </Link>
        <Link to="services" smooth="true">
          <div className="btn-pink">Services</div>
        </Link>
        <Link to="projects" smooth="true">
          <div className="btn-pink">Projects</div>
        </Link>
        <Link to="contact" smooth="true">
          <div className="btn-pink">Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
