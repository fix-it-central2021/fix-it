import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Item  from './Item'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '40px'
    }    
}));

const  obtener_items = async ()  => {      /*aca obtengo datos de bases de datos*/ 
    let response 
    response = await fetch('http://localhost:3600/repuesto', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.  
        mode: 'cors',      
        headers: {
            'access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }             
      });
      const data=response.json()
      
      return data; // parses JSON response into native JavaScript objects
    }
    

let items =[]

obtener_items().then( data=>{
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