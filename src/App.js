/* eslint-disable react/jsx-pascal-case */
import './App.css';

import Form_crear from './components/Form_crear'
import Tienda_comp from './components/Tienda'
import Vista_item from './components/Vista_item'
import Ordenes_comp from './components/Ordenes'
import React from 'react'

export const HomePage = () =>{  
    return (    //puedo sacar propiedades de cabecera y setearlas
      <div className="App">
 
      </div>
    );

}

export const CrearOrden = (props) =>{  
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
  export const Vistaitem = (props) =>{  
  const {id} = props.location.state   //obtengo propiedad de location state que se envia cuando llamo a Vistaitem
    return (    //puedo sacar propiedades de cabecera y setearlas
      <div className="App">  
          <Vista_item id={id} ></Vista_item>
      </div>
    );
  }

    export const Ordenes = () =>{  
        return (    //puedo sacar propiedades de cabecera y setearlas
          <div className="App">  
              <Ordenes_comp></Ordenes_comp>
          </div>
        );

}








