import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


        
const obtener_carrito = () => {      /*aca obtengo datos del carrito*/ 
    let carrito
    carrito = JSON.parse(sessionStorage.getItem('carrito'))   
    return carrito;
}
const carrito = obtener_carrito()
const items = []

if(carrito !=null){
    if(carrito.length!==0 ){
        carrito.forEach(item => items.push(
            <Grid item xs={12}>{JSON.parse(item).Descripcion + "   -   " + "Q " + JSON.parse(item).Precio} </Grid>
            ) )//por cada elemento agrego al array un componente item
    }
}



export default function Form_crear (props) {
 
    const { Dir_entrega, Dir_facturacion } = props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas
    
    

        return (
                <Grid container style = {{
                    marginTop :100

                }}>
                    <Grid style={{
                        display: 'flex'
                    }}>
                        <Grid container spacing={5}>                            
                                {items}                            
                        </Grid>
                        <TextField
                            variant="outlined"
                            label="Direccion de entrega"
                            name="dir_entrega"
                            value={Dir_entrega} /*utilizo la direccion de entrega del props*/
                        />

                        <TextField
                            variant="outlined"
                            label="Direccion de facturacion"
                            name="dir_entrega"
                            value={Dir_facturacion} /*utilizo la direccion de facturacon del props*/
                        />
                    </Grid>

                </Grid>
        
        )



    }

