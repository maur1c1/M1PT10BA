import logo from './logo.svg';
import Componente from './components/Componente/Componente';
import Cards from './components/Cards/Cards';
import './App.css';

function App() {
  return (
    <>
      <div className='Container'>
          <div>another text</div>
          <div>one more text</div>
          <div>The last text</div>
      </div>

      <Componente />
      <Cards />
    </>
  );
}

export default App;
