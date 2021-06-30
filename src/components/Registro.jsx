import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import { Orden_backend } from '../backend/orden.js'
import { User } from '../backend/user'
import { ToastContainer, toast } from 'react-toastify';




const styles = {
    input: {
        fontSize: '3.5vmin',
        padding: '13px 10px'

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
        width: '70vmin',
        marginLeft: '10vmin',
        borderRightStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 2,
        overflow: 'auto',
        height: '60vmin'
    },

    text_field: {

        width: '45vmin',
        font: 'msyi'
    },

    boton: {
        borderRadius: 43,
        backgroundColor: '#15086B',
        width: '20vmin',
        height: '7vmin',
        marginLeft: '6vmin',
        color: 'white',
        marginTop: '10vmin',
        fontSize: '2vmin',
        Typography: {
            fontFamily: ['msyi'],
        }


    },

    helperText: {

        color: 'red'
    }



};


class Registrarse extends Component {
    state = { errorTextc: '', errorTextu: '', errorTextco: '' }

    async existe_usuario(user) {
        const _user = new User()
        return (await _user.buscar_user(user))



    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        return re.test(String(email).toLowerCase());
    }

    phonenumber(inputtxt) {
        var phoneno = /^\d{8}$/;
        return phoneno.test(String(inputtxt).toLowerCase())
    }

    obtener_datos = async ({ target }) => {

        if (target.name === "user") {

            if (await this.existe_usuario(target.value)) {
                this.setState({ errorTextu: 'El usuario que ingreso ya esta en uso' })

            } else {
                this.setState({ errorTextu: '' })
            }

        } else if (target.name === "conf_contra") {
            if (target.value !== this.state.contra) {
                this.setState({ errorTextc: 'La contraseñas no coinciden' })

            } else {
                this.setState({ errorTextc: '' })
            }

        } else if (target.name === "correo") {
            if (!this.validateEmail(target.value)) {
                this.setState({ errorTextco: 'Correo invalido' })

            } else {
                this.setState({ errorTextco: '' })
            }

        } else if (target.name === "telefono") {
            if (!this.phonenumber(target.value)) {
                this.setState({ errorTextt: 'Telefono invalido' })

            } else {
                this.setState({ errorTextt: '' })
            }
        }


        const { name, value } = target
        this.setState({ [name]: value }) //uso corchetes esta vez[] porque con corchetes me aseguro a que la propiedad 
        //sea calculada entonces si mi campo se llama cantidad el campo se llamara cantidad y si es
        //nombre se llamara nombre
    }

    render() {

        const registrarse = () => {

            if (this.state.errorTextu === '' && this.state.errorTextco === '' && this.state.errorTextt === '' && this.state.errorTextc === '') {
                const user = {

                    user: this.state.user,
                    password: this.state.contra,
                    correo: this.state.correo,
                    telefono: this.state.telefono

                }

                const user_ = new User()

                user_.registrar_user(user).then(
                    (estado) => {
                        if (estado === 200) {
                            window.Inicio.setState({ token: sessionStorage.getItem("token") })

                            this.props.history.push({
                                pathname: '/tienda',
                                state: {
                                    reload_: false
                                }

                            });
                        } else {
                            toast.error('Se genero un error al registrar su usuario', {
                                position: "top-right",
                                autoClose: 4000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: false,
                                draggable: true,
                                progress: undefined,
                            });

                        }

                    }

                )





            } else {
                toast.error('Los datos son invalidos', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });












            }
        }











        //por cada elemento agrego al array un componente item
        return (

            <div style={{
                marginTop: 70,
                display: 'flex',
                flexDirection: 'row'

            }}>
                <ToastContainer></ToastContainer>



                <Grid container style={{
                    height: 'fit-content'
                }}>

                    <Grid item xs={6} md={3} style={{
                        paddingLeft: '4vmin',
                        height: '10vmin',
                        marginBottom: '2vmin',
                        textAlign: 'initial'
                    }} >
                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#29274E',
                            fontSize: '3.8vmin'

                        }}> {"Usuario: "}</Typography>
                    </Grid>
                    <Grid item xs={6} md={3} className='text-xs-center text-sm-center text-md-center text-lg-left' style={{
                        height: '10vmin',
                        marginBottom: '6vmin'
                    }}>
                        <TextField
                            error={this.state.errorTextu === '' ? false : true}
                            variant="outlined"
                            label="Usuario"
                            name="user"
                            style={styles.text_field}
                            inputProps={{
                                style: styles.input,
                            }}
                            onChange={this.obtener_datos}
                            helperText={this.state.errorTextu}


                        />

                    </Grid>



                    <Grid item xs={6} md={3} style={{
                        paddingLeft: '4vmin',
                        height: '10vmin',
                        marginBottom: '2vmin',
                        textAlign: 'initial'

                    }} >
                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#29274E',
                            font: 'msyi',
                            fontSize: '3.8vmin'

                        }}>  {"Contraseña: "}</Typography>

                    </Grid>

                    <Grid item xs={6} md={3} className='text-xs-center text-sm-center text-md-center text-lg-left'
                        style={{
                            height: '10vmin',
                            marginBottom: '6vmin'
                        }}
                    >
                        <TextField
                            type="password"
                            variant="outlined"
                            label="Contraseña"
                            name="contra"
                            style={styles.text_field}
                            inputProps={{
                                style: styles.input
                            }}
                            onChange={this.obtener_datos}



                        />
                    </Grid>

                    <Grid xs={6} md={3} style={{

                        paddingLeft: '4vmin',
                        height: '10vmin',
                        marginBottom: '2vmin',
                        textAlign: 'initial'

                    }} >
                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#29274E',
                            font: 'msyi',
                            fontSize: '3.8vmin'

                        }}>  {" Confirmar Contraseña: "}</Typography>

                    </Grid>

                    <Grid xs={6} md={3} className='text-xs-center text-sm-center text-md-center text-lg-left'
                        style={{
                            height: '10vmin',
                            marginBottom: '6vmin'
                        }}
                    >
                        <TextField
                            error={this.state.errorTextc === '' ? false : true}
                            type="password"
                            variant="outlined"
                            label="Contraseña"
                            name="conf_contra"
                            style={styles.text_field}
                            inputProps={{
                                style: styles.input
                            }}
                            onChange={this.obtener_datos}
                            helperText={this.state.errorTextc}
                            FormHelperTextProps={{
                                className: styles.helperText
                            }}



                        />
                    </Grid>

                    <Grid xs={6} md={3} style={{
                        paddingLeft: '4vmin',
                        height: '10vmin',
                        marginBottom: '2vmin',
                        textAlign: 'initial'

                    }} >
                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#29274E',
                            font: 'msyi',
                            fontSize: '3.8vmin'

                        }}>  {"Correo: "}</Typography>

                    </Grid>

                    <Grid xs={6} md={3} className='text-xs-center text-sm-center text-md-center text-lg-left'
                        style={{
                            height: '10vmin',
                            marginBottom: '6vmin'
                        }}
                    >
                        <TextField
                            error={this.state.errorTextco === '' ? false : true}
                            variant="outlined"
                            label="Correo"
                            name="correo"
                            style={styles.text_field}
                            inputProps={{
                                style: styles.input
                            }}
                            onChange={this.obtener_datos}
                            helperText={this.state.errorTextco}


                        />
                    </Grid>

                    <Grid xs={6} md={3} style={{
                        paddingLeft: '4vmin',
                        height: '10vmin',
                        marginBottom: '2vmin',
                        textAlign: 'initial'

                    }} >
                        <Typography variant="h5" color="textSecondary" component="body1" style={{
                            color: '#29274E',
                            font: 'msyi',
                            fontSize: '3.8vmin'

                        }}>  {"Telefono: "}</Typography>

                    </Grid>

                    <Grid xs={6} md={3} className='text-xs-center text-sm-center text-md-center text-lg-left'
                        style={{
                            height: '10vmin',
                            marginBottom: '6vmin'
                        }}
                    >
                        <TextField
                            error={this.state.errorTextt === '' ? false : true}

                            variant="outlined"
                            label="Teléfono"
                            name="telefono"
                            style={styles.text_field}
                            inputProps={{
                                style: styles.input
                            }}
                            onChange={this.obtener_datos}
                            helperText={this.state.errorTextt}


                        />
                    </Grid>


                    <Grid item xs={12} >

                        <Button onClick={() => registrarse()} type="submit" size="large" color="primary" style={styles.boton}>
                            Registrarse
                        </Button>

                    </Grid>



                </Grid>


            </div >

        )






    }

}

export default withRouter(Registrarse);

