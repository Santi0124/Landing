import React from "react";
import "./section.css";
import MotivationalPhrase from "../FIRSTPART/MotivationalPhrase";

interface SectionProps {
  titulo: string;
  fraseMotivacional: string;
  segundaFrase: string;
  video?: string;
}

const Section: React.FC<SectionProps> = ({ titulo, fraseMotivacional, segundaFrase, video }) => {
  return (
    <div className="section-container">
      <div className="title">
        <h4>{titulo}</h4>
      </div>
      <div>
        <MotivationalPhrase phrase={fraseMotivacional} />
      </div>
      {video && (
        <div className="video-container">
          <video className="video" controls>
            <source src={video} type="video/mp4" />
            {/* Agrega más etiquetas source si tu video tiene diferentes formatos */}
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      )}
      <div className="container-phrase">
        <MotivationalPhrase phrase={segundaFrase} />
      </div>
    </div>
  );
}

export default Section;
