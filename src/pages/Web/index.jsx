import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import { Button, Img, Input, Text } from "components";

const WebPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default WebPage;
