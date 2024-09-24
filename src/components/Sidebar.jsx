import {  links } from '../data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../Context';


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar z-10 bg-slate-100' : 'sidebar'}>
      <div className='sidebar-header'>
        <button className='absolute  right-0 m-6 text-xl text-red-500' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='mt-16 ml-4 flex flex-col gap-4 text-lg'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url} className='flex capitalize text-gray-900 file:'>
                <span className='mt-1 mr-4 text-xl'>{icon}</span>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
     
    </aside>
  );
};
export default Sidebar;
