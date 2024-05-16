import React from "react";
import "../FIRSTPART/callButton.css"

const CallButton: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = "https://lacasaecom.lpages.co/el-m%C3%A9todo/"
  }

  return (
    <div className="containerButton">
      <button
        className="callButton"
        onClick={handleButtonClick}
      >
        AGENDAR LLAMADA
      </button>
    </div>
  )
}

export default CallButton