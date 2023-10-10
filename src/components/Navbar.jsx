import "./Navbar.css";
import NavDropdown from "./NavDropdown";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="absolute flex justify-between items-center top-[4%] left-[8%] right-[8%] p-[10px] border-b-[1px] border-[#333232]">
      <div className="flex gap-2">
        <div className="md:hidden">
          <NavDropdown />
        </div>
        <div>LOGO</div>
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
