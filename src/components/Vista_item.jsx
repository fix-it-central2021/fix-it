/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class Vista_item extends Component {

  render() {

    localStorage.removeItem('firebase:host:foodify-dbdf9.firebaseio.com');
    let items_select = []
    items_select = JSON.parse(localStorage.getItem('items_select'))
    const { id } = this.props

    const repuesto_buscado_array = items_select.find(repuesto => {
      const respuesto_o = JSON.parse(repuesto)
      return respuesto_o.Id === id
    })

    const repuesto_buscado = JSON.parse(repuesto_buscado_array)

    return (
      <Card style={{
        marginTop:30

      }}>
        <Typography gutterBottom variant="h4" component="h2" style={{
          textAlign: 'center'
        }}>
          {repuesto_buscado.Descripcion}
        </Typography>
        <CardActionArea style={{ display: 'flex' }}>
          <iframe src={repuesto_buscado.Imagen} style={{
            height: 500,
            width: 500
          }}></iframe>
          <CardContent>

            <Typography variant="h5" color="textSecondary" component="p" style={{
              color: '#29274E',
              marginBottom: 100,
              textAlign: 'justify',
              marginLeft: 70

            }}>
              {" Precio:  Q " + repuesto_buscado.Precio}
            </Typography>
            <CardActions>
              <Button size="large" color="primary" style={{
                color: 'white',
                font: 'msyi',
                borderRadius: 43,
                backgroundColor: '#15086B',
                width: 400,
                height: 70,
                marginLeft: 60

              }}>
                Agregar al carrito de compras
              </Button>
            </CardActions>
          </CardContent>
        </CardActionArea>

      </Card>


    )



  }

}