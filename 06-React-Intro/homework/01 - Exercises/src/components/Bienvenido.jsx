import React from "react";
import Botones from "./Botones";

const studentName = "Mauricio";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>We are first app in React!</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((elem, index)=> <li key={index}>{elem}</li>)}
      </ul>
      <Botones alerts ={alerts}/>

    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
