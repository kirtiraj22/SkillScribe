import React from "react";
import { Text } from "components";
const Navbar = () => {
  return (
    <div className="bg-blue_100 flex flex-col items-center justify-between w-full">
      <div className="flex sm:flex-col flex-row justify-between gap-2.5 md:px-5 px-9 py-2.5 w-full">
        <Text className="text-blue_gray_900 w-auto" as="h5" variant="h5">
          SkillScribe
        </Text>
        <div className="flex sm:flex-1 flex-row font-chalkboardse items-between justify-evenly w-[45%] sm:w-full">
          <Text
            className="lowercase text-blue_gray_900 font-semibold"
            variant="body1"
          >
            Services
          </Text>
          <Text
            className="lowercase text-blue_gray_900 font-semibold"
            variant="body1"
          >
            Team
          </Text>
          <Text
            className="lowercase text-blue_gray_900 font-semibold"
            variant="body1"
          >
            Contact
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
