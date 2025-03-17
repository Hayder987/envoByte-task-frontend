import { NavLink, useLocation } from 'react-router'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
  const {pathname} = useLocation()
  return (
    <nav className={`${pathname==='/'?'bg-[#03135b]':'bg-blue-700'} flex py-3 px-4 lg:px-12 justify-between items-center`}>
      {/* logo */}
      <img src={logo} alt="" className="" />
      {/* menu */}
      <div className="">
        <ul className="uppercase hidden textWhite lg:flex justify-center items-center gap-6">
            <NavLink to='/'><li className="">Home</li></NavLink>
            <NavLink to='/services'><li className="">Service</li></NavLink>
            <NavLink to='/combosales'><li className="">combo sales</li></NavLink>
            <NavLink to='/portfolio'><li className="">portfolio</li></NavLink>
            <NavLink to='/aboutUs'><li className="">about us</li></NavLink>
            <NavLink to='/blogs'><li className="">blogs</li></NavLink>
        </ul>
      </div>
      {/* button */}
      <div className="">
        <button className="btnBg text-sm rounded-sm cursor-pointer md:py-3 py-2 px-8 md:px-14">See Pricing</button>
      </div>
    </nav>
  )
}

export default NavBar