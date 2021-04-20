import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Item  from './Item'
import {Repuesto}  from '../backend/repuesto.js'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '40px'
    }    
}));



let items =[]

const repuesto = new Repuesto();

repuesto.obtener_items().then( data=>{
 //obtengo array de repuestos para imprimirlos
console.log(data)
 data.forEach(repuesto => items.push(<Item>{repuesto}</Item>)); //por cada elemento agrego al array un componente item
 //se coloca afuera de la funcion porque si no cada vez que se manda a llamar el componente agrega de nuevo los elementos
 

}

).catch(function(error) {
    console.log('Hubo un problema al traer datos al API y guardarlos: ' + error.message);
  });

export default function Tienda() { 
    const classes = useStyles()
    //pasando el children element que es el objeto del repuesto
    console.log(items)
    return (
        <div className={classes.root} >
            <Grid container spacing={10} >
                {items /*paso el array de componentes Item para renderizarlos*/} 
            </Grid>
        </div>
    )
}