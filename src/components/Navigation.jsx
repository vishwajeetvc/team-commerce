import { useState } from "react"
import { Link, NavLink } from "react-router"
import { logo } from "../assets/assets";

import { User, ShoppingCart, Search, Menu } from "lucide-react";

function Navigation() {

  const [isRightNavVisible, setIsRightNavVisible] = useState(false);


  const togglRightNav = () => setIsRightNavVisible(!isRightNavVisible);


  return (
    <div className="py-4">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-[100px]" src={logo} alt=""/>
          </Link>
        </div>
        <div className="hidden md:flex list-none gap-7">
          <NavLink className="py-2" to="/">Home</NavLink> 
          <NavLink className="py-2" to="/collection">Collection</NavLink> 
          <NavLink className="py-2" to="/about">About</NavLink> 
          <NavLink className="py-2" to="/contact">Contact</NavLink> 
        </div>
        <div className="flex NavLinkst-none gap-5">
          <button  className="py-2"  type=""><Search /></button>
          <NavLink  className="py-2" to="/cart"><ShoppingCart /></NavLink>
          <NavLink  className="py-2" to="/account"><User/></NavLink>
          <button 
            onClick={togglRightNav} 
            className="py-2 px-1 cursor-pointer md:hidden"><Menu /></button>
        </div>
      </div>
      {/*hidden for mobile*/}
      { isRightNavVisible &&
        <div className="bg-white absolute top-0 right-0 w-[90%] h-full border border-gray-200">
          <div className="list-none gap-4">

            <button  
              onClick={togglRightNav}
              className="py-2 cursor-pointer bg-gray-100 w-full px-4 flex gap-4"><span>❮</span><span className="pt-0.5">Back</span></button>

            <Link onClick={togglRightNav} className="py-2 px-4 block" to="/">Home</Link> 
            <Link onClick={togglRightNav} className="py-2 px-4 block" to="/collection">Collection</Link> 
            <Link onClick={togglRightNav} className="py-2 px-4 block" to="/about">About</Link> 
            <Link onClick={togglRightNav} className="py-2 px-4 block" to="/contact">Contact</Link> 
          </div>
        </div>
      }
    </div>
  )
}

export default Navigation
