import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Text } from "components";
const Features = () => {
  return (
    <div className="bg-blue_100 flex flex-col font-chalkboardse md:gap-10 gap-[77px] h-[537px] md:h-auto items-center justify-around max-w-[1512px] md:px-10 sm:px-5 px-[100px] py-[50px] w-full">
      <Typography
        className="font-bold uppercase text-4xl text-blue_gray_900"
        variant="h2"
        as="h2"
      >
        Features
      </Typography>
      <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] h-[537px] md:h-auto items-center justify-around">
        <Card className="mt-2 w-96 border border-black rounded-lg h-[300px]">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Resume Builder
            </Typography>
            <Typography className="py-[10px] font-medium text-lg text-center px-[10px]">
              The Resume Builder feature of SkillScribe empowers you to
              effortlessly create professional and polished resumes. With a
              user-friendly interface and a wide selection of customizable
              templates, you can tailor your resume to highlight your unique
              skills, experiences, and achievements.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <a href="#" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 text-lg"
              >
                Try Now{" "}
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="mt-2 w-96 border border-black rounded-lg h-[300px]">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              GitHub Analyzer
            </Typography>
            <Typography className="py-[10px] font-medium text-lg text-center px-[10px]">
              SkillScribe's GitHub Analyzer provides insightful analytics and
              visualization for your GitHub profile. Track your progress,
              showcase top projects, and highlight coding expertise with ease.
              our GitHub Analyzer empowers you to unlock the full potential of
              your GitHub presence and demonstrate your skills with confidence.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <a href="#" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 text-lg"
              >
                Try Now{" "}
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Features;
