import { NavLink } from "react-router-dom"
import SokoLinkLogo from "../Assets/SokoLinkLogo.png"
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";



const Navbar = () => {
  return (
    <nav className="flex flex-row items-center p-5 bg-green-700 text-xl text-amber-100 h-20">
        
        <div className="flex flex-row items-center justify-evenly p-5">
            <img src={SokoLinkLogo} alt="SokoLinkLogo.png" className="h-12 rounded shadow-md" />
        </div>

        <div className="flex bg-yellow-500 items-center gap-0.5 text-black text-sm p-1 rounded-sm mr-35"><FiMenu /><span>Browse all Categories</span></div>

        
        {/* Navlinks */}
        <div className="flex flex-row items-center p-5 gap-6">
            <NavLink 
                to="/" 
                className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 font-semibold"
                      : "hover:text-yellow-500 flex items-center"
                  }
            >
                Home
            </NavLink> 

            <NavLink 
                to="/about us" 
                className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 font-semibold"
                      : "hover:text-yellow-500 text-white flex items-center"
                  }
            >
                About Us
            </NavLink> 

            <NavLink 
                to="/blogs" 
                className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 font-semibold"
                      : "hover:text-yellow-500 flex items-center"
                  }
            >
                Blogs
            </NavLink>  
        </div>

        <NavLink 
                to="/cart" 
                className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 font-semibold ml-auto"
                      : "text-yellow-500 flex items-center ml-auto"
                  }
            >
                <FaShoppingCart className="text-3xl hover:size-10"/>
            </NavLink>
    </nav>
  )
}

export default Navbar