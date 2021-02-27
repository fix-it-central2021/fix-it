import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'



const obtener_carrito = () => {      /*aca obtengo datos del carrito*/
    let carrito
    carrito = JSON.parse(sessionStorage.getItem('carrito'))
    return carrito;
};

const styles = {
    input: {
        fontSize: 20
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
        width: '50vmin',
        marginLeft: '10vmin',
        borderRightStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 2,
        heigth: '100%'
    },

    text_field: {

        width: '60vmin',
        font: 'msyi'
    },

    boton: {
        borderRadius: 43,
        backgroundColor: '#15086B',
        width: '40vmin',
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

            let ordenes = []
            

            const Direccion_entrega = this.state.dir_entrega
            const Direccion_facturacion = this.state.dir_factura
            ordenes = JSON.parse(localStorage.getItem('ordenes'))

            const orden = {
                id:  ordenes == null ? 0: ordenes.length+1,
                Direccion_entrega: Direccion_entrega,
                Direccion_facturacion: Direccion_facturacion,
                Total: Total,
                Estado: 'En proceso',
                Carrito: carrito
            }

            if (ordenes != null) {
                ordenes.push(JSON.stringify(orden))
            } else {
                ordenes = []
                ordenes.push(JSON.stringify(orden))
            }
            localStorage.setItem('ordenes', JSON.stringify(ordenes))
            cancelar_orden()
        }

        const cancelar_orden = () => {
            const carrito = []
            sessionStorage.setItem('carrito', JSON.stringify(carrito))
        }

        const carrito = obtener_carrito()
        let Total = 0

        const items = []

        if (carrito.length !== 0) {

            carrito.forEach(item => {
                items.push(
                    <Grid style={styles.item_grid}
                        item xs={12}>{JSON.parse(item).Descripcion + "   -   " + "Q " + JSON.parse(item).Precio} </Grid>);

                Total += JSON.parse(item).Precio
            });





            //por cada elemento agrego al array un componente item
            return (

                <div style={{
                    marginTop: 70,
                    display: 'flex',
                    flexDirection: 'row'

                }}>
                    <Grid container style={styles.container_grid}>
                        {items}
                    </Grid>


                    <Grid spacing={5} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '3vmin',

                    }}>

                        <Grid spacing={5} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 50,


                        }}>
                            <Typography variant="h5" color="textSecondary" component="body1" style={{
                                color: '#29274E',
                                marginRight: '17.9vmin'
                            }}> {"Dirección de entrega:"}</Typography>


                            <TextField
                                variant="outlined"
                                label="Direccion de entrega"
                                name="dir_entrega"
                                style={styles.text_field}
                                InputProps={{
                                    style: styles.input,
                                }}
                                onChange={this.obtener_datos}

                            />

                        </Grid>

                        <Grid spacing={5} style={{
                            display: 'flex',
                            flexDirection: 'row'

                        }}>
                            <Typography variant="h5" color="textSecondary" component="body1" style={{
                                color: '#29274E',
                                font: 'msyi',
                                marginRight: '15vmin'
                            }}>  {"Dirección de facturación:"}</Typography>
                            <TextField
                                variant="outlined"
                                label="Direccion de facturacion"
                                name="dir_factura"
                                style={styles.text_field}
                                InputProps={{
                                    style: styles.input
                                }}
                                onChange={this.obtener_datos}


                            />
                        </Grid>

                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#29274E',
                            font: 'msyi',
                            marginTop: '5vmin',
                            width: '100vmin',
                            textAlign: 'justify'
                        }}>  {"Total:                   Q " + Total}</Typography>



                        <Grid spacing={5} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '100'

                        }}>
                            <Link to="/ordenes" >
                                <Button onClick={() => crear_orden()} type="submit" size="large" color="primary" style={styles.boton}>
                                    Confirmar Orden
                                </Button>
                            </Link>

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


