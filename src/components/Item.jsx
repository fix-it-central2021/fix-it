/* eslint-disable jsx-a11y/iframe-has-title */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';
import { Height } from '@material-ui/icons';



export default class Item extends Component {
   
    render() {
        const { children } = this.props
        const objeto = children

        return (

            <Grid item xs={6} sm={3}  md={3} >
                <Link to = {{
                    pathname: "/vista-item/"+objeto._id,
                    state:{
                        id: objeto._id
                                            }}}>
                    <Paper style={{
                        
                        textAlign: 'center'
                    }}>
                        <div style={{
                            maxWidth: '20vmin',
                            height: '100%'
                        }}>
                        <Image cloudName="fix-it" publicId={                              
                           "Repuestos/"+ objeto.img} alt = "Repuesto"style={{
                           
                            width: '100%',
                            top:0,
                            left:0
                        }}/>
                        </div>
                       
                        <h5>{objeto.nombre}</h5>


                    </Paper>
                </Link>

            </Grid>




        )



    }

}