import { useState } from "react";
import { useEffect } from "react";

const CountFunctional = () => {

    const [counter, setCounter] = useState(0);

   const aumentare = ()=> {
         setCounter(counter + 1);
    }

    const decrementare = ()=>{
       counter > 0 && setCounter(counter - 1);
    }

    const reiniciare = ()=>{
        setCounter(0);
    }

    useEffect(
        ()=>{
            console.log('Ciao!');
        },[]
    )
    return(
        <>
            <h2>iL Maurici Funzionale</h2>    
            <p>{counter}</p>
            <button onClick={aumentare}>Aumentar</button>
            <button onClick={reiniciare}>Reiniciar</button>
            <button onClick={decrementare}>Decrementar</button>
        </>
       )
}

export default CountFunctional;