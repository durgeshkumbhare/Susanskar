import logo from "../assets/logo9.png";
import { useGlobalContext } from "../Context";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="h-20 flex items-center justify-center bg-gray-100">
      <div className="w-[90vw] max-w-[1120px] flex items-center justify-between">
        <img src={logo} alt="logo" className="h-16 " />
        <button
          onClick={openSidebar}
          className="text-xl text-black hover:scale-110  md:hidden"
        >
          <FaBars />
        </button>
        <div className=" gap-6 hidden md:flex md:flex-shrink-0">
          <Link
            to="/"
            className="text-gray-700 text-xl font-semibold font-serif  hover:text-black capitalize"
          >
            Home
          </Link>

          <div className="dropdown flex ">
            <div
              tabIndex={0}
              role="button"
              className=" text-gray-700 text-xl font-semibold font-serif  hover:text-black capitalize"
            >
              About
              <IoIosArrowDown className="inline ml-1 font-bold" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-10 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/management"> About Managment</Link>
              </li>
              <li>
                <Link to="/vision">Vision & Mission</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/admission"
            className="text-gray-800 text-xl font-semibold font-serif  capitalize"
          >
            admission form
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 text-xl font-semibold font-serif  capitalize"
          >
            contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
