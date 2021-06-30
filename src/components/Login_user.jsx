import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter ,Link  , Redirect} from 'react-router-dom'
import {User}  from '../backend/user.js'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';



const styles = {
    input: {
        fontSize: '3.8vmin'
      
    },

    item_grid: {
        border: 2,
        fontSize: '3vmin',
        borderBlockStyle: 'solid',
        marginTop: 20,
        marginRight: '3vmin',
        borderColor: 'gray',
        borderWidth: '0.1vmin',
        borderRadius: '4vmin',
        padding: 25,
        color: '#2755A3',
    },

    container_grid: {
        width: '50vmin',
        marginLeft: '10vmin',
        borderRightStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 2,
        heigth: '100%'
    },

    text_field: {
        height: '5vmin',
        width: '60vmin',
       marginBottom: '3.5vmin',
        font: 'msyi'
    },

    boton: {
        borderRadius: 43,
        backgroundColor: '#15086B',
        width: '40vmin',
        height: '7vmin',
        marginLeft: '6vmin',
        color: 'white',
        marginTop: '15vmin',
        fontSize: '2vmin',
        Typography: {
            fontFamily: ['msyi'],
        }


    },

};



class Login_user extends Component {
    state = {}

    obtener_datos = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value }) //uso corchetes esta vez[] porque con corchetes me aseguro a que la propiedad 
        //sea calculada entonces si mi campo se llama cantidad el campo se llamara cantidad y si es
        //nombre se llamara nombre
    }

    render() {
        const iniciar_sesion = () => {       
            

            const usuario = this.state.user
            const pass = this.state.pass

          

           const user_=new User()

            user_.login(usuario,pass).then(
                (estado)=>{
                    if(estado===404){
                        toast.error('Usuario o contraseña incorrecta', {
                            position: "top-right",
                            autoClose: 4000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                        });
                    }else{
                       
                        window.Inicio.setState({token : sessionStorage.getItem("token")})

                        this.props.history.push({
                            pathname: '/tienda',
                            state: {
                                reload_ : false
                            }

                        });   
                        


                          

                    }
                  }
            )
            
        }       //por cada elemento agrego al array un componente item
            return (

                <div style={{
                    marginTop: '6%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent : 'center'

                }}>
                    <ToastContainer></ToastContainer>

                    <Grid spacing={5} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '3vmin',
                        marginTop: '15vmin'

                    }}>

                        <Grid spacing={5} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: 50,


                        }}>
                            <Typography variant="h6" color="textSecondary" component="body1" style={{
                                color: '#29274E',
                                marginRight: '17.9vmin',
                                fontSize: '3.8vmin'
                            }}> {"Usuario: "}</Typography>


                            <TextField
                                variant="outlined"
                                label="Usuario"
                                name="user"
                                style={styles.text_field}
                                InputProps={{
                                    style: styles.input,
                                }}
                                onChange={this.obtener_datos}

                            />

                        </Grid>

                        <Grid spacing={5} style={{
                            display: 'flex',
                            flexDirection: 'row'

                        }}>
                            <Typography variant="h6" color="textSecondary" component="body1" style={{
                                color: '#29274E',
                                font: 'msyi',
                                marginRight: '14vmin',
                                fontSize: '3.8vmin'
                            }}>  {"Contraseña: "}</Typography>
                            <TextField
                                variant="outlined"
                                label="contraseña"
                                type = "password"
                                name="pass"
                                style={styles.text_field}
                                InputProps={{
                                    style: styles.input
                                }}
                                onChange={this.obtener_datos}


                            />
                        </Grid>

                        



                        <Grid spacing={5} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: '100'

                        }}>
                           
                                <Button onClick={() => iniciar_sesion()} type="submit" size="large" color="primary" style={styles.boton}>
                                    Iniciar sesión
                                </Button>
                           

                            <Link to="/registro" >
                                <Button type="submit" size="large" color="primary" style={styles.boton}>
                                    Registrarse
                                </Button>
                            </Link>
                        </Grid>


                    </Grid>


                </div >

            )
        





    }
}

export default withRouter(Login_user);



