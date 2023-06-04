import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { useEffect } from "react";
import Editor from "../Editor/Editor";
import Resume from "../Main/Resume";

import styles from "./Body.module.css";
import { Link } from "react-router-dom";

function Body() {
  const colors = ["#239ce2", "#000000", "#0bc5ea", "#48bb78"];
  const fonts = ["Open Sans", "Poppins"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeFont, setActiveFont] = useState(fonts[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center gap-[30px] pt-0  bg-blue_100">
      <div className="flex flex-row justify-around w-full items-center">
        <Link to="/">
          <p className="cursor-pointer font-semibold text-[1.5rem] p-2 rounded-xl ml-10 text-left">
            Home
          </p>
        </Link>
        <p className="cursor-pointer font-bold text-[2.1rem] w-full text-center">
          Resume Builder
        </p>
      </div>
      <div className="w-full flex gap-[40px] justify-between items-center flex-wrap flex-row">
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <div className={styles.fonts}>
          {fonts.map((item) => (
            <span
              key={item}
              className={`${styles.fonts} ${
                activeFont === item ? styles.active : ""
              }`}
              onClick={() => setActiveFont(item)}
            >
              {item}
            </span>
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button className="py-2 px-4 rounded-md text-black outline-none border-0 font-medium text-[1rem] gap-[5px] items-center cursor-pointer bg-white flex flex-row">
                {/* <button className="rounded-xl bg-blue_100 p-[20px] w-[150px] flex flex-row gap-[10px] items-center justify-center"> */}
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className="flex gap-[20px] w-full justify-between">
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
          activeFont={activeFont}
        />
      </div>
    </div>
  );
}

export default Body;
