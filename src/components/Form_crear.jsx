import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Orden_backend } from '../backend/orden.js'



const obtener_carrito = () => {      /*aca obtengo datos del carrito*/
    let carrito
    carrito = JSON.parse(sessionStorage.getItem('carrito'))
    return carrito;
};

const styles = {
    input: {
        fontSize: '3.5vmin',
        padding: '13px 10px'
        
    },

    item_grid: {
        border: 2,
        fontSize: '3vmin',
        borderBlockStyle: 'solid',
        marginTop: 20,
        marginRight: '3vmin',
        borderColor: 'gray',
        borderWidth: '0.1vmin',
        borderRadius: '4vmin',
        padding: 25,
        color: '#2755A3',
    },

    container_grid: {
        width: '70vmin',
        marginLeft: '10vmin',
        borderRightStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 2,
        overflow: 'auto',
        height: '60vmin'
    },

    text_field: {

        width: '45vmin',
        font: 'msyi'
    },

    boton: {
        borderRadius: 43,
        backgroundColor: '#15086B',
        width: '20vmin',
        height: '7vmin',
        marginLeft: '6vmin',
        color: 'white',
        marginTop: '10vmin',
        fontSize: '2vmin',
        Typography: {
            fontFamily: ['msyi'],
        }


    },

};


export default class Form_crear extends Component {
    state = {}

    obtener_datos = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value }) //uso corchetes esta vez[] porque con corchetes me aseguro a que la propiedad 
        //sea calculada entonces si mi campo se llama cantidad el campo se llamara cantidad y si es
        //nombre se llamara nombre
    }

    render() {

        const crear_orden = () => {




            const Direccion_entrega = this.state.dir_entrega
            const Direccion_facturacion = this.state.dir_factura



            const orden = {
                user: sessionStorage.getItem("user"),
                dir_entrega: Direccion_entrega,
                dir_factura: Direccion_facturacion,
                Total: Total,
                estado: 'En proceso',
                Repuestos: ids_carrito
            }

            const orden_ = new Orden_backend()

            orden_.insertar_orden(orden)
            cancelar_orden() //limpiar carrito

        }

        const cancelar_orden = () => {
            const carrito = []
            sessionStorage.setItem('carrito', JSON.stringify(carrito))
        }

        const carrito = obtener_carrito()
        let ids_carrito = []
        carrito.forEach(item => {
            ids_carrito.push(JSON.parse(item)._id)
        });

        let Total = 0

        const items = []

        if (carrito.length !== 0) {

            carrito.forEach(item => {
                items.push(
                    <Grid style={styles.item_grid}
                        item xs={12}>{JSON.parse(item).nombre + "   -   " + "Q " + JSON.parse(item).precio} </Grid>);

                Total += JSON.parse(item).precio
            });





            //por cada elemento agrego al array un componente item
            return (

                <div style={{
                    marginTop: 70,
                    display: 'flex',
                    flexDirection: 'row'

                }}>
                    <Grid container  style={styles.container_grid}>
                        {items}
                    </Grid>


                    <Grid container style={{                              
                                height: 'fit-content'
                            }}>

                        <Grid item  xs={12} md={6} style={{
                                paddingLeft: '4vmin',
                                height: '10vmin',
                                marginBottom: '2vmin'
                            }} >
                            <Typography variant="h5" color="textSecondary" component="body1" style={{
                                color: '#29274E',
                                fontSize: '3.8vmin'

                            }}> {"Direcci??n de entrega:"}</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} className='text-xs-center text-sm-center text-md-center text-lg-left' style={{
                             height: '10vmin',
                             marginBottom: '6vmin'
                        }}>
                            <TextField
                                variant="outlined"
                                label="Direccion de entrega"
                                name="dir_entrega"
                                style={styles.text_field}
                                inputProps={{
                                    style: styles.input,
                                }}
                                onChange={this.obtener_datos}

                            />

                        </Grid>



                        <Grid item xs={12} md={6} style={{
                                paddingLeft: '4vmin',
                                height: '10vmin',
                                marginBottom: '2vmin'
                                
                            }} >
                            <Typography variant="h5" color="textSecondary" component="body1" style={{
                                color: '#29274E',
                                font: 'msyi',
                                fontSize: '3.8vmin'

                            }}>  {"Direcci??n de facturaci??n:"}</Typography>

                        </Grid>

                        <Grid item xs={12} md={6} className='text-xs-center text-sm-center text-md-center text-lg-left' 
                        style={{
                            height: '10vmin',
                            marginBottom: '6vmin'
                       }}
                        >
                            <TextField
                                variant="outlined"
                                label="Direccion de facturacion"
                                name="dir_factura"
                                style={styles.text_field}
                                inputProps={{
                                    style: styles.input
                                }}
                                onChange={this.obtener_datos}


                            />
                        </Grid>

                        <Grid item xs={12} >
                            <Typography variant="h5" color="textSecondary" component="body1" style={{
                                color: '#29274E',
                                font: 'msyi',
                                marginTop: '5vmin',
                                textAlign: 'justify',
                                fontSize: '3.8vmin'
                            }}>  {"Total:                   Q " + Total}</Typography>

                        </Grid>

                        <Grid item xs={6} >
                            <Link to="/ordenes" >
                                <Button onClick={() => crear_orden()} type="submit" size="large" color="primary" style={styles.boton}>
                                    Confirmar Orden
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={6} >
                            <Link to="/crear_orden" >
                                <Button onClick={() => cancelar_orden()} type="submit" size="large" color="primary" style={styles.boton}>
                                    Cancelar Orden
                                </Button>
                            </Link>
                        </Grid>


                    </Grid>


                </div >

            )
        } else {
            return (<h1
                style={{
                    marginTop: 200
                }}
            >Agrega algo al carrito para realizar una compra :(  </h1>)

        }





    }
}


