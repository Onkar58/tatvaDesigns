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
        <img className="rounded-full cursor-pointer" src={Logo} alt="Logo" width={70} />
      </div>
      <div className="hidden md:flex text-white gap-4  ">
        <div className="btn-pink">
          <Link to="home" smooth="true">
            Home
          </Link>
        </div>
        <div className="btn-pink">
          <Link to="about" smooth="true">
            About Us
          </Link>
        </div>
        <div className="btn-pink">
          <Link to="services" smooth="true">
            Services
          </Link>
        </div>
        <div className="btn-pink">
          <Link to="projects" smooth="true">
            Projects
          </Link>
        </div>
        <div className="btn-pink">
          <Link to="contact" smooth="true">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
