import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"


export const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2sl lg:text-4">
            <img src={logo} alt="logo" className="w-40 object-cover"/>
          </Link>
        </div>
        <div className="menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">Home</Link>
          <Link to="/" className="text-xl">About</Link>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  )
}