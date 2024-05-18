import logo from './logo.svg';
import './App.css';
import DigitalClock from './components/DigitalClock';
import Pokemon from './components/pokemon/Pokemon';
import Form from './components/Forms/Form';
import { useState } from 'react';
function App() {
  const [namePoke, setNamePoke] = useState(null)
  return (
    <div className="App">
      <DigitalClock></DigitalClock>
{/*       
      <button onClick={()=>setNamePoke((old)=> "pikachu")}>call pikachu</button>
      <button onClick={()=>setNamePoke((old)=> "ditto")}>call ditto</button>
      <button onClick={()=>setNamePoke((old)=> "raichu")}>call raichu </button>
      <Pokemon namePoke={namePoke} className="d-flex" /> */}
      <Form/>
    </div>
  );
}

export default App;
