import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../constants/index.jsx";

const ResponsiveNavbar = ({ open, setIsOpen }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 bg-slate-950"
        >
          <div className='text-xl font-semibold bg-sky-400 text-slate-900 p-10 w-11/12 flex justify-center rounded-3xl mx-auto'>
            <ul className='flex flex-col justify-center items-end gap-5'>
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    className={`hover:text-transparent bg-clip-text bg-gradient-to-r from-gradientPrimary via-gradientSecodndary to-gradientTertiary bg-200 animate-wave-bg ${location.pathname === link.link ? 'text-blue-900 font-bold' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNavbar;