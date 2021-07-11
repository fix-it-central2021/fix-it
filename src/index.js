import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomePage, CrearOrden, Tienda, Vistaitem, Ordenes, Login, Ubicacion, Formactualizar, Registrarse_ } from './App';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './components/Cabecera'
import Footer from './components/Footer'

import Barra from './components/Barra'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const THEME = createMuiTheme({
  typography: {
    "fontFamily": "msyi"
  }
});




ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Router>

      <Cabecera titulo="FIX I" />
      <Barra></Barra>
      <div id="page-container">
        <div id="content-wrap">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/crear_orden" component={CrearOrden} />
            <Route exact path="/tienda" component={Tienda} />
            <Route exact path="/ordenes" component={Ordenes} />
            <Route exact path="/vista-item/:id" /*paso id cuando llamo a la vista individual de los items*/ component={Vistaitem} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/ubicacion" component={Ubicacion} />
            <Route exact path="/actualizar/:id" component={Formactualizar} />
            <Route exact path="/registro" component={Registrarse_} />


          </Switch>
        </div>
        <Footer />
      </div>


      
    </Router>
  </MuiThemeProvider>
  ,
  document.getElementById('root')

);





const carrito = []
sessionStorage.setItem('carrito', JSON.stringify(carrito))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
