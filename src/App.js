import './App.css';

import Form_crear from './components/Form_crear'
import Tienda_comp from './components/Tienda'

import React from 'react'

export const HomePage = () =>{  
    return (    //puedo sacar propiedades de cabecera y setearlas
      <div className="App">
 
      </div>
    );

}

export const CrearOrden = () =>{  
  return (    //puedo sacar propiedades de cabecera y setearlas
    <div className="App">
 
        <Form_crear></Form_crear>
    </div>
  );

}

export const Tienda = () =>{  
  return (    //puedo sacar propiedades de cabecera y setearlas
    <div className="App">

        <Tienda_comp/>
    </div>
  );

}








