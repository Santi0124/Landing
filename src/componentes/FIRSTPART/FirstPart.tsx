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
       phrase="Gana entre 2K/7K al mes siendo un Appointment setter con un trabajo e ingresos garantizados."
       className="motivational-phrase" 
      />
      <VideoFran/>
      <CallButton />
      <MotivationalPhrase  
       phrase="Se diferente y escapa de la monotonía."
       className="motivational-phrase" // Asigna la clase CSS aquí
      />
    </div>
  );
}

export default FirstPart;
