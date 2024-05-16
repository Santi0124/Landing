import React from "react";
import "./section.css";
import MotivationalPhrase from "../FIRSTPART/MotivationalPhrase";

interface SectionProps {
  titulo: string;
  fraseMotivacional: string;
  segundaFrase: string
  video?:string
}

const Section: React.FC<SectionProps> = ({ titulo
  , fraseMotivacional, segundaFrase }) => {
  return (
    <div className="section-container">
      <div className="title">
        <h4 >{titulo}</h4>
      </div>
      <div>
        <MotivationalPhrase phrase={fraseMotivacional} />
      </div>
      <div className="video-container">
      </div>
      <div className="container-phrase">
        <MotivationalPhrase phrase={segundaFrase} />
      </div>
    </div>
  );
}

export default Section;