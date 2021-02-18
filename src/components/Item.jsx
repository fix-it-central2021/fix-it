import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Autorenew } from '@material-ui/icons';
import React, { Component } from 'react'



export default class Item extends Component {

    render() {
        const { children } = this.props
        const objeto = JSON.parse(children)
        return (
            <Grid item xs={6} md={3}>
                <Paper style={{
                           padding: 100,
                           textAlign: 'center'
                }}> 
                <iframe src={objeto.Imagen} style={{
                           marginLeft:'auto',
                           marginRight:'auto',
                           height:200,
                           width:200
                }}></iframe>
                <h5>{objeto.Descripcion}</h5>


                </Paper>
            </Grid>


        )



    }

}