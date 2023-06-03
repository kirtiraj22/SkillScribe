import React from "react";
import { Text } from "components";
const Navbar = () => {
  return (
    <div className="bg-blue_100 flex flex-col items-start justify-start w-full">
      <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between max-w-[740px] md:px-5 px-9 py-2.5 w-full">
        <Text className="text-blue_gray_900 w-auto" as="h5" variant="h5">
          SkillScribe
        </Text>
        <div className="flex sm:flex-1 flex-row font-chalkboardse items-start justify-between w-[45%] sm:w-full">
          <Text className="lowercase text-blue_gray_900" variant="body2">
            Services
          </Text>
          <Text className="lowercase text-blue_gray_900" variant="body2">
            Team
          </Text>
          <Text className="lowercase text-blue_gray_900" variant="body1">
            Contact
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
