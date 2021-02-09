import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import '../App.css';

export default class Loging extends Component{
    render(){
        const {inicio_sesion , usuario } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
        if(!inicio_sesion){
            return(
            
                <Button variant="contained">
                        Iniciar Sesion
                </Button>
            )
        }else{

            return(
                <h5 className="texto">{usuario}</h5>
            )

        }

        

    }

}