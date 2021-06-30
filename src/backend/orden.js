import { User } from './user'


export class Orden_backend {


  insertar_orden = async (orden) => {
    let res
    const user = new User()
    user.re_sigin(sessionStorage.getItem("user"))
    res = await fetch('http://localhost:3600/orden', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.  
      mode: 'cors',
      headers: {
        'access-token': sessionStorage.getItem('token'),
        'Content-Type': 'application/json',

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(orden)
    })

    if (res.status === 401) {
      let data = await res.json()

      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      window.Inicio.setState({ token: sessionStorage.getItem("token") })
     
      return data
    } else if (res.status === 200) {
      let data = await res.json()
      const user = new User()
      user.re_sigin(sessionStorage.getItem("user"))
      return data
    }

  }



  cancelar_orden = async (id) => {
    let res
    const user = new User()
    user.re_sigin(sessionStorage.getItem("user"))
    res = await fetch('http://localhost:3600/orden/' + id, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.  
      mode: 'cors',
      headers: {
        'access-token': sessionStorage.getItem('token'),
        'Content-Type': 'application/json',

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

    })
    console.log(res)
    if (res.status === 401) {
      let data = await res.json()

      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      window.Inicio.setState({ token: sessionStorage.getItem("token") })

      return data
    } else if (res.status === 200) {
      let data = await res.json()
      const user = new User()
      user.re_sigin(sessionStorage.getItem("user"))
      return data
    }
  }

  actualizar = async (orden) => {
    let res
    console.log(orden)
    const user = new User()
    user.re_sigin(sessionStorage.getItem("user"))
    res = await fetch('http://localhost:3600/orden/' + orden._id, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.  
      mode: 'cors',
      headers: {
        'access-token': sessionStorage.getItem('token'),
        'Content-Type': 'application/json',

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(orden)

    })
    console.log(res)
    if (res.status === 401) {
      let data = await res.json()

      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      window.Inicio.setState({ token: sessionStorage.getItem("token") })

      return data
    } else if (res.status === 200) {
      let data = await res.json()
      const user = new User()
      user.re_sigin(sessionStorage.getItem("user"))
      return data
    }
  }



  traer_ordenes = async () => {
    let response
    const user = new User()
    await user.re_sigin(sessionStorage.getItem("user"))
    response = await fetch('http://localhost:3600/orden/' + sessionStorage.getItem("user"), {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.  
      mode: 'cors',
      headers: {
        'access-token': sessionStorage.getItem('token'),
        'Content-Type': 'application/json',

        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })

    if (response.status === 401) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      window.Inicio.setState({ token: sessionStorage.getItem("token") })

      return { "mensaje": "no autorizado" }
    } else {
      return response.json()
    }
  }

}