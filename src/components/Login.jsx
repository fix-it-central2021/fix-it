import React, {Component} from 'react'
import Button from '@material-ui/core/Button';



import '../App.css';

export default class Loging extends Component{
    opciones_disponibles = () =>{
        const {opciones_disponibles , lista_opciones } = this.props //metodo para pasar opciones disponibles sgun el usuario al darle click a su nombre
        opciones_disponibles(lista_opciones)
    }    


    render(){
        const {inicio_sesion , usuario  } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
                                                      //en este caso le envio si ya incio sesion para mostrar el boton
        if(!inicio_sesion){
            return(                
                <Button id="login"  variant="contained">
                Iniciar Sesion
                </Button>   
               
            )
        }else{
            return(
                <label onClick={this.opciones_disponibles}  className="texto">{usuario}</label>
            )
        }

        

    }

}