import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;