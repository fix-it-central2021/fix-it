/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Image, Transformation } from 'cloudinary-react';
import { Repuesto } from '../backend/repuesto'
import { Redirect } from "react-router";

const useStyles = makeStyles(() => ({



  text_field: {

    width: '27vmin',
    marginBottom: '2.3vmin'
  },

  boton: {
    borderRadius: "4.3vmin",
    backgroundColor: '#15086B',
    width: "40vmin",
    height: "7vmin",
    marginLeft: "6vmin",
    color: 'white',
    marginTop: '1.5vmin',
    Typography: {
      fontFamily: ['msyi']
    }


  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  image: {

    marginRight: "3vmin",
    width: "30vmin"
  }
}));





const repuesto = new Repuesto()

export default function Vista_item(props) {
  const classes = useStyles()

  const [allValues, setAllValues] = useState({
    repuesto_buscado: {},
    is_fetching: true
   


  })

  const [token_user, set_token_user] = useState({
    token: sessionStorage.getItem("token") + ' ' , user: sessionStorage.getItem("user")  })

  const [count, setcount] = useState({
    count: 0

  })




  const { id } = props

  useEffect(() => {
    repuesto.traer_repuesto(id)
      .then((data) => {
        console.log(data)
        setAllValues({
          repuesto_buscado: data,
          is_fetching: false
          

        })

      }).catch((error) => {

        if (error.response) {

          error.response.status === 401 ? 
            sessionStorage.setItem("token", null)  :   sessionStorage.setItem("token", null);

            error.response.status === 401 ? 
            sessionStorage.setItem("user", null)  :   sessionStorage.setItem("user", null);

            set_token_user( { token: sessionStorage.getItem("token") + ' ' , user: sessionStorage.getItem("user")})
          setAllValues({
            repuesto_buscado: {},
            is_fetching: true
            
  
          })
         
        }


      })
  }, [id])









  const agregar_a_carrito = (repuesto_buscado) => {

    for (let i = 0; i < count; i++) {
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
      token_user.token===null ? 

      <Redirect to="/login"/>
      :
      <Card style={{
        marginTop: 30

      }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom style={{
              textAlign: 'center',
              Typography: {
                fontFamily: ['msyi'],

              },
              color: '#29274E',
              fontSize: '7vmin'
            }}>
              {allValues.is_fetching ? 'Fetching name...' : allValues.repuesto_buscado.nombre}
            </Typography>
          </Grid>

          <CardActionArea style={{ display: 'flex' }}>

            {allValues.is_fetching ? 'Fetching image...' :
              <div className={classes.image}>
                <Image style={{
                  width: "100%"

                }} cloudName="fix-it" publicId={"Repuestos/" + allValues.repuesto_buscado.img} alt="Repuesto"  >

                </Image>
              </div>
            }

            <Grid item xs={3}>
              <CardContent >


                <Typography variant="h4" color="textSecondary" component="p" style={{
                  color: '#29274E',
                  marginBottom: "5vmin",
                  fontSize: '3.8vmin'

                }}>
                  {" Precio:  Q " + (allValues.is_fetching ? 'Fetching price...' : allValues.repuesto_buscado.precio)}
                </Typography>

                <CardActions className={classes.form}>
                  <TextField
                    variant="outlined"
                    label="Cantidad"
                    name="cantidad"/*utilizo la cantidad del props*/
                    className={classes.text_field}
                    InputProps={{
                      style: {
                        fontSize: "3.8vmin"
                      }
                    }}
                    onChange={e => setcount(e.target.value)}
                  //obtengo cantidad cuando lo cambie
                  />

                  <Link to="/crear_orden" >
                    <Button type="submit" onClick={() => agregar_a_carrito(allValues.repuesto_buscado) /*se llama con fat arrow functions 
          porque si solo paso la variable dentro de las llaves se va a llamar cuando renderize el componente*/} size="large" color="primary" className={classes.boton + " d-none d-md-block"}>
                      Agregar al carrito de compras
                    </Button>
                    <Button type="submit" onClick={() => agregar_a_carrito(allValues.repuesto_buscado) /*se llama con fat arrow functions 
          porque si solo paso la variable dentro de las llaves se va a llamar cuando renderize el componente*/} size="small" color="primary" className={classes.boton + " d-block d-md-none"}>
                      Agregar
                    </Button>
                  </Link>

                </CardActions>

              </CardContent>
            </Grid>
          </CardActionArea>
        </Grid>


      </Card>
      
      


    )

  




}