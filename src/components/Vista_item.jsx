/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';




const styles= {
  input: {
      fontSize:30
  }    ,

 

  text_field:{
      
      width: 200
  }
};

export default class Vista_item extends Component {
  state = {}

  obtener_datos = ({target}) => {
    const {name,value} = target
    this.setState({ [name]: value }) //uso corchetes esta vez[] porque con corchetes me aseguro a que la propiedad 
    //sea calculada entonces si mi campo se llama cantidad el campo se llamara cantidad y si es
    //nombre se llamara nombre
  }

render(){
  let items_select = []
  items_select = JSON.parse(localStorage.getItem('items_select'))
  const { id } = this.props

  const repuesto_buscado_array = items_select.find(repuesto => {
    const respuesto_o = JSON.parse(repuesto)
    return respuesto_o.Id === id
  })

  const repuesto_buscado = JSON.parse(repuesto_buscado_array)

  

  const agregar_a_carrito = (repuesto_buscado) => {

  for (let i = 0; i < this.state.cantidad ; i++) {
    let carrito = []
    carrito = JSON.parse(sessionStorage.getItem('carrito'))
    if(carrito!=null){
      carrito.push(JSON.stringify(repuesto_buscado))
    }else{
      carrito=[]
      carrito.push(JSON.stringify(repuesto_buscado))
    }   
    sessionStorage.setItem('carrito', JSON.stringify( carrito))
  }      
  }

 

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
            <Button type="submit" onClick={()=> agregar_a_carrito(repuesto_buscado) /*se llama con fat arrow functions 
            porque si solo paso la variable dentro de las llaves se va a llamar cuando renderize el componente*/} size="large" color="primary" style={{
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