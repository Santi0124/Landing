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
      <div>
        {video && ( // Verifica si se proporciona una URL de video
          <iframe
            width="700"
            height="400"
            src={video} // Usa la URL del video proporcionada como src
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <div className="container-phrase">
        <MotivationalPhrase phrase={segundaFrase} />
      </div>
    </div>
  );
}

export default Section;
