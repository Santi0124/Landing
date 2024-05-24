import React from "react";
import Section from "./Section";
import "../TIPES/secondPart.css";
import CallButton from "../FIRSTPART/CallButton";
import MotivationalPhrase from "../FIRSTPART/MotivationalPhrase";

const SecondPart: React.FC = () => {
  return (
    <div className="secondPart">
      <Section
        titulo={"UNIVERSITY SETTER"}
        fraseMotivacional={"Tenemos la comunidad privada más completa sobre Appointment Setters en Europa y Latinoamérica. Contamos con más de 70 clases lectivas y acompañamiento 24/7 para que puedas resolver todas tus dudas día a día."}
        segundaFrase={"Santiago, 23 años de Venezuela. Ha pasado de ganar 200$ a 1500$ en menos de 2 meses."}
        video={"https://youtube.com/embed/l6WV0qBKtw8"}
      />
      <hr />
      <Section
        titulo={"COMUNIDAD Y EQUIPO"}
        fraseMotivacional={"Incluimos 2 llamadas semanales con todo el equipo sobre appointment setting, estrategias y ventas, además de una comunidad privada con todos los miembros para ayudarnos y mostrar nuestras ventas diarias."}
        segundaFrase={"Manu, de 22 años, de Alicante, España, ha pasado de no generar nada ni saber qué hacer a ganar 2000$/mes en 2 meses con nuestro equipo."}
        video={"https://youtube.com/embed/jDqEva9ln44"}
      />
      <hr />
      <Section
        titulo={"GARANTIZADO"}
        fraseMotivacional={"Garantizamos trabajo e ingresos a TODOS los miembros gracias a nuestra bolsa de trabajo. Nadie que se esfuerce se queda sin recompensa. Esto no es una simple formación, somos un EQUIPO."}
        segundaFrase={"Salva, de 21 años, de Valencia, salió de su carrera un poco perdido sin encontrar trabajo. A día de hoy está generando más de 1800$ en sus primeros meses."}
        video={"https://youtube.com/embed/9lUSA9YqxO0"}
      />
      <hr />
      <Section
        titulo={"MINDSET Y HÁBITOS"}
        fraseMotivacional={"Hablaremos todas las semanas sobre hábitos y mindset para poder optimizar todas nuestras tareas y ser lo más efectivos posibles. Nos desarrollamos continuamente para nunca quedarnos estancados."}
        segundaFrase={"Daniela, 21 años, está trabajando desde donde quiere y cuando quiere, además de poder costear su vida y pagar su carrera, un cambio total."}
        video={"https://youtube.com/embed/6Ncwi7DevyI"}
      />
      <hr />
      <Section
        titulo={"TUTORES"}
        fraseMotivacional={"A cada persona que tome el paso de integrarse en University Setter le pondremos a su disposición un Experto en appointment setting para que, si tiene alguna duda o inconveniente, pueda resolverlo el mismo día."}
        segundaFrase={"Max, 19 años, de Ciudad de México. Ahora puede trabajar desde casa y cuando quiera, sin tener que estar en otros trabajos que no iban con él"}
        video={"https://youtube.com/embed/Y3cNSEzZBo8"}
     />
      <hr />
      <CallButton />
      <hr />
      <Section
        titulo={"RESULTADOS"}
        fraseMotivacional={"Alfredo.    25 años."}
        video={"https://youtube.com/embed/dg02tvuQmIQ"}
        segundaFrase={"Alfredo es uno más de nuestro equipo que empezó así."}
      />
      <hr />
      <Section
        titulo={"Tutorias"}
        fraseMotivacional={"Javier.    26 años."}
        video={"https://youtube.com/embed/jDqEva9ln44"}
        segundaFrase={"Lo ha conseguido gracias al curso"}
      />
      <CallButton />
      <hr />
      <MotivationalPhrase
        phrase={"Ahora es tu momento..."}
      />
      <br />
    </div>
  )
}

export default SecondPart;
