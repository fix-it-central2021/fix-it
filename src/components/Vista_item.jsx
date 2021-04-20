/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'

import {Image,Transformation} from 'cloudinary-react';
import {Repuesto} from '../backend/repuesto'

const styles = {
  input: {
    fontSize: 30
  },


  text_field: {

    width: 200
  },

  boton: {
    borderRadius: 43,
    backgroundColor: '#15086B',
    width: 400,
    height: 70,
    marginLeft: 60,
    color: 'white',    
    marginTop: '15px',
    Typography:{
      fontFamily: ['msyi']
    }
    

  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  image: {

    height: '0.2vmim',
    width: '0.2vmim',
    top:0,
    left:0
  }




};

export default class Vista_item extends Component {
  state = {
    repuesto_buscado:{}
  }

  obtener_datos = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value }) //uso corchetes esta vez[] porque con corchetes me aseguro a que la propiedad 
    //sea calculada entonces si mi campo se llama cantidad el campo se llamara cantidad y si es
    //nombre se llamara nombre
  }



  componentDidMount(){
    const repuesto=new Repuesto()
    const { id } = this.props
    repuesto.traer_repuesto(id)
    .then((data)=>{

      this.setState({repuesto_buscado:data})
    })
    .catch((error)=>{
      console.log('Hubo un problema al traer datos al API y guardarlos: ' + error.message);
    }       
      

    )
  }

  render() {
    


    



    const agregar_a_carrito = (repuesto_buscado) => {

      for (let i = 0; i < this.state.cantidad; i++) {
        let carrito = []
        carrito = JSON.parse(sessionStorage.getItem('carrito'))
        if (carrito != null) {
          carrito.push(JSON.stringify(repuesto_buscado))
        } else {
          carrito = []
          carrito.push(JSON.stringify(repuesto_buscado))
        }
        sessionStorage.setItem('carrito', JSON.stringify(carrito))
      }
    }



    return (
      <Card style={{
        marginTop: 30

      }}>
        <Typography gutterBottom variant="h4" component="h2" style={{
          textAlign: 'center',
          Typography:{
            fontFamily:['msyi']
          },
          color:'#29274E'
        }}>
          {this.state.repuesto_buscado.nombre}
        </Typography>
        <CardActionArea style={{ display: 'flex' }}>
        <Image cloudName="fix-it" publicId={"Repuestos/"+this.state.repuesto_buscado.img} alt = "Repuesto"  >
        <Transformation width="300"   crop="fill" />
          </Image>
          <CardContent >

            <Typography variant="h5" color="textSecondary" component="p" style={{
              color: '#29274E',
              marginBottom: 50,

            }}>
              {" Precio:  Q " + this.state.repuesto_buscado.precio}
            </Typography>
            <CardActions style = {styles.form}>
              <TextField
                variant="outlined"
                label="Cantidad"
                name="cantidad"/*utilizo la cantidad del props*/
                style={styles.text_field}
                InputProps={{
                  style: styles.input
                }}//obtengo cantidad cuando lo cambien
                onChange={this.obtener_datos}
              />

              <Link to="/crear_orden" >
                <Button type="submit" onClick={() => agregar_a_carrito(this.state.repuesto_buscado) /*se llama con fat arrow functions 
            porque si solo paso la variable dentro de las llaves se va a llamar cuando renderize el componente*/} size="large" color="primary" style={styles.boton}>
                  Agregar al carrito de compras
                  </Button>
              </Link>

            </CardActions>
          </CardContent>
        </CardActionArea>

      </Card>


    )
  }

}