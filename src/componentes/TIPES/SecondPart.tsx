import React from "react";
import Section from "./Section";
import "../TIPES/secondPart.css"
import CallButton from "../FIRSTPART/CallButton";
import MotivationalPhrase from "../FIRSTPART/MotivationalPhrase";

const SecondPart: React.FC = () => {
  return (
    <div>
      <Section
        titulo={"COMUNIDAD Y EQUIPO"}
        fraseMotivacional={"Tendremos dos llamadas semanales con todo el equipo sobre Appoointment setting, estrategias y ventas, además de una comunidad privada con todos los miembros para ir comentando nuestro progreso."}
        segundaFrase={"Santiago, 23 años, Venezuela. Antes no superaba los 400 euros. Ahora está haciendo 2000 dólares con nuestras empresas. Ahora puede viajar y hacer cosas nuevas gracias a esta profesión y estar cobrando en dólares."} />
      <hr />
      <Section
        titulo={"UNIVERSITY SETTER"}
        fraseMotivacional={"Tenemos la formación y comunidad más completa de Appointment setting y ventas con más de 70 clases informativas además de poner a un tutor para cada miembro del equipo y así que podamos resolver cualquier duda al momento."}
        segundaFrase={"Manuel, 25 años, Alicante. Antes no trabajaba y tenía por el suelo la confianza. Actualmente está en nuestro equipo y está facturando 2.5 mil dólares mensuales después del segundo mes y con una confianza indestructible."} />
      <hr />
      <Section
        titulo={"BOLSA DE TRABAJO"}
        fraseMotivacional={"Garantizamos trabajo e ingresos a TODOS los miembros con nuestras empresas. Nadie que se esfuerce se queda sin recompensa. Esto no es una simple formación..."}
        segundaFrase={"Salva, 21 años, de Valencia. No ha trabajado hasta el día de hoy en un trabajo normal y monótono. Después de esto, no lo volverá a hacer, 600 euros en su primera semana, ha trabajado desde donde quería y cuando quería, solo acaba de empezar…"} />
      <hr />
      <Section
        titulo={"TUTORIAS"}
        fraseMotivacional={"Las tutotias son divinas"} 
        segundaFrase={""} />
      <hr />
      <Section
        titulo={"Tutorias"}
        fraseMotivacional={"Las tutotias son divinas"} 
        segundaFrase={""} />
      <hr />
      <CallButton />
      <hr />
      <Section
       titulo={"Resultados"}
       fraseMotivacional={"Santiago.    24 años."} 
       segundaFrase={"Lo ha conseguido gracias al curso"} />
       <hr/>
       <Section
       titulo={"Tutorias"}
       fraseMotivacional={"Javier.    26 años."} 
       segundaFrase={"Lo ha conseguido gracias al curso"} />
       <CallButton />
       <hr/>
       <MotivationalPhrase
        phrase={"Ahora es tu momento..."}/>
        <br/>
    </div>
  )
}
export default SecondPart