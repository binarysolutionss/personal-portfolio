import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../constants/index.jsx";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../assets/images/icons/my logo.png";
import ResponsiveNavbar from './ResponsiveNavbar.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="navbar flex justify-between items-center p-5 px-10 backdrop-blur-3xl bg-white bg-opacity-5 sm:text-2xl md:text-3xl lg:text-lg ">
        <img src={Logo} alt="My Logo" className="w-8 sm:w-14 lg:w-12" />

        {/* Navigation Links for large screens */}
        <div className="hidden md:block">
          <ul className="flex flex-row gap-5">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className={`hover:text-sky-400 ${location.pathname === link.link ? 'text-sky-400 font-medium' : ''}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu Navigation for small screens */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose className="text-4xl" /> : <IoMenu className="text-4xl" />}
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveNavbar open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;