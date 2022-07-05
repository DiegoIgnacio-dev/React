import logo from './logo.svg';
import './App.css';
//si no usara default deberia seleccionar el componente con llaves {}
import MiComponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {

  
  const ficha={
    altura:"185cm",
    estado:"Excelente",
    grupo:"H+"

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      {/* insertando componente*/}
      <MiComponente/>
    
      <SegundoComponente/>

      <TercerComponente 
      //nombre={numero}//propiedades del componente
      //apellido="Avila"
      ficha={ficha}
       />
      </header>


    </div>
  );
}

export default App;
