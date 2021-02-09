import React, {Component} from 'react'
import logo from '../img/coche-con-rueda-de-repuesto.png'
import Login from './Login'


export default class Cabecera extends Component{
    render(){
        const {titulo,manejaclick } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
        return(
            <div className="App-header">
                
                <img onClick={manejaclick} src={logo} className="App-logo" alt="logo"/>
                <h1 className="titulo"> {titulo} </h1>
                <Login inicio_sesion={false} usuario="Josue Godinez" ></Login>
                
                

            </div>
        )
    }

}