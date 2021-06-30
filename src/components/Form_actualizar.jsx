import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Orden_backend } from '../backend/orden.js'





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




export default class Form_actualizar extends Component {
      
    state = {conteo: 0}

    
   

    obtener_datos = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value }) //uso corchetes esta vez[] porque con corchetes me aseguro a que la propiedad 
        //sea calculada entonces si mi campo se llama cantidad el campo se llamara cantidad y si es
        //nombre se llamara nombre
    }

    render() {
       
        const actualizar = () => {


        

            const Direccion_entrega = this.state.dir_entrega
            const Direccion_facturacion = this.state.dir_factura



            const _orden = {
                _id: orden._id ,
                user: sessionStorage.getItem("user"),
                dir_entrega: Direccion_entrega,
                dir_factura: Direccion_facturacion,
                Total: Total,
                estado: 'En proceso',
                Repuestos: ids_carrito
            }

            const orden_ = new Orden_backend()

            orden_.actualizar(_orden)
           

        }

       

        const {repuestosObjects} =  this.props.orden
        const {orden} =  this.props


        if(this.state.conteo===0){
            this.setState({ dir_entrega : orden.Direccion_Entrega  , dir_factura : orden.Direccion_Facturacion })
            this.setState({conteo: 1})
        }


        let ids_carrito = []
        repuestosObjects.forEach(item => {
            ids_carrito.push(item._id)
        });

        let Total = 0

        const items = []

        if (repuestosObjects.length !== 0) {

            repuestosObjects.forEach(item => {
                items.push(
                    <Grid style={styles.item_grid}
                        item xs={12}>{item.nombre + "   -   " + "Q " + item.precio} </Grid>);

                Total += item.precio
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

                            }}> {"Dirección de entrega:"}</Typography>
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
                                value={this.state.dir_entrega}
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

                            }}>  {"Dirección de facturación:"}</Typography>

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
                                value={this.state.dir_factura}


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

                        <Grid item xs={12} >
                            <Link to="/ordenes" >
                                <Button onClick={() => actualizar()} type="submit" size="large" color="primary" style={styles.boton}>
                                    Actualizar Pedido
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


