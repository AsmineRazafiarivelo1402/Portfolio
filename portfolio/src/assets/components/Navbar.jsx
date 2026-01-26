import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#45b3db' : 'white',
  borderBottom: isActive ? '2px solid #45b3db' : '2px solid transparent',
  padding: '5px 0',
  transition: 'all 0.3s ease',
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/project", name: "Project" },
    { path: "/testimonials", name: "Testimonials" },
    { path: "/blog", name: "Blog" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-[#2b2b2b] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Nom */}
        <NavLink
          to="/"
          className="text-xl font-semibold tracking-wide hover:text-gray-300 transition"
        >
          Asmine RAZAFIARIVELO
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              style={navLinkStyles}
              className="relative group"
            >
              <span className="relative z-10 group-hover:text-[#18F3E1] transition-colors duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#18F3E1] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          {/* Icons */}
          <div className="flex items-center space-x-4 ml-4">
            <a href="tel:+261XXXXXXXX" className="hover:text-[#18F3E1] transition">
              <FontAwesomeIcon icon={faPhone} />
            </a>

            <a href="mailto:example@email.com" className="hover:text-[#18F3E1] transition">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="2x" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2b2b2b] px-6 pb-4 space-y-4">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              style={navLinkStyles}
              className="block relative group"
              onClick={() => setMenuOpen(false)} // fermer le menu après clique
            >
              <span className="relative z-10 group-hover:text-[#18F3E1] transition-colors duration-300">
                {link.name}
              </span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#18F3E1] transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          {/* Icons Mobile */}
          <div className="flex items-center space-x-4 mt-2">
            <a href="tel:+261XXXXXXXX" className="hover:text-[#18F3E1] transition">
              <FontAwesomeIcon icon={faPhone} />
            </a>

            <a href="mailto:example@email.com" className="hover:text-[#18F3E1] transition">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
