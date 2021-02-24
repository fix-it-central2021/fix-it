import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { StarOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';



const obtener_carrito = () => {      /*aca obtengo datos del carrito*/
    let carrito
    carrito = JSON.parse(sessionStorage.getItem('carrito'))
    return carrito;
}

const useStyles = makeStyles(() => ({
    input: {
        fontSize:20
    }    ,

    item_grid: {
        border: 2,
        fontSize: 25,
        borderBlockStyle: 'solid',
        marginTop:20,
        marginRight:40,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 40,
        padding: 25,
        color: '#2755A3'
    },

    container_grid: {
        width:500,
        marginLeft:100,
        borderRightStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 2,
        heigth: '100%'
    },

    text_field:{
        
        width: 600,
        marginTop:20
    }
}));


export default function Form_crear (props){
        const items = []
        const classes= useStyles()
        const { Dir_entrega, Dir_facturacion } = props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas

        const carrito = obtener_carrito()

        if (carrito.length !== 0) {
            carrito.forEach(item => items.push(
                <Grid  className= {classes.item_grid}
                    item xs={12}>{JSON.parse(item).Descripcion + "   -   " + "Q " + JSON.parse(item).Precio} </Grid>
            ))//por cada elemento agrego al array un componente item
            return (
                
                <div style={{
                    marginTop: 40,
                    display: 'flex',
                    flexDirection: 'row'

                }}>
                     <Grid container  className={classes.container_grid}>
                        {items}
                    </Grid>


                    <Grid spacing={5} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft:100
                    }}>
                        <TextField
                            variant="outlined"
                            label="Direccion de entrega"
                            name="dir_entrega"
                            value={Dir_entrega} /*utilizo la direccion de entrega del props*/
                            className={classes.text_field}
                            InputProps={{
                                className: classes.input,
                                classes:{
                                    underlin: classes.input
                                }
                            }}
                        />

                        <TextField
                            variant="outlined"
                            label="Direccion de facturacion"
                            name="dir_entrega"
                            value={Dir_facturacion} /*utilizo la direccion de facturacon del props*/
                            className={classes.text_field}
                            InputProps={{
                                className: classes.input
                            }}
                            Inpu
                        />
                    </Grid>


                </div>

            )
        } else {
            return (<h1
                style={{
                    marginTop: 200
                }}
            >Agrega algo al carrito para realizar una compra :(   </h1>)
        }





    }


