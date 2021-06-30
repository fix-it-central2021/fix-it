/* eslint-disable react/jsx-pascal-case */
import './App.css';

import Form_crear from './components/Form_crear'
import Tienda_comp from './components/Tienda'
import Vista_item from './components/Vista_item'
import Ordenes_comp from './components/Ordenes'
import Ubicaciones from './components/Ubicaciones'
import Form_actualizar from './components/Form_actualizar.jsx'
import Registrarse from './components/Registro'


import Login_user from './components/Login_user.jsx'
import React from 'react'
import configs from './configs/configs'

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

export const Login = () =>{  
  return (    //puedo sacar propiedades de cabecera y setearlas
    <div className="App"> 
        <Login_user></Login_user>
    </div>
  );

}

export const Tienda = (props) =>{  
  console.log(props)
  const {reload_} = props.location.state 
  return (    //puedo sacar propiedades de cabecera y setearlas
    <div className="App">

        <Tienda_comp reload_={reload_}/>
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

export const Registrarse_ = () =>{  
  return (    //puedo sacar propiedades de cabecera y setearlas
    <div className="App">  
        <Registrarse></Registrarse>
    </div>
  );

}
export const Formactualizar = (props) =>{  
  const {orden} = props.location.state 
  return (    
    <div className="App">  
        <Form_actualizar orden={orden}></Form_actualizar>
    </div>
  );

}


export const Ubicacion = () =>{  
  return (   
    <div className="App" style={{display: 'table',
      margin: '0 auto',paddingTop:'10vmin' }}>  
        <Ubicaciones googleMapURL= {"https://maps.googleapis.com/maps/api/js?v=3.exp&key="+configs.mapskey }
        loadingElement={<h1>Cargando Mapa ...</h1>}  
        containerElement={<div style={{height: '50vmin',width:'100vmin' }}/>}
        mapElement={<div style={{height: '100%' }}/>}

       ></Ubicaciones>    </div>
  );

}








