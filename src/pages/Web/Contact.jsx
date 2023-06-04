import React from "react";
import { Button, Img, Input, Text } from "components";
const Contact = () => {
  return (
    <div
      className="bg-blue_100 flex md:flex-col flex-row font-chalkboardse gap-[50px] h-[805px] md:h-auto items-center justify-center max-w-[1512px] md:px-10 sm:px-5 px-[50px] py-[100px] w-full"
      id="contact"
    >
      <div className="flex sm:flex-1 flex-col gap-8 items-center border-2 border-black rounded-xl p-[50px] justify-center w-[479px] sm:w-full">
        <Text
          className="lowercase text-blue_gray_900 w-[244px]"
          as="h3"
          variant="h3"
        >
          Contact us
        </Text>
        <div className="flex flex-col gap-1.5 h-[87px] md:h-auto items-start justify-start w-auto sm:w-full">
          <Text
            className="lowercase text-blue_gray_900 w-[94px]"
            variant="body2"
          >
            Your email
          </Text>
          <Input
            wrapClassName="w-full"
            className="font-normal lowercase md:h-auto p-0 placeholder:text-blue_gray_900 sm:h-auto text-blue_gray_900 text-center text-xl w-full"
            type="email"
            name="frameSixteen"
            placeholder="Email"
            shape="RoundedBorder10"
            size="sm"
            variant="FillBlue100cc"
          ></Input>
        </div>
        <div className="flex flex-col gap-1.5 h-[87px] md:h-auto items-start justify-start w-auto sm:w-full">
          <Text
            className="lowercase text-blue_gray_900 w-[130px]"
            variant="body2"
          >
            Your password
          </Text>
          <Input
            wrapClassName="w-full"
            className="font-normal lowercase md:h-auto p-0 placeholder:text-blue_gray_900_cc sm:h-auto text-blue_gray_900_cc text-center text-xl w-full"
            type="password"
            name="frameSixteen_One"
            placeholder="password"
            shape="RoundedBorder10"
            size="sm"
            variant="FillBlue100cc"
          ></Input>
        </div>
        <Button
          className="cursor-pointer font-normal h-[45px] lowercase text-blue_gray_900 text-center text-lg w-[147px] text-[23px]"
          shape="RoundedBorder10"
          size="lg"
          variant="OutlineBlack900"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Contact;
