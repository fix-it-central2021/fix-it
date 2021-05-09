import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'



import '../App.css';

export default class Loging extends Component {



    render() {
       
        let inicio_sesion = sessionStorage.getItem("token") != null 
        
        //obtengo la propiedad de this.props que es sessionStorage.setItem("token",null)un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
        //en este caso le envio si ya incio sesion para mostrar el boton
        if (!inicio_sesion) {
            return (
                <div   style={{ marginBottom: "auto", marginTop: "auto"}}>
                    <Link to="/login" >

                        <Button id="login" variant="contained">
                            Iniciar Sesion
                        </Button>
                    </Link>
                </div>




            )
        } else {
            return (
                <div   style={{ marginBottom: "auto", marginTop: "auto"}}>
                <Link to="/ordenes" >
                    <p onClick={this.opciones_disponibles} className="texto">{sessionStorage.getItem("user")} </p>
                </Link>
                 </div>
            )
        }



    }

}