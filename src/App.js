//Importaciones a recursos externos
//Los recursos externo son los que se intalan e n intalacionde una dependencia

//Importaciones de componentes internos
import Clase2  from "./clase2/Clase2";

//Importar dependencias
//importar archivo de assets y hojas de estilos
//import './App.css';

const App = () => { 
   //Logica del componente


  //Renderizar componentes --  dentro de return 
  //para agregar una variable dentro del renderizado o en una etiqueta usar corchetes {variable}
  return (
    <div>
      <Clase2/>
    </div>


  );
}

export default App;
