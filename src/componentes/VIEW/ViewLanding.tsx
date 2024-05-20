import React, { useEffect, useState } from "react";
import FirstPart from "../FIRSTPART/FirstPart";
import SecondPart from "../TIPES/SecondPart";
import "./viewLanding.css";

const ViewLanding: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("Página cargada");
    setLoaded(true);
  }, []); // Esto se ejecutará solo una vez, cuando la página se monte

  return (
    <div className={`view-landing ${loaded ? 'show' : ''}`}>
      <header className="App-header">
        <FirstPart />
        <hr />
        <SecondPart />
      </header>
    </div >
  );
}

export default ViewLanding;
