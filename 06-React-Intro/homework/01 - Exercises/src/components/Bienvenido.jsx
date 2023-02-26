import React from "react";
import Botones from "./Botones";

const studentName = "Mauricio";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Hello World!</h1>
      <h3>My name is {studentName}</h3>
      <ul>
        {techSkills.map(elem=> <li>{elem}</li>)}
      </ul>
      <Botones alerts ={alerts}/>

    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
