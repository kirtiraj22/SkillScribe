import React from "react";
import { Button, Img, Text } from "components";
import AnchorLink from "react-anchor-link-smooth-scroll";
const HeroSection = () => {
  return (
    <div className="font-chalkboardse md:h-[1602px] sm:h-[668px] h-[779px] max-w-[1446px] mx-auto p-[19px] md:px-5 relative w-full">
      <div className="absolute bottom-[3%] flex flex-col items-center justify-start right-[2%] w-[71%]">
        <div className="flex flex-col gap-[17px] justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-end md:ml-[0] ml-[326px] w-[66%] md:w-full">
            <Img
              src="images/img_contrast.svg"
              className="h-[19px] md:mt-0 mt-[149px]"
              alt="contrast"
            />
            <Img
              src="images/img_contrast.svg"
              className="h-3 mb-[46px] md:ml-[0] ml-[54px] md:mt-0 mt-[110px] w-[11px]"
              alt="contrast_One"
            />
            <div className="md:h-[137px] h-[157px] mb-[11px] md:ml-[0] ml-[22px] relative w-[31%] md:w-full">
              <div className="absolute bottom-[0] h-[126px] right-[0] w-[92%]">
                <Img
                  src="images/img_eye.svg"
                  className="absolute bottom-[3%] h-[83px] right-[0]"
                  alt="eye"
                />
                <Img
                  src="images/img_group_black_900_126x130.svg"
                  className="absolute h-[126px] inset-y-[0] left-[0] my-auto"
                  alt="group"
                />
              </div>
              <Img
                src="images/img_play.svg"
                className="absolute h-[39px] right-[17%] top-[0]"
                alt="play"
              />
              <Img
                src="images/img_close.svg"
                className="absolute h-[27px] left-[0] top-[6%]"
                alt="close"
              />
            </div>
            <div className="flex flex-col gap-[53px] justify-start mb-[78px] md:ml-[0] ml-[22px] md:mt-0 mt-[5px] w-[4%] md:w-full">
              <Img
                src="images/img_contrast.svg"
                className="h-3 w-[11px]"
                alt="contrast_Two"
              />
              <Img
                src="images/img_contrast.svg"
                className="h-[19px] ml-2 md:ml-[0]"
                alt="contrast_Three"
              />
            </div>
            <div className="md:h-[162px] h-[163px] md:ml-[0] ml-[25px] md:mt-0 mt-[5px] relative w-[37%] md:w-full">
              <Img
                src="images/img_group_black_900_91x151.svg"
                className="absolute h-[91px] right-[6%] top-[7%]"
                alt="group_One"
              />
              <Img
                src="images/img_trash.svg"
                className="absolute bottom-[4%] h-[60px] right-[0]"
                alt="trash"
              />
              <div className="absolute bottom-[11%] h-[102px] md:h-[98px] left-[0] w-2/5">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto pt-7 sm:px-5 px-7 w-[97%]"
                  style={{
                    backgroundImage: "url('images/img_group115.svg')",
                  }}
                >
                  <div className="flex flex-col gap-[25px] items-center justify-start mt-[9px] w-[61%] md:w-full">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[30px]"
                      alt="checkmark"
                    />
                    <Img
                      src="images/img_maximize.svg"
                      className="h-1.5"
                      alt="maximize"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_car.svg"
                  className="absolute bottom-[22%] h-5 right-[0]"
                  alt="car"
                />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-8 sm:px-5 w-full"
                  style={{
                    backgroundImage: "url('images/img_group114.svg')",
                  }}
                >
                  <Img
                    src="images/img_refresh.svg"
                    className="h-8"
                    alt="refresh"
                  />
                </div>
              </div>
              <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between my-auto right-[16%] w-[42%]">
                <div className="flex flex-col md:gap-10 gap-[117px] items-end justify-start">
                  <Img
                    src="images/img_group.svg"
                    className="h-[26px] mr-1"
                    alt="group_Two"
                  />
                  <Img
                    src="images/img_contrast.svg"
                    className="h-[19px]"
                    alt="contrast_Four"
                  />
                </div>
                <Img
                  src="images/img_group_black_900.svg"
                  className="h-[74px] mt-[83px]"
                  alt="group_Three"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[89px] items-start justify-start mb-[3px] ml-4 md:ml-[0] md:mt-0 mt-[22px] w-[3%] md:w-full">
              <Img
                src="images/img_contrast.svg"
                className="h-[19px] ml-0.5 md:ml-[0]"
                alt="contrast_Five"
              />
              <Img
                src="images/img_computer.svg"
                className="h-[34px]"
                alt="computer"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
            <Img
              src="images/img_reply.svg"
              className="h-6 md:mt-0 mt-[459px]"
              alt="reply"
            />
            <Img
              src="images/img_contrast.svg"
              className="h-3 mb-[51px] md:mt-0 mt-[419px] w-[11px]"
              alt="contrast_Six"
            />
            <div className="sm:h-[476px] h-[482px] md:h-[684px] relative w-[91%] md:w-full">
              <div className="sm:h-[476px] h-[482px] md:h-[684px] m-auto w-full">
                <div className="sm:h-[476px] h-[482px] md:h-[684px] m-auto w-full">
                  <div className="absolute h-[476px] md:h-[684px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute h-[476px] md:h-[684px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col md:gap-10 gap-[114px] justify-start w-[67%] md:w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[63px] items-start justify-end md:ml-[0] ml-[138px] w-[77%] md:w-full">
                              <Img
                                src="images/img_settings.svg"
                                className="h-[73px] sm:mt-0 mt-[54px]"
                                alt="settings"
                              />
                              <Img
                                src="images/img_group_black_900_270x320.svg"
                                className="h-[270px]"
                                alt="group_Four"
                              />
                            </div>
                            <Img
                              src="images/img_group_black_900_92x139.svg"
                              className="h-[92px]"
                              alt="group_Five"
                            />
                          </div>
                          <div className="flex md:flex-1 flex-col gap-3.5 items-end justify-start w-[19%] md:w-full">
                            <Img
                              src="images/img_settings_black_900.svg"
                              className="h-[73px]"
                              alt="settings_One"
                            />
                            <div className="md:h-[155px] h-[163px] relative w-full">
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col gap-[27px] h-max inset-[0] justify-center m-auto w-[161px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group115.svg')",
                                }}
                              >
                                <div className="h-20 md:h-[118px] ml-12 md:ml-[0] mr-9 mt-[42px] relative w-[46%]">
                                  <Img
                                    src="images/img_contrast_blue_100.svg"
                                    className="absolute h-[76px] inset-x-[0] mx-auto top-[0]"
                                    alt="contrast_Seven"
                                  />
                                  <Img
                                    src="images/img_group_black_900_56x61.svg"
                                    className="absolute bottom-[0] h-14 right-[0]"
                                    alt="group_Six"
                                  />
                                </div>
                                <Img
                                  src="images/img_maximize.svg"
                                  className="h-2.5 md:ml-[0] ml-[73px] mr-[50px]"
                                  alt="maximize_One"
                                />
                              </div>
                              <Img
                                src="images/img_car.svg"
                                className="absolute bottom-[21%] h-8 right-[0]"
                                alt="car_One"
                              />
                              <div
                                className="absolute bg-cover bg-no-repeat h-[163px] md:h-[77px] inset-[0] justify-center m-auto p-[41px] md:px-10 sm:px-5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group111.svg')",
                                }}
                              >
                                <div className="h-[77px] ml-auto my-auto w-[44%]">
                                  <div className="absolute h-[77px] inset-[0] justify-center m-auto w-full">
                                    <Img
                                      src="images/img_refresh.svg"
                                      className="h-[51px] m-auto"
                                      alt="refresh_One"
                                    />
                                    <Img
                                      src="images/img_group_black_900_77x72.svg"
                                      className="absolute h-[77px] inset-[0] justify-center m-auto"
                                      alt="group_Seven"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-[9px] w-[98%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_contrast_blue_100.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_refresh.svg"
                                      className="h-[51px] my-0.5"
                                      alt="refresh_Two"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_group_black_900_77x72.svg"
                                  className="absolute h-[77px] inset-y-[0] my-auto right-1/4"
                                  alt="group_Eight"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[11%] flex flex-col gap-[45px] justify-start left-[6%] w-1/4">
                        <div className="flex flex-row gap-[49px] items-end justify-start mr-[43px] w-[81%] md:w-full">
                          <Img
                            src="images/img_refresh_black_900.svg"
                            className="h-[33px] mt-[69px]"
                            alt="refresh_Three"
                          />
                          <Img
                            src="images/img_group_black_900_102x97.svg"
                            className="h-[102px]"
                            alt="group_Nine"
                          />
                        </div>
                        <Img
                          src="images/img_eye_black_900.svg"
                          className="h-[83px] md:ml-[0] ml-[146px]"
                          alt="eye_One"
                        />
                      </div>
                    </div>
                    <div className="absolute flex flex-row items-center justify-between right-[5%] top-[3%] w-1/4">
                      <Img
                        src="images/img_group.svg"
                        className="h-[26px]"
                        alt="group_Ten"
                      />
                      <Img
                        src="images/img_computer_black_900.svg"
                        className="h-9"
                        alt="computer_One"
                      />
                    </div>
                    <div className="absolute bottom-[3%] flex flex-col justify-start left-[0] w-[32%]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[25px] md:ml-[0] ml-[207px] w-6"
                        alt="arrowleft"
                      />
                      <div className="flex flex-row items-start justify-between mt-[179px] w-full">
                        <Img
                          src="images/img_play.svg"
                          className="h-[39px] mb-[18px]"
                          alt="play_One"
                        />
                        <Img
                          src="images/img_computer_black_900.svg"
                          className="h-9 mt-[21px]"
                          alt="computer_Two"
                        />
                      </div>
                      <Img
                        src="images/img_reply_black_900.svg"
                        className="h-6 md:ml-[0] ml-[254px] mt-[22px]"
                        alt="reply_One"
                      />
                    </div>
                    <Img
                      src="images/img_checkmark_black_900.svg"
                      className="absolute bottom-[16%] h-[70px] right-[0]"
                      alt="checkmark_One"
                    />
                  </div>
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="absolute bottom-[15%] h-[15px] right-[5%] w-[15px]"
                    alt="arrowleft_One"
                  />
                  <Img
                    src="images/img_contrast.svg"
                    className="absolute bottom-[7%] h-3 right-[11%] w-[11px]"
                    alt="contrast_Eight"
                  />
                  <div className="absolute bottom-[29%] flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[21%] w-[49%]">
                    <Img
                      src="images/img_contrast.svg"
                      className="h-[19px] sm:mt-0 mt-[131px]"
                      alt="contrast_Nine"
                    />
                    <Img
                      src="images/img_group_black_900_135x127.svg"
                      className="h-[135px] mb-[15px] sm:ml-[0] ml-[5px]"
                      alt="group_Eleven"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      className="h-3 sm:ml-[0] ml-[285px] sm:mt-0 mt-3.5 w-[11px]"
                      alt="contrast_Ten"
                    />
                  </div>
                  <Img
                    src="images/img_contrast.svg"
                    className="absolute h-3 right-[2%] top-[9%] w-[11px]"
                    alt="contrast_Eleven"
                  />
                  <Img
                    src="images/img_contrast.svg"
                    className="absolute bottom-[27%] h-[19px] left-[13%]"
                    alt="contrast_Twelve"
                  />
                  <Img
                    src="images/img_contrast.svg"
                    className="absolute h-[19px] right-[0] top-[42%]"
                    alt="contrast_Thirteen"
                  />
                  <Img
                    src="images/img_plus.svg"
                    className="absolute h-6 right-[15%] top-[0]"
                    alt="plus"
                  />
                  <Img
                    src="images/img_maximize.svg"
                    className="absolute h-[22px] left-[14%] top-[35%]"
                    alt="maximize_Two"
                  />
                  <Img
                    src="images/img_maximize.svg"
                    className="absolute h-[27px] left-[14%] top-[35%]"
                    alt="maximize_Three"
                  />
                </div>
                <Img
                  src="images/img_group_black_900_405x584.svg"
                  className="absolute bottom-[0] h-[405px] right-[3%]"
                  alt="group_Twelve"
                />
              </div>
              <Img
                src="images/img_group_black_900_121x133.svg"
                className="absolute h-[121px] right-[11%] top-[11%]"
                alt="group_Thirteen"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col gap-[25px] h-80 md:h-auto items-start justify-center left-[5%] px-1 py-[25px] top-[18%] w-auto">
        <Text
          className="leading-[108.76%] lowercase max-w-[497px] md:max-w-full text-blue_gray_900"
          as="h2"
          variant="h2"
        >
          Craft.
          <br />
          Visualize.
          <br />
          Stand Out.
        </Text>
        <Text
          className="leading-[108.76%] lowercase max-w-[497px] md:max-w-full text-blue_gray_900"
          variant="body2"
        >
          SkillScribe is a powerful platform that empowers developers to create
          impressive resumes and visualize their GitHub profiles. With
          SkillScribe, you can craft a professional resume that highlights your
          skills and achievements, while also gaining valuable insights into
          your GitHub activity.
          <br /> Whether you're a seasoned developer or just starting out,
          SkillScribe provides the tools and features to help you stand out and
          make a lasting impact in your professional journey.
        </Text>
        <AnchorLink href="#demo">
          <Button
            className="cursor-pointer font-normal h-[50px] lowercase text-blue_gray_900 text-center hover:bg-blue_100 duration-500 text-lg w-[147px]"
            shape="RoundedBorder10"
            size="sm"
            variant="OutlineBlack900"
          >
            Get started
          </Button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default HeroSection;
