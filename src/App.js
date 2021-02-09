import './App.css';
import Cabecera from './components/Cabecera'
import React, {Component} from 'react'
class App extends Component { 
  
   ManejaClick = (nombre) => {

    console.log("He sido clickeado por: "+nombre)
  
  }
  

  render(){
    return (    //puedo sacar propiedades de cabecera y setearlas
      <div className="App">
          <Cabecera titulo="FIX IT" manejaclick={this.ManejaClick("Josue")}/> 
          <p className="App-intro">
            Hola mundo
          </p>
       
      </div>
    );
  }

}



export default App;
