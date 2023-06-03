import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TryNow from "./TryNow";
import Footer from "./Footer";
import Contact from "./Contact";
import Features from "./Features";

const WebPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <Navbar />
          <HeroSection />
        </div>
        <TryNow />
        <Features />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default WebPage;
