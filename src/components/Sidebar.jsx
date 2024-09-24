import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={
        isSidebarOpen ? "sidebar show-sidebar z-10 bg-slate-100" : "sidebar"
      }
    >
      <div className="sidebar-header">
        <button
          className="absolute  right-0 m-6 text-xl text-red-500"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <div className="mt-16 ml-4 flex flex-col gap-4 text-lg">
        <Link
          to="/"
          className="text-gray-700 text-xl font-semibold font-serif  hover:text-black capitalize"
          onClick={closeSidebar}
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
              <Link to="/about" onClick={closeSidebar}>About Us</Link>
            </li>
            <li>
              <Link to="/management" onClick={closeSidebar}> About Managment</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/admission"
          className="mt-1 mr-4 text-gray-700 text-xl font-semibold font-serif  hover:text-black capitalize"
          onClick={closeSidebar}
        >
          Admission Form
        </Link>
        <Link
          to="/about"
          className="mt-1 mr-4 text-gray-700 text-xl font-semibold font-serif  hover:text-black capitalize"
          onClick={closeSidebar}
        >
          Contact us
        </Link>
      </div>
    </aside>
  );
};
export default Sidebar;
