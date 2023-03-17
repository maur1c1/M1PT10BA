import Title from "./components/title";
import Studenti from "./components/Studenti";
import Boton from "./components/Boton";
import Boton2 from "./components/Boton2";

function App() {

  const alunno = [{name: 'Robert Stone', age:25}, {name: 'Nadia Bartolini', age: 19},{name: "Mayra Puh", age: 28}]

  return (
    <>

      <Title />
      <h3>Studenti</h3>
      <Studenti alunno={alunno} hola="holis"/>
      <Boton text="sono uno botone" />
      <Boton2  text="sono botone"/>
    </>
  );
}

export default App;
