import React from 'react';
import PersonaItem from '../PersonaItem/PersonaItem';

const ListaPersonas = (props)=>{

return(

    <div>
     {
        /* props.lista => array
        Por cada elemento del array, mostrar un personaItem */
     }

     { props.lista.map(persona =>{
        return <PersonaItem name={persona.name} age={persona.age}/>
     }) }
    </div>
);
}

export default ListaPersonas;