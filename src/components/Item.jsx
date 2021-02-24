/* eslint-disable jsx-a11y/iframe-has-title */
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'




export default class Item extends Component {
   
    render() {
        const { children } = this.props
        const objeto = JSON.parse(children)
        
        return (

            <Grid item xs={6}  md={3} >
                <Link to = {{
                    pathname: "/vista-item/"+objeto.Id,
                    state:{
                        id: objeto.Id
                                            }}}>
                    <Paper style={{
                        
                        textAlign: 'center'
                    }}>
                        <iframe src={objeto.Imagen} style={{
                            height: '100%',
                            width: '100%',
                            top:0,
                            left:0
                        }}></iframe>
                        <h5>{objeto.Descripcion}</h5>


                    </Paper>
                </Link>

            </Grid>




        )



    }

}