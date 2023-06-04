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
import { Link } from "react-router-dom";
const TryNow = () => {
  return (
    <div
      className="bg-blue_100 flex flex-col font-chalkboardse md:gap-10 gap-[77px] h-[650px] md:h-auto items-center justify-around max-w-[1512px] md:px-10 sm:px-5 px-[100px] py-[50px] w-full mt-[30px] rounded"
      id="demo"
    >
      <Typography
        className="font-bold uppercase text-4xl text-blue_gray_900"
        variant="h2"
        as="h2"
      >
        Try Now
      </Typography>
      <div className="flex md:flex-col flex-row md:gap-10 gap-[77px] h-[500px] md:h-auto items-center justify-around">
        <Card className="mt-[-60px] w-96 border border-black rounded-lg h-[350px] p-[20px]">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Resume Builder
            </Typography>
            <Typography className="py-[5px] font-medium text-lg text-center px-[10px]">
              The Resume Builder feature of SkillScribe empowers you to
              effortlessly create professional and polished resumes. With a
              user-friendly interface and a wide selection of customizable
              templates, you can tailor your resume to highlight your unique
              skills, experiences, and achievements.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center">
            <Link to="/resume">
              <Button
                variant="text"
                className="flex items-center gap-2 text-lg"
              >
                Try Now{" "}
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="mt-[-60px] w-96 border border-black rounded-lg h-[350px] p-[20px]">
          <CardBody>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-center"
            >
              GitHub Analyzer
            </Typography>
            <Typography className="py-[3px] font-medium text-lg text-center px-[10px]">
              SkillScribe's GitHub Analyzer provides insightful analytics and
              visualization for your GitHub profile. Track your progress,
              showcase top projects, and highlight coding expertise with ease.It
              enables you to track your progress,highlight your top projects.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex justify-center mt-8">
            <Link to="/analyzer">
              <Button
                variant="text"
                className="flex items-center gap-2 text-lg"
              >
                Try Now{" "}
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TryNow;
