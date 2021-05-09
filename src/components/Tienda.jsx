import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item'
import { Repuesto } from '../backend/repuesto.js'
import {  useEffect} from 'react'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '40px'
    }
}));



let items = []

const repuesto = new Repuesto();

repuesto.obtener_items().then(data => {
    //obtengo array de repuestos para imprimirlos

    data.forEach(repuesto => items.push(<Item>{repuesto}</Item>)); //por cada elemento agrego al array un componente item
    //se coloca afuera de la funcion porque si no cada vez que se manda a llamar el componente agrega de nuevo los elementos


}

).catch(function (error) {
    console.log('Hubo un problema al traer datos al API y guardarlos: ' + error);
});

export default function Tienda(props) {

    const classes = useStyles()
    const reloadCount = Number(sessionStorage.getItem('reloadCount')) || 0;
    //pasando el children element que es el objeto del repuesto
    useEffect(() => {
        const { reload_ } = props
        if (reload_) {
            if(reloadCount < 1) {
                sessionStorage.setItem('reloadCount', String(reloadCount + 1));
                window.location.reload();
              } else {
                sessionStorage.removeItem('reloadCount');
              }
          
        }
    },[])

    return (
        <div className={classes.root} >
            <Grid container spacing={2} >
                {items /*paso el array de componentes Item para renderizarlos*/}
            </Grid>
        </div>
    )
}