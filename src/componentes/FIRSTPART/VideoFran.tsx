import React from "react";
import "../FIRSTPART/videoFran.css";

const VideoFran: React.FC = () => {
  return (
    <div>
      <video className="videoPrincipal" controls>
        <source src="ruta_del_video.mp4" type="video/mp4" />
        {/* Agrega más etiquetas source si tu video tiene diferentes formatos */}
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoFran;
