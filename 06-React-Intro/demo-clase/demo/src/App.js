import './App.css';
import ListaPersonas from './components/listaPersonas/listaPersonas';

const listaPersonas = [
  {name: 'Ana Rodriguez', age: 32},
  {name: "July Alvarez", age:35},
  {name: "Osca Marconi", age: 25},
  {name: "Julia Vazquez", age:27}
];

function App() {
  return (
    <div className="App">
       <ListaPersonas lista={listaPersonas}/>
    </div>
  );
}

export default App;
