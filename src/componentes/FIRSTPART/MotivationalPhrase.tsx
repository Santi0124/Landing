import React from "react";

interface MotivationalPhraseProps {
  phrase: string;
  className?: string
}

const MotivationalPhrase: React.FC<MotivationalPhraseProps> = ({phrase}) => {
  return (
    <div>
      <p className="phrase">{phrase}</p>
    </div>
  )
}
export default MotivationalPhrase