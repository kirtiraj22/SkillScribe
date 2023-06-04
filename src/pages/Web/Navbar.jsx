import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Text } from "components";
const Navbar = () => {
  return (
    <div className="bg-blue_100 flex flex-col items-center justify-between w-full">
      <div className="flex sm:flex-col flex-row justify-between gap-2.5 md:px-5 px-9 py-2.5 w-full">
        <Text
          className="text-blue_gray_900 w-auto ml-52 text-[35px] cursor-pointer"
          as="h5"
          variant="h5"
        >
          SkillScribe
        </Text>
        <div className="flex sm:flex-1 flex-row font-chalkboardse items-center justify-evenly w-[45%] sm:w-full">
          <AnchorLink href="#demo">
            <Text
              className="text-blue_gray_900 font-semibold cursor-pointer"
              variant="body1"
            >
              Demo
            </Text>
          </AnchorLink>
          <AnchorLink href="#features">
            <Text
              className="text-blue_gray_900 font-semibold cursor-pointer"
              variant="body1"
            >
              Features
            </Text>
          </AnchorLink>
          <AnchorLink href="#contact">
            <Text
              className="text-blue_gray_900 font-semibold cursor-pointer"
              variant="body1"
            >
              Contact
            </Text>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
