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

const allStorage = () => {      /*aca obtengo datos de bases de datos*/ 
    localStorage.removeItem('firebase:host:foodify-dbdf9.firebaseio.com');
    let items_select
    items_select = JSON.parse(localStorage.getItem('items_select'))  
    return items_select;
}

const elements = allStorage();
const items = []


export default function Tienda() { 
    const classes = useStyles()
    elements.forEach(element => items.push(<Item>{element}</Item>));

    return (
        <div className={classes.root} >
            <Grid container spacing={5} >
                {items}
            </Grid>
        </div>
    )
}