import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HomePage,CrearOrden,Tienda} from './App';
import reportWebVitals from './reportWebVitals';
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './components/Cabecera'
import Barra from './components/Barra'

ReactDOM.render(
  <Router>
    <Cabecera titulo="FIX IT" />         
    <Barra></Barra> 
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/crear_orden" component={CrearOrden}/>
      <Route exact path="/tienda" component={Tienda}/>

    </Switch>
   </Router> ,
  document.getElementById('root')
  
);
const Item1 = {
  Id : 1,
  Imagen : "https://drive.google.com/file/d/1psNzJDPOyuEC8m7U_FtiwrmwP2pBXLWR/preview",
  Descripcion: "llantas"
}

const Item2 = {
  Id : 2,
  Imagen : "https://drive.google.com/file/d/1K9RkL2XxsvLu9gFshS0-Q4UuxMh-D21A/preview",
  Descripcion: "Filtro K&N"
}

const Item3 = {
  Id : 3,
  Imagen : "https://drive.google.com/file/d/1zNpciaw6SWGzF7dmfGpDT32SPbwv4LdD/preview",
  Descripcion: "Kit de tiempo"
}

const Item4 = {
  Id : 4,
  Imagen : "https://drive.google.com/file/d/19M9qevLTjsJRbM6CiChhjm28NDn0Y605/preview",
  Descripcion: "Cigueñal"
}

const Item5 = {
  Id : 5,
  Imagen : "https://drive.google.com/file/d/165CFNi4Af8sv1vAc34nEUGfkPMRTGeaW/preview",
  Descripcion: "Arbol de levas"
}

const Item6 = {
  Id : 6,
  Imagen : "https://drive.google.com/file/d/1A9Ui9h1Gnq13FROBVbrLArN8U5RgQvZF/preview",
  Descripcion: "Filtro de aceite"
}

const Item7= {
  Id : 7,
  Imagen : "https://drive.google.com/file/d/1yJ3REN8WBNycZRpK1IwyWNBUUglJOag-/preview",
  Descripcion: "Turbo"
}

const Item8 = {
  Id : 8,
  Imagen : "https://drive.google.com/file/d/1pyUsOnDWXgcBt6imgD882EzbrtAKvN1C/preview",
  Descripcion: "Silvin de lancer"
}

const Item9 = {
  Id : 9,
  Imagen : "https://drive.google.com/file/d/1ZNvFOL3q8q3swubzPsouxtobjbljR8I5/preview",
  Descripcion: "Radiador"
}


const items_select = []

items_select.push(JSON.stringify(Item1))
items_select.push(JSON.stringify(Item2))
items_select.push(JSON.stringify(Item3))
items_select.push(JSON.stringify(Item4))
items_select.push(JSON.stringify(Item5))
items_select.push(JSON.stringify(Item6))
items_select.push(JSON.stringify(Item7))
items_select.push(JSON.stringify(Item8))
items_select.push(JSON.stringify(Item9))

localStorage.setItem('items_select', JSON.stringify( items_select))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
