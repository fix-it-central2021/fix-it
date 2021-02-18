import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class Form_crear extends Component{



    render(){
        const {Dir_entrega,Dir_facturacion} = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas

            return(
               <form>
                   <Grid container>
                       <Grid item xs={6}>
                             <TextField
                             variant="outlined"
                             label="Direccion de entrega"
                             name="dir_entrega"
                             value={Dir_entrega}
                             />

                            <TextField
                             variant="outlined"
                             label="Direccion de facturacion"
                             name="dir_entrega"
                             value={Dir_facturacion}
                             />
                       </Grid>

                   </Grid>
               </form>
            )

        

    }

}