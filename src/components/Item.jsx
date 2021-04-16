/* eslint-disable jsx-a11y/iframe-has-title */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Image} from 'cloudinary-react';



export default class Item extends Component {
   
    render() {
        const { children } = this.props
        const objeto = children

        return (

            <Grid item xs={6}  md={3} >
                <Link to = {{
                    pathname: "/vista-item/"+objeto._id,
                    state:{
                        id: objeto._id
                                            }}}>
                    <Paper style={{
                        
                        textAlign: 'center'
                    }}>
                        <Image cloudName="fix-it" publicId={objeto.img} alt = "Repuesto"style={{
                            height: '100%',
                            width: '100%',
                            top:0,
                            left:0
                        }}/>
                        <h5>{objeto.nombre}</h5>


                    </Paper>
                </Link>

            </Grid>




        )



    }

}