import { NavLink, useLocation } from "react-router";
import logo from "../../assets/images/logo.png";
import { RiMenuFold2Line } from "react-icons/ri";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);

  return (
    <nav
      className={`${
        pathname === "/" ? "bg-[#03135b]" : "bg-blue-700"
      } flex py-3 px-4 lg:px-12 justify-between relative items-center`}
    >
      {/* logo */}
      <img src={logo} alt="" className="" />
      {/* menu */}
      <div className="">
        <ul className="uppercase hidden textWhite lg:flex justify-center items-center gap-6">
          <NavLink to="/">
            <li className="">Home</li>
          </NavLink>
          <NavLink to="/services">
            <li className="">Service</li>
          </NavLink>
          <NavLink to="/combosales">
            <li className="">combo sales</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li className="">portfolio</li>
          </NavLink>
          <NavLink to="/aboutUs">
            <li className="">about us</li>
          </NavLink>
          <NavLink to="/blogs">
            <li className="">blogs</li>
          </NavLink>
        </ul>
      </div>
      {/* side-menu */}
      <div className={`absolute duration-300 top-26 ${menu?'left-0':'-left-[1800px]'} flex p-6 lg:hidden bg-blue-900 w-2/4 h-[100vh] z-10 `}>
        <ul 
        onClick={() => setMenu(!menu)}
        className="uppercase  textWhite flex flex-col gap-4">
          <NavLink to="/">
            <li className="">Home</li>
          </NavLink>
          <NavLink to="/services">
            <li className="">Service</li>
          </NavLink>
          <NavLink to="/combosales">
            <li className="">combo sales</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li className="">portfolio</li>
          </NavLink>
          <NavLink to="/aboutUs">
            <li className="">about us</li>
          </NavLink>
          <NavLink to="/blogs">
            <li className="">blogs</li>
          </NavLink>
        </ul>
      </div>
      {/* menu */}
      <div onClick={() => setMenu(!menu)} className="flex lg:hidden">
        <button className="text-white text-2xl cursor-pointer">
          {menu ? <RxCross2 /> : <RiMenuFold2Line />}
        </button>
      </div>
      {/* button */}
      <div className="">
        <button className="btnBg text-sm rounded-sm cursor-pointer md:py-3 py-2 px-8 md:px-14">
          See Pricing
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
