import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


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

export default class Items_orden extends Component {

    render() {
        const { orden } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
        //en este caso le envio si ya incio sesion para mostrar el boton
        const items = []


        const carrito = orden.Carrito

        carrito.forEach(item => {
            items.push(<Typography variant="h5" color="textSecondary" component="body1" style={{
                color: '#2755A3',
                font: 'msyi',
                marginRight: '1%',
                width: '40%'

            }}>  {
                    JSON.parse(item).Descripcion + " ,"
                }</Typography>);
        });

        if (carrito.length > 2) {
            return (
              
                    <div  style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width:'50%',
                        marginRight:0
                    }}>
                          <ThemeProvider theme={theme}>
                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#2755A3',
                            font: 'msyi',
                            marginRight: '1%',
                            width: '40%'
                        }}>  {JSON.parse(carrito[0]).Descripcion + ","}</Typography>
                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#2755A3',
                            font: 'msyi',
                            marginRight: '1%',
                            width: '40%'

                        }}>  {JSON.parse(carrito[1]).Descripcion + "..."}</Typography>
                      </ThemeProvider>
                </div>
              


            )
        } else {
            return (
                <ThemeProvider theme={theme}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',                        
                        width:'50%',
                        marginRight:0

                    }} >
                        {
                            items

                        }

                    </div>
                </ThemeProvider>

            )
        }



    }

}