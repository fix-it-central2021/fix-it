import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Item  from './Item'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginLeft: '150px',
        marginRight: '150px',
        marginTop: '40px'
    }    
}));

const obtener_items = () => {      /*aca obtengo datos de bases de datos*/ 
    let items_select
    items_select = JSON.parse(localStorage.getItem('items_select'))   //simulado con localstorage
    return items_select;
}

const repuestos = obtener_items(); //obtengo array de repuestos para imprimirlos
const items = []
repuestos.forEach(repuesto => items.push(<Item>{repuesto}</Item>)); //por cada elemento agrego al array un componente item
//se coloca afuera de la funcion porque si no cada vez que se manda a llamar el componente agrega de nuevo los elementos

export default function Tienda() { 
    const classes = useStyles()
    //pasando el children element que es el objeto del repuesto
    return (
        <div className={classes.root} >
            <Grid container spacing={5} >
                {items /*paso el array de componentes Item para renderizarlos*/} 
            </Grid>
        </div>
    )
}