/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Items_orden from './Items_orden'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h5: {
                fontSize: ['3.2vmin', "!important"],
                fontFamily: "msyi"
            }
        }
    }
});

const styles = {

    boton: {
        borderRadius: 43,
        backgroundColor: '#15086B',
        width: '40%',
        height: '7vmin',
        marginLeft: '4vmin',
        color: 'white',
        fontSize: '2vmin',
        Typography: {
            fontFamily: ['msyi'],
        },
        Float64Array: 'right',
    },

    grid: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '1.5vmin',
        marginBottom: '1.5vmin',
        border: 2,
        fontSize: '3vmin',
        borderBlockStyle: 'solid',
        borderColor: 'gray',
        borderWidth: '0.1vmin',
        borderRadius: '4vmin',
        color: '#2755A3',
        width: '80%',
        height: '100%',
        padding: '2vmin',


    },

};

export default class Orden extends Component {

    render() {


        const eliminar_orden = () => {
            let ordenes = []


            ordenes = JSON.parse(localStorage.getItem('ordenes'))
            const index = ordenes.findIndex(orden_ => orden_.id === orden.id)
            ordenes.splice(index, 1)
            localStorage.setItem('ordenes', JSON.stringify(ordenes))
        }
        const { orden } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
        //en este caso le envio si ya incio sesion para mostrar el boton
        if (orden.Estado === 'En proceso') {
            return (
                <Grid container style={styles.grid} spacing={3}>

                    <Grid container item xs={12} sm={12} md={7}>
                        <Items_orden
                            orden={orden} ></Items_orden>

                        <ThemeProvider theme={theme}>
                            <Typography variant="h5" color="textSecondary" component="body1" style={{
                                color: '#2755A3',
                                width: '25%'

                            }}>  {"Q " + orden.Total + ""}</Typography>

                            <Typography variant="h5" color="textSecondary" component="body1" style={{
                                color: '#2755A3',
                                font: 'msyi',
                                width: '20%'

                            }}>  {"" + orden.Estado + ""}</Typography>


                        </ThemeProvider>
                    </Grid>

                    <Grid container item xs={12} sm={12} md={5}>
                        <div style={{
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'row',
                            marginRight: 0,
                            justifyContent: 'flex-end'

                        }}>

                            <Button id="actualizar" style={styles.boton} type="submit" size="large" color="primary" >
                                Actualizar
                            </Button>



                            <Button onClick={eliminar_orden} id="cancelar" style={styles.boton} type="submit" size="large" color="primary" >
                                <Link to="/ordenes" >
                                    Cancelar
                                </Link>

                            </Button>


                        </div>

                    </Grid>
                </Grid>

            )
        } else {
            return (
                <Grid style={styles.grid}>
                    <Typography variant="h5" color="textSecondary" component="body1" style={{
                        color: '#2755A3',
                        font: 'msyi'
                    }}>  {" - " + orden.Total}</Typography>
                    <Items_orden orden={orden} ></Items_orden>
                </Grid>
            )
        }



    }

}