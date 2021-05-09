import axios from "axios"
import { User } from './user'

export class Repuesto {

  async obtener_items() {      /*aca obtengo datos de bases de datos*/
    let response

    response = await fetch('http://localhost:3600/repuestos', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.  
      mode: 'cors',
      headers: {

        'Content-Type': 'application/json',

        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    const data = response.json()

    return data; // parses JSON response into native JavaScript objects
  }

  async traer_repuesto(id) {


    let res = await fetch('http://localhost:3600/repuesto/' + id, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.  
      mode: 'cors',
      headers: {
        'access-token': sessionStorage.getItem('token'),
        'Content-Type': 'application/json',

      }
    })

    if (res.status === 401) {
      let data = await res.json()

      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')
      return data
    } else if (res.status === 200) {
      let data = await res.json()
      const user = new User()
      user.re_sigin(sessionStorage.getItem("user"))
      return data
    }









  }


}


