import React, { Component, useCallback } from 'react'
import logo from '../img/coche-con-rueda-de-repuesto.png'
import Login from './Login'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';



export default class Cabecera extends Component {


  //metodo para ver las opciones disponibles del menu segun el usuario
  opciones_disponibles = (listaopciones) => {
    alert("sus opciones son :" + listaopciones)  //metodo para pasar opciones disponibles sgun el usuario al darle click a su nombre
  }



  render() {
    const { titulo } = this.props //obtengo la propiedad de this.props que es un objeto reservado de todos los componentes que me permite sacar propiedades para usarlas

    return (
      <div className="App-header">

        <img src={logo} /*para enviar algo mas que un string abro llaves*/ className="App-logo" alt="logo" />
        <h1 className="titulo"> {titulo} </h1>
        <Grid container spacing={1} style={{ width: "50vmin"}}>

          <Grid item xs={12} className="row" >
            <Login /*envio metodo de opciones y en el this.props la lista que puede ser variable*/></Login>
          </Grid>

          <Grid item xs={6} >
            <TextField className="d-none d-lg-block"
              style={{ width: "20vmin", backgroundColor: "white", borderRadius: "20px" }} /* doble llave es para pasar un objeto
                                las primerra llaves hacen referencia para pasar algo mas que un string y las segundas son del objeto del estilo*/
              type="search"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>

          <Grid style={{"text-align": "center" }}  item xs={12} sm={12}  md={6}  >
            <Link to="/crear_orden">
              <IconButton aria-label="add to shopping cart">
                <AddShoppingCartIcon id="shopping_button" />
              </IconButton>
            </Link>
          </Grid>




        </Grid>


      </div>
    )
  }

}