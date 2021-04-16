import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Orden from './Orden'


const obtener_ordenes = () => {      /*aca obtengo datos del carrito*/
    let ordenes
    ordenes = JSON.parse(localStorage.getItem('ordenes'))
    return ordenes;
};

export default class Ordenes extends Component {

    render() {

        const ordenes = obtener_ordenes()

        const items = []



        if (ordenes!=null) {

            if(ordenes.length!=0){
                ordenes.forEach(item => {
                    items.push(                                     
                        <Orden orden={JSON.parse(item)}></Orden>);
                });
    
                //por cada elemento agrego al array un componente item
                return (
                        <div   style={{
                            width: '85%',
                            marginTop: 30,
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft:'15%',
                            marginRight:0
    
                        }}>
                            {items}
                        </div>
                )
            }else{
            return (<h1
                style={{
                    marginTop: 200
                }}
            >Todavía no tienes ninguna orden :(  </h1>)
            }


        } else {
            return (<h1
                style={{
                    marginTop: 200
                }}
            >Todavía no tienes ninguna orden :(  </h1>)
        }





    }
}


