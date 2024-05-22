import React from "react";
import "../FIRSTPART/videoFran.css";

const VideoFran: React.FC = () => {
  return (
    <div>
      <iframe
        className="videoPrincipal"
        width="560"
        height="315"
        src=""
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoFran
