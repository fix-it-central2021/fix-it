import './App.css';
import Cabecera from './components/Cabecera'
import Barra from './components/Barra'

import React, {Component} from 'react'
class App extends Component { 
  
   ManejaClick = (nombre) => {

    console.log("He sido clickeado por: "+nombre)
  
  }
  

  render(){
    return (    //puedo sacar propiedades de cabecera y setearlas
      <div className="App">
          <Cabecera titulo="FIX IT" manejaclick={this.ManejaClick("Josue")}/> 
          <Barra></Barra>
       
      </div>
    );
  }

}



export default App;
