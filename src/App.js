//Importaciones a recursos externos

//Importaciones de componentes internos
import Card from "./components/Card"
import Imagenes from "./components/Imagenes"
import Component from "./components/Component";
//Importar dependencias
//importar archivo de assets y hojas de estilos
import logo from "./logo.svg"
//import './App.css';

function App() {
  //Logica del componente
  let a = 4;
  let b = 8;
  let result = a + b;
  let varHola = "Hola mundo";


  //Renderizar componentes --  dentro de return 
  //para agregar una variable dentro del renderizado o en una etiqueta usar corchetes {variable}
  return (
    <div className="App">
    <img src={logo} alt="logo"></img>
      {result}
      <p>{varHola}</p>
      <pre> {6 * 6} </pre>
      <Card/>
      <Imagenes/>
      <Component></Component>
    </div>


  );
}

export default App;
