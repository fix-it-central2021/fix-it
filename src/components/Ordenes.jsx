import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Orden from './Orden'
import {Orden_backend} from '../backend/orden'



export default class Ordenes extends Component {
    
    state = {
        ordenes:[]
      }

    componentDidMount(){
        const orden_backend = new Orden_backend()

        orden_backend.traer_ordenes().then((data)=>{

            this.setState({ordenes:data})
          })
          .catch((error)=>{
            console.log('Hubo un problema al traer datos al API y guardarlos: ' + error.message);
          }  )
    }

    render() {

        const ordenes = this.state.ordenes
        console.log(ordenes)
        const items = []



        if (ordenes!=null) {

            if(ordenes.length!=0){
                ordenes.forEach(item => {
                    items.push(                                     
                        <Orden orden={item}></Orden>);
                });
    
                //por cada elemento agrego al array un componente item
                return (
                        <div   style={{
                            width: '85%',
                            marginTop: 30,
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft:'15%',
                            marginRight:0
    
                        }}>
                            {items}
                        </div>
                )
            }else{
            return (<h1
                style={{
                    marginTop: 200
                }}
            >Todavía no tienes ninguna orden :(  </h1>)
            }


        } else {
            return (<h1
                style={{
                    marginTop: 200
                }}
            >Todavía no tienes ninguna orden :(  </h1>)
        }





    }
}


