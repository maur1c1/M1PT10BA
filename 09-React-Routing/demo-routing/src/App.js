//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Person from './components/Person';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About />}/>
        <Route path='profile' element={<Profile/>}>
            <Route path=':person' element={<Person/>}/>
        </Route>

        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
