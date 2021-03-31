import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./PageWrapper.scss";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
