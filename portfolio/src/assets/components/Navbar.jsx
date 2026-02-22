import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFolderOpen,
  faCommentDots,
  faBlog,
  faEnvelope,
  faBars,
  faXmark,
 
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", name: "Home", icon: faHouse },
    { path: "/about", name: "About", icon: faUser },
    { path: "/project", name: "Projects", icon: faFolderOpen },
    // { path: "/testimonials", name: "Testimonials", icon: faCommentDots },
    // { path: "/blog", name: "Blog", icon: faBlog },
    { path: "/contact", name: "Contact", icon: faEnvelope },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#2b2b2b] p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <aside
  className={`
  fixed py-5 top-1/2 right-4 
  min-h-48 w-24 bg-[#2b2b2b] text-white shadow-lg rounded-2xl
  -translate-y-1/2
  transition-all duration-300 z-40
  
  ${open ? "translate-x-0" : "translate-x-full"}
  
  md:translate-x-0
`}
>


       

        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded transition ${
                  isActive
                    ? "bg-[#18F3E1] text-black"
                    : "hover:bg-[#3a3a3a]"
                }`
              }
            >
              <FontAwesomeIcon icon={link.icon} />
            
            </NavLink>
          ))}
        </nav>

       
      </aside>
    </>
  );
}
