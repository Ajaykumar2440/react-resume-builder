import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "../components/Editor/Editor";
import Resume from "../components/Resume/Resume";

import styles from "./FormBody.css";
import { Button } from "antd";

function FormBody({ username }) {

  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "personal details",
    education: "Education",
    workExp: "Work Experience",
    project: "Projects",
    achievement: "Achievements",
    summary: "Summary",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: '',
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

  return (
    <div >
      <p className='heading' style={{color:'red', marginLeft:'430px'}}> Complete your Resume {username} !</p>
      <div className='toolbar'>
        <ReactToPrint
          trigger={() => {
            return (
              <Button style={{marginLeft:'69%', marginBottom:'10px'}}>
                Download <ArrowDown />
              </Button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className='main'>
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
        />
      </div>
    </div>
  );
}

export default FormBody;