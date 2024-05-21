import React from 'react';
import CallButton from './CallButton';
import './firstPart.css';
import MotivationalPhrase from './MotivationalPhrase';
import VideoFran from './VideoFran';
import TitleUniversity from './TitleUniversity';

const FirstPart: React.FC = () => {
  return (
    <div className="first-part-container">
      <TitleUniversity />
      <MotivationalPhrase 
       phrase="GANA ENTRE 2K/7K AL MES COMO APPOINTMENT SETTER CON UN TRABAJO E INGRESOS GARANTIZADOS."
       className="motivational-phrase" 
      />
      <VideoFran/>
      <CallButton />
      <MotivationalPhrase  
       phrase="Empieza a cambiar tu vida..."
       className="motivational-phrase" 
      />
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default FirstPart;
