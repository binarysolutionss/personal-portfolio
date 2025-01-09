import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-800 text-white sm:text-4xl md:text-3xl lg:text-lg ">
      <p>&copy; {new Date().getFullYear()} Stanley Chiremba. All rights reserved.</p>
    </footer>
  );
};

export default Footer;