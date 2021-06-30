/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Items_orden from './Items_orden'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom'
import { Orden_backend } from '../backend/orden'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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

class Orden extends Component {

    render() {

        const MySwal = withReactContent(Swal)

        const eliminar_orden = () => {


            let ordenback = new Orden_backend()
            MySwal.fire({
                title: 'Quieres borrar esta orden?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Sí`,
                denyButtonText: `No`,
            }).then((result) => {

                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success')
                    this.forceUpdate()
                    ordenback.cancelar_orden(orden._id)

                    this.props.renderParent();

                } else if (result.isDenied) {
                    Swal.fire('Su orden no se elimino', '', 'info')
                }
            })

        }
        const { orden } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
        //en este caso le envio si ya incio sesion para mostrar el boton
        if (orden.Estado === 'En proceso') {
            return (
                <Grid container style={styles.grid} spacing={1}>

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


                            <Button id="actualizar" style={styles.boton} type="submit" size="large" color="primary" ><Link to={{
                                pathname: "/actualizar/" + orden._id,
                                state: {
                                    orden: orden
                                }
                            }}> Actualizar</Link>

                            </Button>






                            <Button onClick={eliminar_orden} id="cancelar" style={styles.boton} type="submit" size="large" color="primary" >

                                Cancelar


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

export default withRouter(Orden)